export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left">
        <span style={{ color: "var(--green)" }}>▸</span>
        <span>jagriti@portfolio:~$ exit</span>
      </div>
      <div className="footer-right">
        Built like bash by <span>@jaeytea</span> · © {year}
      </div>
    </footer>
  );
}
