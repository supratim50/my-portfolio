import Navbar from "../components/navbar/Navbar";

// IMAGES
import AboutImg from "/assets/svgs/aboutme.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="introduction-section">
        <h1 className="text-white">Hello</h1>
      </section>
      <section className="about-section bg-secondary">
        <img src={AboutImg} className="about-img" />
      </section>

      <style jsx>{`
        .introduction-section {
          background-color: #222222;
          padding-top: 100px;
          height: 100vh;
        }

        .about-section {
          margin-top: -55px;
          padding: 127px 200px;

          clip-path: polygon(0 0, 100% 55px, 100% 100%, 0 666px) !important;
          -webkit-clip-path: polygon(
            0 0,
            100% 55px,
            100% 100%,
            0 666px
          ) !important;
        }
        .about-img {
          max-width: 441px;
        }
      `}</style>
    </>
  );
}
