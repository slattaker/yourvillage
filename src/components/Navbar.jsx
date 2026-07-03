function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h3>Your Village</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;