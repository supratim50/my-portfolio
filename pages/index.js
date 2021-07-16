import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar /> 
      <section className="introduction-section mt-3">
        <h1 className="text-white">Hello</h1>
      </section>

      <style jsx>{`
        section {
          background-color: #222222;
        }
      `}</style>
    </>
  );
}
