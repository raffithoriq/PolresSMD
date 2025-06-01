import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar({ links = [], isMenuOpen, setIsMenuOpen }) {
  const [openIndex, setOpenIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 200);
  };

  return (
    <nav className="text-black relative z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ label, href, subLinks }, index) => (
          <li
            key={href}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={href}
              className="text-black hover:text-yellow-500 transition"
            >
              {label}
            </Link>

            {/* Dropdown menu */}
            {subLinks && (
              <ul
                className={`absolute top-full left-0 bg-gray-100 shadow-md rounded-md mt-2 py-2 w-52 z-50 transition-opacity duration-200 ${openIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                }}
                onMouseLeave={handleMouseLeave}
              >
                {subLinks.map((sub, subIndex) => (
                  <li key={sub.href}>
                    {sub.external ? (
                      <a
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-stone-300 ${subIndex !== subLinks.length - 1 ? 'border-b border-gray-200' : ''
                          }`}
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        href={sub.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-stone-300 ${subIndex !== subLinks.length - 1 ? 'border-b border-gray-200' : ''
                          }`}
                      >
                        {sub.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40">
          <ul className="flex flex-col px-4 py-3 space-y-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 hover:text-yellow-400 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
