import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Readme.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * Readme picks up immediately where AboutWeekends leaves off.
 *
 * It re-renders the SAME label / heading / description / bicycle image at the
 * exact rest position AboutWeekends left them in, so there's no visual jump
 * when this section takes over the pin. Mount it directly after
 * <AboutWeekends /> in the page:
 *
 *   <AboutWeekends />
 *   <Readme />
 *
 * Sequence (scrubbed to scroll, one continuous GSAP timeline):
 *   1. Bookshelf image rises up from the bottom of the left (content) column.
 *      While it rises, the text fades out as a chain reaction, LAST line
 *      first: second paragraph -> first paragraph -> "Cook." -> "Reader."
 *      -> "Cyclist." -> label.
 *   2. Once the bookshelf fully occupies the left column, it holds for a
 *      beat.
 *   3. Bookshelf + bicycle shrink together and glide to top-center as a
 *      "logo" pairing. The bicycle rotates 90deg clockwise and settles in
 *      front of the bookshelf.
 *   4. New readme copy rises in from the bottom of the viewport.
 *
 * NOTE ON POSITIONING: the shrink/reposition target values (top / left /
 * width) are set in vh/vw units in Readme.css so they scale with viewport,
 * matching the rest of this codebase's approach (see Aboutwe.css). Nudge
 * the `--logo-*` custom properties in Readme.css to fine-tune exactly how
 * the bicycle overlaps the bookshelf once you have the real image assets.
 */
function Readme() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  const labelRef = useRef<HTMLParagraphElement>(null)
  const cyclistRef = useRef<HTMLSpanElement>(null)
  const readerRef = useRef<HTMLSpanElement>(null)
  const cookRef = useRef<HTMLSpanElement>(null)
  const desc1Ref = useRef<HTMLParagraphElement>(null)
  const desc2Ref = useRef<HTMLParagraphElement>(null)

  const bookshelfRef = useRef<HTMLDivElement>(null)
  const bicycleRef = useRef<HTMLDivElement>(null)

  const readmeRevealRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    const ctx = gsap.context(() => {
      // Bookshelf starts fully below the viewport, hidden behind the
      // content column, ready to rise up.
      gsap.set(bookshelfRef.current, { yPercent: 100 })
      gsap.set(readmeRevealRef.current, { y: 60, autoAlpha: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=350%',
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
        },
      })

      // ---- Stage 1: chain-reaction fade (bottom line first) ----------
      // + the bookshelf rising, running in parallel with the fade.
      tl.to(desc2Ref.current, { autoAlpha: 0, y: -16, duration: 1 }, 0)
        .to(desc1Ref.current, { autoAlpha: 0, y: -16, duration: 1 }, 0.18)
        .to(cookRef.current, { autoAlpha: 0, y: -16, duration: 1 }, 0.36)
        .to(readerRef.current, { autoAlpha: 0, y: -16, duration: 1 }, 0.54)
        .to(cyclistRef.current, { autoAlpha: 0, y: -16, duration: 1 }, 0.72)
        .to(labelRef.current, { autoAlpha: 0, y: -16, duration: 1 }, 0.9)
        .to(
          bookshelfRef.current,
          { yPercent: 0, duration: 2.6, ease: 'power2.out' },
          0
        )

        // ---- Stage 2: hold — bookshelf fully occupies the column ----
        // (no tween needed, the gap in the timeline below is the hold)

        // ---- Stage 3: shrink + reposition to top-center as a logo ---
        .to(
          bookshelfRef.current,
          {
            // Keep these in sync with the .readme-bookshelf.is-logo values
            // in Readme.css if you tune the layout there instead.
            top: '6vh',
            left: '50%',
            xPercent: -50,
            width: '90px',
            height: '110px',
            duration: 2.2,
            ease: 'power2.inOut',
          },
          3.4
        )
        .to(
          bicycleRef.current,
          {
            top: '7vh',
            left: '50%',
            xPercent: -50,
            width: '70px',
            height: '120px',
            rotate: 88,
            duration: 2.2,
            ease: 'power2.inOut',
          },
          3.4
        )

        // ---- Stage 4: new copy rises in from the bottom -------------
        .to(
          readmeRevealRef.current,
          { y: 0, autoAlpha: 1, duration: 1.4, ease: 'power2.out' },
          6.2
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="readme" ref={sectionRef}>
      <div className="readme-pin" ref={pinRef}>

        {/* Same text as AboutWeekends, split into fade-able chunks */}
        <div className="readme-content">
          <p className="readme-label" ref={labelRef}>
            अमित, ON WEEKENDS:
          </p>

          <h2>
            <span ref={cyclistRef}>Cyclist.</span>
            <br />
            <span ref={readerRef}>Reader.</span>
            <br />
            <span ref={cookRef}>Cook.</span>
          </h2>

          <p className="readme-description" ref={desc1Ref}>
            I am Amit Kumar, a journalist driven by curiosity,
            investigation and the search for stories that matter.
            My work explores people, politics, culture and the
            moments that shape the world around us.
          </p>

          <p className="readme-description" ref={desc2Ref}>
            Through reporting and visual storytelling, I try to
            turn complex events into stories that people can
            understand, question and remember.
          </p>
        </div>

        {/* Rises up from the bottom of the left column */}
        <div className="readme-bookshelf" ref={bookshelfRef}>
          <img src="/bookshelf.png" alt="" />
        </div>

        {/* Starts exactly where AboutWeekends' bicycle sits at rest */}
        <div className="readme-bicycle" ref={bicycleRef}>
          <img src="/bicycle.png" alt="Amit Kumar" />
        </div>

        {/* New copy, revealed once shelf + bicycle become the logo mark */}
        <div className="readme-reveal" ref={readmeRevealRef}>
          <p className="readme-reveal-label">CURRENTLY READING</p>
          <h3>A shelf worth borrowing from.</h3>
          <p className="readme-reveal-description">
            The books, the notes in their margins, and the stories
            that shaped how I ask questions and tell stories of my own.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Readme