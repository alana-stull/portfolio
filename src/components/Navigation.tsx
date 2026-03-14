import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/resume', label: 'RESUME' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path === '/resume' ? '/about' : link.path}
                className="transition-colors hover:opacity-70"
                style={{
                  color: isActive(link.path) ? 'var(--color-ink)' : 'var(--color-bark)',
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: 'var(--color-ink)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path === '/resume' ? '/about' : link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 transition-colors hover:opacity-70"
                style={{
                  color: isActive(link.path) ? 'var(--color-ink)' : 'var(--color-bark)',
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
