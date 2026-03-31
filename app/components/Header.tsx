'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">☕</span>
            <span>Aroma Coffee</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-200 transition-colors">
              Главная
            </Link>
            <Link href="/menu" className="hover:text-amber-200 transition-colors">
              Меню
            </Link>
            <Link href="/about" className="hover:text-amber-200 transition-colors">
              О нас
            </Link>
            <Link href="/contacts" className="hover:text-amber-200 transition-colors">
              Контакты
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="hover:text-amber-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Главная
              </Link>
              <Link href="/menu" className="hover:text-amber-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Меню
              </Link>
              <Link href="/about" className="hover:text-amber-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                О нас
              </Link>
              <Link href="/contacts" className="hover:text-amber-200 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Контакты
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
