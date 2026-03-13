'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  ];

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
        <header className="fixed top-0 inset-x-0 z-50 bg-altus-orange/95 backdrop-blur border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                      <Link href="/" className="flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">AC</span>span>
                                </div>div>
                                <span className="text-white font-semibold text-lg tracking-tight group-hover:text-white/80 transition-colors">
                                            Altus Cloud
                                </span>span>
                      </Link>Link>
              
                {/* Desktop nav */}
                      <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((l) => (
                      <Link key={l.href} href={l.href}
                                      className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                                    >
                        {l.label}
                      </Link>Link>
                    ))}
                      </nav>nav>
              
                {/* CTA */}
                      <div className="hidden md:block">
                                <Link href="/contact?type=assessment"
                                              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                                            >
                                            Free Assessment
                                </Link>Link>
                      </div>div>
              
                {/* Mobile hamburger */}
                      <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  {open ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                                </svg>svg>
                      </button>button>
              </div>div>
        
          {/* Mobile menu */}
          {open && (
                  <div className="md:hidden bg-altus-orange border-t border-white/10 px-4 pb-4">
                    {navLinks.map((l) => (
                                <Link key={l.href} href={l.href}
                                                className="block py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/10 last:border-0"
                                                onClick={() => setOpen(false)}
                                              >
                                  {l.label}
                                </Link>Link>
                              ))}
                            <Link href="/contact?type=assessment"
                                          className="mt-4 block text-center bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                                          onClick={() => setOpen(false)}
                                        >
                                        Free Assessment
                            </Link>Link>
                  </div>div>
              )}
        </header>header>
      );
}</header>
