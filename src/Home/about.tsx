import './styles/about.css'

function About() {
  return (
    <section className="about">

      <div className="about-content">

        <p className="about-label">
          ABOUT ME
        </p>

        <h2>
          Journalist.
          <br />
          Editor.
          <br />
          Consultant.
        </h2>

        <p className="about-description">
          I am Amit Kumar, a journalist driven by curiosity,
          investigation and the search for stories that matter.
          My work explores people, politics, culture and the
          moments that shape the world around us.
        </p>

        <p className="about-description">
          Through reporting and visual storytelling, I try to
          turn complex events into stories that people can
          understand, question and remember.
        </p>

      </div>


      <div className="about-image">

        <img
          src="/journalist.png"
          alt="Amit Kumar"
        />

      </div>

    </section>
  )
}

export default About