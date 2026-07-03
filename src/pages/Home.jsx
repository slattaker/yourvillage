function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #f7f2eb, #dbe7d3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "10px",
            color: "#4b5d49",
          }}
        >
          Your Village
        </h1>

        <h2
          style={{
            color: "#7a8f77",
            marginBottom: "20px",
          }}
        >
          It Takes a Village.
        </h2>

        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.6",
          }}
        >
          Compassionate birth and postpartum support for growing
          families. You're not meant to do this alone.
        </p>

        <button
          style={{
            marginTop: "30px",
            backgroundColor: "#78937A",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "10px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
}

export default Home;