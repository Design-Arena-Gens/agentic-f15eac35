export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <div className="small">? {new Date().getFullYear()} Conversion Copywriter</div>
        <div className="small">Words that sell. Crafted with care.</div>
      </div>
    </footer>
  );
}
