import "./styles/videoplayer.css"

function VideoSection() {
  return (
    <section className="video-section">

      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=C58FkNPZXL1xsAAi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>

      <div className="video-content">
        <h2>Recent Talk</h2>

        <p>
          This is where you can put information about the video,
          the story, your role, publication details, or anything
          else you want the visitor to read.
        </p>

        <button
          className="button"
          onClick={() => {
            window.location.assign("https://portfolio-amit-nu.vercel.app/In-Media");
          }}
        >
          Other Discussions
        </button>
      </div>

    </section>
  );
}

export default VideoSection;
