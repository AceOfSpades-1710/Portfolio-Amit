import "./styles/cards.css";

import GT from "../assets/gt.png";
import EM from "../assets/em.png";
import NL from "../assets/nl.png";
import AFT from "../assets/a14.png";
import MC from "../assets/mc.png";

interface CardData {
  logo: string;
  publication: string;
  thumbnail: string;
  title: string;
  url: string;
}

function Cards() {

  const cards: CardData[] = [

    {
      logo: GT,
      publication: "Global Times",
      thumbnail: "https://www.globaltimes.cn/Portals/0/attachment/2025/2025-03-31/a1237505-67c8-4551-ae23-be93aa4ccbb4.jpeg",
      title: "China does not give ‘lessons’; it shares experiences",
      url: "https://www.globaltimes.cn/page/202608/1367680.shtml",
    },

    {
      logo: EM,
      publication: "EastMojo",
      thumbnail: "https://i0.wp.com/eastmojo.com/wp-content/uploads/2022/01/FCRA-a.jpg?w=650&ssl=1",
      title: "Can the FCRA amendment put church schools and hospitals at risk?",
      url: "https://eastmojo.com/author/amit-kumar/",
    },

    {
      logo: NL,
      publication: "Newslaundry",
      thumbnail: "https://cf-images.assettype.com/newslaundry%2F2024-12-28%2Frsob7wu8%2FNLvisualByMANJUL27122024new.png?auto=format%2Ccompress&fit=max&dpr=1.0&format=webp&w=1200",
      title: "Journalists on the media’s trials and triumphs this year",
      url: "https://www.newslaundry.com/2024/12/28/ai-investigations-ram-temple-coverage-journalists-on-the-medias-trials-and-triumphs-this-year",
    },

    {
      logo: AFT,
      publication: "Article14",
      thumbnail: "https://tribe.article-14.com/uploads/2021/04-April/09-Fri/1617917116-0b8257_ad3f77e800ef494689cfbe12f0bc45a8~mv2.jpg",
      title: "The Lost Lives Of India’s Muslim Terror Suspects",
      url: "https://www.article-14.com/post/the-lost-lives-of-india-s-muslim-terror-suspects",
    },

    {
      logo: MC,
      publication: "MoneyControl",
      thumbnail: "https://images.moneycontrol.com/static-mcnews/2018/05/Prime-Minister-Narendra-Modi-and-BJP-national-president-Amit-Shah-2-378x213.jpg",
      title: "GoI loses a crucial element in its Act East policy",
      url: "https://www.moneycontrol.com/author/amit-kumar-29361/",
    },

    {
      logo: MC,
      publication: "MoneyControl",
      thumbnail: "https://images.moneycontrol.com/static-mcnews/2018/11/Mizoram-AIR-3.jpg",
      title: "What Mizoram elections can teach the rest of India",
      url: "https://www.moneycontrol.com/author/amit-kumar-29361/",
    },

  ];


  return (
    <>

      <section className="cards-container">

        {cards.map((card, index) => (

          <a
            className="card"
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
          >

            {/* ==========================================
                PUBLICATION HEADER
                ========================================== */}

            <div className="head">

              <img
                src={card.logo}
                alt={card.publication}
              />

              <span>
                {card.publication}
              </span>

            </div>


            {/* ==========================================
                ARTICLE THUMBNAIL
                ========================================== */}

            <div className="card-thumbnail">

              <img
                src={card.thumbnail}
                alt={card.title}
              />

            </div>


            {/* ==========================================
                ARTICLE TITLE
                ========================================== */}

            <div className="card-title">

              {card.title}

            </div>

          </a>

        ))}

      </section>


      {/* ================================================
          OTHER ARTICLES
          ================================================ */}

      <button
        className="otherarticles"
        onClick={() => {
          window.location.assign("https://portfolio-amit-nu.vercel.app/In-Media");
        }}
      >
        Other Discussions
      </button>

    </>
  );
}

export default Cards;
