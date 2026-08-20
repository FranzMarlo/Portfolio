export default function Footer() {
  return (
    <footer className="border-t border-[#222220] py-8">
      <div className="site-shell flex flex-col sm:flex-row gap-3 items-center justify-between text-xs font-mono text-[#77766f]">
        <p>© {new Date().getFullYear()} Franz Marlo Andal</p>
        <a href="#Home" className="hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
