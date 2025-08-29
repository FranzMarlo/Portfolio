const logos = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Playwright",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
  },
  {
    name: "Postman",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "JMeter",
    src: "https://images.seeklogo.com/logo-png/38/1/jmeter-logo-png_seeklogo-388141.png",
  },
  {
    name: "Jupyter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MS Excel",
    src: "https://www.citypng.com/public/uploads/preview/hd-microsoft-excel-logo-transparent-png-701751694777434h7pkvogbjk.png",
  },
];

function Track() {
  const items = [...logos, ...logos];
  return (
    <div className="flex gap-8 pr-8 animate-scroll-x">
      {items.map((logo, i) => (
        <div
          key={`${logo.name}-${i}`}
          className="flex items-center gap-3 shrink-0 bg-neutral-900/70 border border-neutral-800 rounded-xl px-4 py-3 hover:shadow-lg transition-shadow"
          title={logo.name}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
          <span className="text-gray-200 text-sm font-medium">{logo.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Carousel() {
  return (
    <section className="w-full py-8">
      <div className="relative overflow-hidden pause-on-hover">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />
        <div className="flex">
          <Track />
        </div>
      </div>
    </section>
  );
}
