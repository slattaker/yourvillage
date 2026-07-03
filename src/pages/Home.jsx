import Navbar from "../components/Navbar";
import VillageIntro from "../components/VillageIntro";


function Home() {
  return (
    <>
      <Navbar />
      <VillageIntro />


      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f2eb",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1
            style={{
              color: "#2F4F2F",
              fontSize: "4rem",
              marginBottom: "10px",
            }}
          >
            Your Village
          </h1>

          <h2
            style={{
              color: "#556B2F",
              marginBottom: "20px",
            }}
          >
            It Takes a Village.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              color: "#333",
              fontSize: "1.2rem",
              margin: "0 auto",
            }}
          >
            Compassionate birth and postpartum support for growing families.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "15px 30px",
              backgroundColor: "#78937A",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Schedule a Consultation
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;