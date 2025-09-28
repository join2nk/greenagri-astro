import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/production" },
  { name: "Products", href: "/product" },
  { name: "Business", href: "/wholesaler" },
  { name: "Contact", href: "/contact" },
];

const Navbar = ({ animate = false }: { animate?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <nav
        className={`bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md
        border-b border-white/10 shadow-lg transition-all duration-500 h-24
        absolute top-0 left-0 w-full z-40 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="flex items-center justify-between h-full relative w-full" >
          {/* Logo Container (Left) */}
          <div className="flex items-center h-full">
        <div
          data-aos={animate && "slide-right"}
          className="bg-gradient-to-tr from-white via-slate-50 to-slate-100 
          rounded-br-[2000px] p-2 flex items-center py-6 pl-8 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-36 2xl:pl-44 
          pr-20 sm:pr-24 md:pr-28 lg:pr-32 xl:pr-36 2xl:pr-40 
          shadow-xl shadow-slate-900/20 border border-white/20
          transition-all duration-500 ease-in-out z-10 hover:shadow-2xl hover:shadow-slate-900/30
          cursor-pointer group"
        >
          <img
            onClick={() => (window.location.href = "/")}
            src="/logo.webp"
            data-aos-delay="100"
            data-aos={animate && "fade-right"}
            alt="Green Agri Corp Logo"
            className="h-16 sm:h-18 xl:h-[70px] transition-all duration-500 ease-in-out 
            group-hover:scale-105 filter drop-shadow-sm"
          />
        </div>
          </div>

          {/* Navigation Links (Right) */}
          <div className="hidden lg:flex items-center h-full ml-auto">
        {links.map((link) => (
          <a
            key={link.name}
            data-astro-prefetch
            href={link.href}
            className="text-slate-200 font-medium pt-8 px-6 h-full 
            hover:bg-gradient-to-b hover:from-slate-300/20 hover:to-slate-400/30 
            hover:text-white hover:shadow-inner
            active:bg-slate-400/40 active:text-white
            focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-inset
            transition-all duration-300 ease-in-out
            relative group overflow-hidden
            border-r border-slate-600/30 last:border-r-0
            before:absolute before:bottom-0 before:left-0 before:w-0 before:h-1 
            before:bg-gradient-to-r before:from-green-400 before:to-emerald-500
            before:transition-all before:duration-300 before:ease-out
            hover:before:w-full
          "
          >
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="lg:hidden flex items-center h-full ml-auto">
        <button
          className="focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-inset
          hover:bg-gradient-to-b hover:from-slate-300/20 hover:to-slate-400/30
          h-full px-6 transition-all duration-300 ease-in-out
          relative group"
          onClick={() => setIsOpen(!isOpen)}
          id="burger"
          aria-label="Main Menu"
          aria-haspopup="true"
          aria-controls="menu"
        >
              <svg
                className={`h-8 w-8 text-slate-200 hover:text-white transition-all duration-300 
                ${isOpen ? 'rotate-90 scale-110' : 'group-hover:scale-110'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="
        fixed top-0 left-0 w-full h-full 
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        lg:hidden 
        z-50
        overflow-hidden
        backdrop-blur-sm
        animate-in fade-in duration-300
      "
        >
          <button
            className="absolute top-8 right-8 text-slate-300 hover:text-white 
            focus:outline-none focus:ring-2 focus:ring-slate-400/50 focus:ring-inset
            p-2 rounded-full hover:bg-slate-700/50 transition-all duration-300"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300 hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Mobile Menu Content */}
          <div className="flex flex-col items-center justify-center h-full space-y-2 px-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 text-xl font-medium py-4 px-8 w-full max-w-xs text-center
                rounded-xl border border-slate-600/30 
                hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 
                hover:text-white hover:border-slate-500/50 hover:shadow-lg
                active:bg-slate-600/60 active:text-white active:scale-95
                transition-all duration-300 ease-in-out
                backdrop-blur-sm
                relative overflow-hidden group
                before:absolute before:inset-0 before:bg-gradient-to-r 
                before:from-green-400/10 before:to-emerald-500/10 
                before:opacity-0 before:transition-opacity before:duration-300
                hover:before:opacity-100
            "
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
