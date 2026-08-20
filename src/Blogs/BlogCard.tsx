import { useLayoutEffect, useRef, useState } from "react";
import "./styles/BlogCard.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import eastMojoLogo from "../assets/em.png";

gsap.registerPlugin(ScrollTrigger);

const mojo = eastMojoLogo;


const BLOGS_PER_PAGE = 10;

// ======================================================
// BLOG INTERFACE
// ======================================================

interface Blog {
  image: string;
  logo: string;
  title: string;
  summary: string;
  url: string;
}

// ======================================================
// BLOGS
// ======================================================

const blogs: Blog[] = [

  // PAGE 1

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/06/Screenshot-2026-06-09-at-2.22.51-PM.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "How yarn banks are changing the economics of weaving in rural Assam",
    summary:
      "Community-based yarn banks are helping rural women weavers in Assam reduce sourcing costs, save time and strengthen their livelihoods by bringing quality yarn closer to their villages.",
    url:
      "https://eastmojo.com/assam/2026/06/09/how-yarn-banks-are-changing-the-economics-of-weaving-in-rural-assam/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/06/Image-1.jpg?resize=1024%2C768&ssl=1",
    logo: mojo,
    title:
      "Nagaland: Peren village creates a reserve for Asiatic Golden Cat",
    summary:
      "A village in Nagaland’s Peren district has established a community conserved area dedicated to protecting the Asiatic Golden Cat, combining indigenous stewardship with modern conservation efforts.",
    url:
      "https://eastmojo.com/premium/2026/06/05/nagaland-peren-village-creates-a-reserve-for-asiatic-golden-cat/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2022/06/Untitled-design-23-1.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Pollution levels in the Northeast rose nearly 50% in a decade, study finds",
    summary:
      "A 25-year satellite study shows a sharp rise in pollution across Northeast India, with biomass burning emerging as a major source and industrial emissions adding to the region’s growing air-quality burden.",
    url:
      "https://eastmojo.com/news/2026/06/03/pollution-levels-in-the-northeast-rose-nearly-50-in-a-decade-study-finds/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/04/IMG_6896.jpeg?resize=800%2C600&ssl=1",
    logo: mojo,
    title:
      "Meghalaya bets on homestays to power next phase of tourism growth",
    summary:
      "Meghalaya is expanding its homestay programme to meet rising tourist demand while creating rural employment and ensuring that local communities capture a larger share of the state’s tourism economy.",
    url:
      "https://eastmojo.com/meghalaya/2026/05/29/meghalaya-bets-on-homestays-to-power-next-phase-of-tourism-growth/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-15-at-12.06.00.jpeg?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Who killed the church leaders in Manipur? May 13 ambush explained",
    summary:
      "The killing of three church leaders in Manipur has reignited concerns over armed groups, competing accusations and the fragile peace-building efforts unfolding amid the state’s prolonged ethnic conflict.",
    url:
      "https://eastmojo.com/manipur/2026/05/15/who-killed-the-church-leaders-in-manipur-may-13-ambush-explained/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/05/Austerity-Northeast.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "PM Modi has called for austerity: The Northeast already lives in it",
    summary:
      "Calls for fuel conservation and reduced consumption overlook the Northeast’s existing economic constraints, where geography, transport costs and fragile supply chains already impose a persistent inflation burden.",
    url:
      "https://eastmojo.com/news/2026/05/13/pm-modi-has-called-for-austerity-the-northeast-already-lives-in-it/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/05/image-2.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Assam: New Assembly richer and fewer criminal cases, but women still missing",
    summary:
      "Assam’s new Assembly is wealthier and more educated, with fewer legislators facing criminal cases, but women remain severely underrepresented with only seven of the 126 MLAs.",
    url:
      "https://eastmojo.com/assam/2026/05/09/assam-new-assembly-richer-and-fewer-criminal-cases-but-women-still-missing/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2025/06/sonam-weisawdong.jpg?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Explained: How a constitutional violation allowed Sonam Raghuvanshi to get bail",
    summary:
      "A Shillong court granted Sonam Raghuvanshi bail after finding that authorities had failed to properly communicate the grounds of her arrest, raising questions over constitutional protections and prolonged trial delays.",
    url:
      "https://eastmojo.com/premium/2026/04/29/explained-how-a-constitutional-violation-allowed-sonam-raghuvanshi-to-get-bail/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2021/09/nature-bamboo-green-growth.jpg?resize=800%2C600&ssl=1",
    logo: mojo,
    title:
      "Northeast is betting on bamboo economy, and this may be a good thing",
    summary:
      "Policy reforms are turning bamboo into an increasingly important economic resource in Northeast India, creating opportunities for rural enterprises and women-led businesses while opening new markets for traditional products.",
    url:
      "https://eastmojo.com/premium/2026/04/27/northeast-is-betting-on-bamboo-economy-and-this-may-be-a-good-thing/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/04/valte3.jpeg?resize=800%2C590&ssl=1",
    logo: mojo,
    title:
      "In Manipur, the body of an MLA remains in morgue, waiting for justice",
    summary:
      "The remains of former Thanlon MLA Vungzagin Valte have been kept in a morgue as his community seeks accountability for the attack that left him severely injured during the 2023 Manipur violence.",
    url:
      "https://eastmojo.com/premium/2026/04/27/in-manipur-the-body-of-an-mla-remains-in-morgue-waiting-for-justice/",
  },

  // PAGE 2

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2023/06/gangtok.jpeg?resize=800%2C600&ssl=1",
    logo: mojo,
    title:
      "Sikkim’s fertility crisis is real, and cash incentives won’t solve it: Here’s why",
    summary:
      "Sikkim’s fertility rate has fallen sharply, raising concerns about population decline, workforce sustainability and the long-term economic effects of delayed parenthood and rising living costs.",
    url:
      "https://eastmojo.com/premium/2026/04/02/sikkims-fertility-crisis-is-real-and-cash-incentives-wont-solve-it-heres-why/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-26-2026-at-12_26_37-PM.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "How a CAG audit exposed deep governance failures in Manipur",
    summary:
      "A CAG audit has highlighted administrative lapses, weak financial controls and governance failures across Manipur, raising concerns over public spending, welfare delivery and accountability.",
    url:
      "https://eastmojo.com/news/2026/03/26/how-a-cag-audit-exposed-deep-governance-failures-in-manipur/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-28-at-20.04.53.jpeg?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "True Ritual: Millets, mindfulness and a new café culture in Guwahati",
    summary:
      "A Guwahati café is building its identity around millet-based, gluten-free and refined-sugar-free food, reflecting a growing urban interest in conscious eating and alternative food cultures.",
    url:
      "https://eastmojo.com/assam/guwahati/2026/03/20/true-ritual-millets-mindfulness-and-a-new-cafe-culture-in-guwahati/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/03/ChatGPT-Image-Mar-19-2026-at-11_47_29-AM.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Act East sans delivery: Data shows persistent gaps in northeast spending",
    summary:
      "Despite increased allocations for Northeast development, gaps between budgeted funds and actual spending continue to raise questions about implementation, project execution and the effectiveness of India’s Act East strategy.",
    url:
      "https://eastmojo.com/premium/2026/03/19/act-east-sans-delivery-data-shows-persistent-gaps-in-northeast-spending/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/03/microplastics-05-00051.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Microplastic now in traditional northeast fish products, including Ngari: Study",
    summary:
      "A scientific study has detected microplastic contamination in traditional fermented fish products including Ngari, Hentak and Shidal, raising new questions about food safety and plastic pollution.",
    url:
      "https://eastmojo.com/news/2026/03/12/microplastic-now-in-traditional-northeast-fish-products-including-ngari-study/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-7-2026-01_21_37-PM.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "How the India–US trade pact could hurt agriculture in Northeast",
    summary:
      "Changes under the India–US trade pact could expose agricultural producers in the Northeast to greater competition, creating new challenges for farmers and regionally important crops.",
    url:
      "https://eastmojo.com/opinion/2026/02/07/how-the-india-us-trade-pact-could-hurt-agriculture-in-northeast/",
  },

  {
    image: "",
    logo: mojo,
    title:
      "Big promises, thin corridors: The Northeast’s quiet exclusion in Budget",
    summary:
      "Despite large infrastructure allocations, Budget 2026–27 may continue to leave the Northeast constrained by difficult terrain, delayed spending and funding structures that do not fully account for regional realities.",
    url:
      "https://eastmojo.com/opinion/2026/02/04/big-promises-thin-corridors-the-northeasts-quiet-exclusion-in-budget/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/01/619063677_25784089934578807_6100267423898582140_n.jpg?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Mizoram: Police crack woman’s murder case as protests turn violent",
    summary:
      "Police in Mizoram investigated a woman’s murder as protests over the case turned violent, bringing renewed attention to public anger, investigation and law-and-order concerns.",
    url:
      "https://eastmojo.com/mizoram/2026/01/28/mizoram-police-crack-womans-murder-case-as-protests-turn-violent/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-20-2026-at-12_21_02-PM.png?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Between promise and precarity: The struggle of Assam’s vocational teachers",
    summary:
      "Vocational teachers in Assam continue to face uncertainty over employment and working conditions despite the growing importance of skill-based education and vocational training.",
    url:
      "https://eastmojo.com/premium/2026/01/20/between-promise-and-precarity-the-struggle-of-assams-vocational-teachers/",
  },

  {
    image:
      "https://i0.wp.com/eastmojo.com/wp-content/uploads/2025/06/20250613_084926.jpg?resize=1200%2C900&ssl=1",
    logo: mojo,
    title:
      "Explainer: Why Nagaland’s only airport is still waiting for expansion clearance",
    summary:
      "Nagaland’s lone airport continues to face delays in expansion, highlighting the regulatory, land and infrastructure challenges surrounding efforts to improve air connectivity in the state.",
    url:
      "https://eastmojo.com/premium/2026/01/10/explainer-why-nagalands-only-airport-is-still-waiting-for-expansion-clearance/",
  },
];

