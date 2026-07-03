
function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Your Village</h1>

      <h2>It Takes a Village.</h2>

      <p
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          fontSize: "18px",
          lineHeight: "1.6",
        }}
      >
        Compassionate birth and postpartum support for growing families.
        No one should have to navigate parenthood alone.
      </p>

      <button
        style={{
          backgroundColor: "#78937A",
          color: "white",
          border: "none",
          padding: "15px 30px",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Schedule a Consultation
      </button>
    </div>
  );
}

export default Home;
