export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">
        <span style={{ color: "var(--green)" }}>▸</span>
        <span>jaeytea@portfolio:~$ exit</span>
      </div>
      <div className="footer-right">
        Built by <span>@jaeytea</span> · © {year}
      </div>
    </footer>
  );
}
