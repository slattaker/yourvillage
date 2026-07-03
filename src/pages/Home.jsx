import Navbar from "../components/Navbar";
import VillageIntro from "../components/VillageIntro";

function Home() {
  return (
    <>
      <VillageIntro />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section
          style={{
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px",
            backgroundColor: "#f8efe4",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              color: "#3c4c3d",
            }}
          >
            Zoë's Village
          </h1>

          <h2
            style={{
              color: "#7c8e73",
            }}
          >
            Compassionate Birth & Postpartum Care
          </h2>

          <p
            style={{
              maxWidth: "700px",
              fontSize: "1.2rem",
            }}
          >
            You don't have to do it alone. Professional support
            through pregnancy, birth, and the postpartum journey.
          </p>

          <button
            style={{
              marginTop: "25px",
              padding: "15px 30px",
              border: "none",
              borderRadius: "10px",
              background: "#78937A",
              color: "white",
              cursor: "pointer",
            }}
          >
            Schedule a Consultation
          </button>
        </section>

        {/* ABOUT SECTION */}
        <section
          style={{
            padding: "100px 40px",
            textAlign: "center",
          }}
        >
          <h2>Meet Your Doula</h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto",
              lineHeight: "1.8",
            }}
          >
            Hi, I'm Zoë. My goal is to help families feel supported,
            informed, and empowered throughout pregnancy, birth,
            and postpartum recovery.
          </p>
        </section>

        {/* SERVICES */}
        <section
          style={{
            background: "#f8efe4",
            padding: "100px 40px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Services
          </h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "12px",
                width: "250px",
              }}
            >
              <h3>Birth Support</h3>
              <p>Compassionate guidance through labor and delivery.</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "12px",
                width: "250px",
              }}
            >
              <h3>Postpartum Support</h3>
              <p>Helping families transition confidently after birth.</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "12px",
                width: "250px",
              }}
            >
              <h3>Virtual Guidance</h3>
              <p>Remote support whenever you need it most.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          style={{
            padding: "100px 40px",
            textAlign: "center",
          }}
        >
          <h2>Contact</h2>

          <p>Email: hello@zoesvillage.com</p>

          <p>Phone: (Your Number Here)</p>

          <button
            style={{
              marginTop: "20px",
              padding: "15px 30px",
              background: "#78937A",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Schedule Your Consultation
          </button>
        </section>
      </main>
    </>
  );
}

export default Home;