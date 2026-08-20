import "./styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* =========================
          Section 1
          ========================= */}

      <div className="footer-section location-section">

        <div className="footer-label">
          LOCATION
        </div>

        <h3>
          India
        </h3>

        <p>
          Shillong, Meghalaya
        </p>

        <p>
          Journalist &amp; Editor <br/>
          Available for stories,<br />
          collaborations and conversations.
        </p>

        <p>
          © 2026 Amit Kumar
        </p>

      </div>


      {/* =========================
          Section 2
          ========================= */}

      <div className="footer-section patent-section">

        <div className="footer-label">
          SITEMAP
        </div>

        <h3>
          Portfolio
        </h3>

        <p>
          Home
        </p>
        <p>
          Articles
        </p>
        <p>
          Discussions
        </p>
        <p>
          Blogs
        </p>


      </div>


      {/* =========================
          Section 3
          ========================= */}

      <div className="footer-section patent-section">

        <div className="footer-label">
          Note
        </div>

        <h3>
          P.S.
        </h3>

        <p>
          All original written, visual and
          editorial work presented on this
          website is protected by applicable
          intellectual property laws.
        </p>

        <p>
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;