// ======================================================
// COMPONENT
// ======================================================

function BlogCard() {
  const [currentPage, setCurrentPage] = useState(1);

  const blogRef = useRef<HTMLDivElement>(null);

  // ====================================================
  // AUTOMATIC PAGE COUNT
  // ====================================================

  const totalPages = Math.ceil(
    blogs.length / BLOGS_PER_PAGE
  );

  // ====================================================
  // CURRENT PAGE BLOGS
  // ====================================================

  const startIndex =
    (currentPage - 1) * BLOGS_PER_PAGE;

  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  // ====================================================
  // GSAP BLOG ANIMATION
  // ====================================================

  useLayoutEffect(() => {
    if (!blogRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const rows =
        gsap.utils.toArray<HTMLElement>(
          ".blog-card"
        );

      // Initial state
      gsap.set(rows, {
        opacity: 0,
        y: -60,
      });

      // Chain reaction animation
      gsap.to(rows, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, blogRef);

    return () => {
      ctx.revert();
    };
  }, [currentPage]);

  // ====================================================
  // PAGE NAVIGATION
  // ====================================================

  const goToPage = (page: number) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <section className="blogs-container">

      {/* =================================================
          BLOG LIST
          ================================================= */}

      <div
        className="blogs-list"
        ref={blogRef}
      >

        {currentBlogs.map((blog, index) => (

          <article
            className="blog-card"
            key={`${currentPage}-${index}`}
          >

            {/* ===========================================
                LEFT 20%
                =========================================== */}

            <div className="blog-thumbnail">

              {blog.image ? (

                <img
                  src={blog.image}
                  alt={blog.title}
                />

              ) : (

                <div className="thumbnail-placeholder">

                  <span>
                    IMAGE
                  </span>

                </div>

              )}

            </div>

            {/* ===========================================
                RIGHT 80%
                =========================================== */}

            <div className="blog-info">

              <div className="blog-header">

                {/* TITLE */}

                <h2 className="blog-title">

                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog.title}
                  </a>

                </h2>

                {/* LOGO */}

                {blog.logo ? (

                  <img
                    src={blog.logo}
                    alt="Publication logo"
                    className="blog-logo"
                  />

                ) : (

                  <div className="logo-placeholder">

                    <span>
                      LOGO
                    </span>

                  </div>

                )}

              </div>

              {/* SUMMARY */}

              <p className="blog-summary">
                {blog.summary}
              </p>

            </div>

          </article>

        ))}

      </div>

      {/* =================================================
          PAGINATION
          ================================================= */}

      {totalPages > 1 && (

        <nav
          className="pagination"
          aria-label="Blog pages"
        >

          <button
            className="pagination-arrow"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ←
          </button>

          <div className="pagination-numbers">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                className={`pagination-number ${
                  currentPage === page
                    ? "active"
                    : ""
                }`}
                onClick={() => goToPage(page)}
                aria-current={
                  currentPage === page
                    ? "page"
                    : undefined
                }
              >
                {page}
              </button>

            ))}

          </div>

          <button
            className="pagination-arrow"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            →
          </button>

        </nav>

      )}

    </section>
  );
}

export default BlogCard;