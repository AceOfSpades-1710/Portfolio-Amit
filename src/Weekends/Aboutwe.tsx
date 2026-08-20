import './styles/Aboutwe.css'

function AboutWeekends() {
  return (
    <section className="weabout">

      <div className="weabout-content">

        <p className="weabout-label">
          अमित, ON WEEKENDS:
        </p>

        <h2>
          Cyclist.
          <br />
          Reader.
          <br />
          Cook.
        </h2>

        <p className="weabout-description">
          I am Amit Kumar, a journalist driven by curiosity,
          investigation and the search for stories that matter.
          My work explores people, politics, culture and the
          moments that shape the world around us.
        </p>

        <p className="weabout-description">
          Through reporting and visual storytelling, I try to
          turn complex events into stories that people can
          understand, question and remember.
        </p>

      </div>

      <div className="weabout-image">

        <img
          src="/bicycle.png"
          alt="Amit Kumar"
        />

      </div>

    </section>
  )
}

export default AboutWeekends