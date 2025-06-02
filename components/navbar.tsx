'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { usePathname } from "next/navigation";
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 0);
      } else {
        // If no hero section (other pages), check scroll position
        setIsScrolled(window.scrollY > 50);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 dark:border-gray-800/50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-xl shadow-lg' : 'bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-16 h-16 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/mine.png"
              alt="Aaryan Shrestha"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-base font-medium transition-colors group ${isScrolled
                  ? (isActive(item.href) ? 'text-black dark:text-white' : 'text-black/80 dark:text-gray-400 hover:text-black dark:hover:text-white')
                  : 'text-white/90 hover:text-white'}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${isActive(item.href) ? 'w-full' : ''}`} />
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-lg transition-colors ${isScrolled
                ? 'bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20'
                : 'bg-white/10 hover:bg-white/20'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className={`w-6 h-6 transition-colors ${isScrolled ? 'text-black/80 dark:text-gray-400 hover:text-black dark:hover:text-white' : 'text-white/90 hover:text-white'}`} />
              ) : (
                <Moon className={`w-6 h-6 transition-colors ${isScrolled ? 'text-black/80 dark:text-gray-400 hover:text-black dark:hover:text-white' : 'text-white/90 hover:text-white'}`} />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-7 w-7 ${isScrolled ? 'text-black dark:text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`h-7 w-7 ${isScrolled ? 'text-black dark:text-white' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-4 pt-4 pb-4 space-y-2 ${isScrolled
            ? 'bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-xl'
            : 'bg-black/95'
            }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled
                  ? 'text-black/80 hover:text-black dark:text-gray-300 dark:hover:text-white'
                  : 'text-white/90 hover:text-white'
                  } ${isActive(item.href) ? 'bg-black/5 dark:bg-white/10' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`hover:bg-transparent self-start ${isScrolled ? 'text-black/80 hover:text-black dark:text-gray-300 dark:hover:text-white' : 'text-white/90 hover:text-white'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className={`h-6 w-6 transition-colors ${isScrolled ? 'text-black/80 dark:text-gray-400 hover:text-black dark:hover:text-white' : 'text-white/90 hover:text-white'}`} />
              ) : (
                <Moon className={`h-6 w-6 transition-colors ${isScrolled ? 'text-black/80 dark:text-gray-400 hover:text-black dark:hover:text-white' : 'text-white/90 hover:text-white'}`} />
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}