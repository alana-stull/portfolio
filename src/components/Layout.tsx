import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navigation />
      <main className="pt-20">
        {children}
      </main>
      <footer className="mt-24" style={{ borderTop: '1px solid var(--color-border-warm)' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4"> 
            <div className="flex items-center">
              <span className="font-semibold text-lg" style={{ color: 'var(--color-black)' }}>Alana Cassidy Stull</span> 
            </div>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/alanastull/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'var(--color-warm-gray)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brown-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-warm-gray)'}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/alana-stull"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'var(--color-warm-gray)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brown-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-warm-gray)'}
              >
                GitHub
              </a>
              <a
                href="mailto:stull.alana@gmail.com"
                className="transition-colors"
                style={{ color: 'var(--color-warm-gray)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brown-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-warm-gray)'}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
