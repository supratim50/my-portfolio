const Navbar = () => {
  return (
    <section className="navbar-section">
      <div className="navbar-box d-flex align-items-center justify-content-between">
        <h3 className="text-white primary-heading primary-text">Supratim.</h3>
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
      `}</style>
    </section>
  );
};

export default Navbar;
