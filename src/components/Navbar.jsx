import logo from "../assets/zoes-village-logo.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src={logo}
        alt="Zoë's Village"
        style={{
          height: "60px",
          width: "auto",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "30px",
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