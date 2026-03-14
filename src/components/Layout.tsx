import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer style={{ borderTop: '1px solid var(--color-stone)' }} className="mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <div className="flex items-center">
              <span 
                style={{ 
                  color: 'var(--color-ink)', 
                  fontWeight: 600, 
                  fontSize: '14px' 
                }}
              >
                Alana Cassidy Stull
              </span>
            </div>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/alanastull/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-stone)',
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                }}
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/alana-stull"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-stone)',
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                }}
              >
                GITHUB
              </a>
              <a
                href="mailto:stull.alana@gmail.com"
                className="transition-colors hover:opacity-70"
                style={{
                  color: 'var(--color-stone)',
                  fontWeight: 600,
                  fontSize: '10px',
                  letterSpacing: '0.05em',
                }}
              >
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
