import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const links = [
  "Projects",
  "About",
  "Skills",
  "Experience",
  "Certifications",
  "Contact",
];
export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#242422] bg-[#0a0a0a]/90 backdrop-blur-xl">
      <nav
        className="site-shell h-20 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#Home"
          className="inline-flex items-center rounded-lg"
          aria-label="Franz Andal, home"
        >
          <img
            src="/fm-logo.png"
            alt=""
            className="size-11 object-contain"
          />
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-xs font-mono text-[#aaa9a3] hover:text-white"
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:andalfranzb@gmail.com"
            className="button-primary !min-h-0 !py-2.5 !px-4 text-xs"
          >
            Let’s talk
          </a>
        </div>
        <button
          className="lg:hidden size-11 border border-[#343431] rounded-lg text-sm flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X/> : <Menu/>}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-[#0a0a0a] p-6"
        >
          <div className="site-shell flex flex-col">
            {links.map((link, i) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 border-b border-[#292927] text-xl"
              >
                <span>{link}</span>
                <span className="font-mono text-xs text-[#77766f]">
                  0{i + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
