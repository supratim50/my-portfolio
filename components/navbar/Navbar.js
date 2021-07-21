import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="navbar-section fixed-top">
      <div className="navbar-box d-flex align-items-center justify-content-between">
        <h3 className="text-white primary-heading primary-text">Supratim.</h3>
        <div className="d-flex">
          {/* social icon */}
          <div className="d-flex align-items-center justify-content-center mr-4">
            <div className="bg-primary icon-box-div mr-4">
              <FaGithubAlt />
            </div>
            <div className="bg-primary icon-box-div mr-4">
              <FaFacebookF />
            </div>
            <div className="bg-primary icon-box-div">
              <FaLinkedinIn />
            </div>
          </div>
          {/* menu */}
          <div className="menu-box position-relative">
            <span className="menu-bar menu-bar1 bg-primary position-absolute"></span>
            <span className="menu-bar menu-bar2 bg-primary position-absolute"></span>
            <span className="menu-bar menu-bar3 bg-primary position-absolute"></span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar-section {
          width: 100%;
          background-color: #222222;
        }
        .navbar-box {
          margin-right: 200px;
          margin-left: 200px;
          padding: 20px 0 20px 0;
        }
        .icon-box {
          font-size: 30px;
        }
        .icon-box-div {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 20px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
        .menu-box {
          width: 35px;
          height: 27px;
        }
        .menu-bar {
          height: 3px;
          border-radius: 10px;
        }
        .menu-bar1 {
          width: 100%;
          top: 0;
          right: 0;
        }
        .menu-bar2 {
          width: 100%;
          top: 10px;
          right: 0;
        }
        .menu-bar3 {
          width: 70%;
          top: 21px;
          right: 0;
        }
      `}</style>
    </section>
  );
};

export default Navbar;
