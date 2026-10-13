import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <a className="footer__top" href="#home">
        Back to top ↑
      </a>
      <p>
        Built by <strong>@jaeytea</strong> · © {year}
      </p>
    </footer>
  );
}
