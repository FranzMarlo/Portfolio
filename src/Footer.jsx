export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-gray-800 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center">
        <span className="text-gray-400 font-medium text-center sm:text-lg">
          © {new Date().getFullYear()} Franz Marlo Andal. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
