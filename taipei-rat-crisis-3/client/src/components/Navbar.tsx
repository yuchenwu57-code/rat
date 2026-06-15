import { useState, useEffect } from 'react';

const navItems = [
  { label: '事件起點', href: '#spark' },
  { label: '時間軸', href: '#timeline' },
  { label: '為何難滅', href: '#why' },
  { label: '101的獵鷹', href: '#falcon' },
  { label: '生態危機', href: '#ecology' },
  { label: '互動測驗', href: '#quiz' },
  { label: '解決方案', href: '#solutions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 300ms ease',
        backgroundColor: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          {/* Logo */}
          <div
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div style={{
              width: '28px', height: '28px',
              background: 'var(--crisis-red)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px',
            }}>
              🐀
            </div>
            <span style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 900,
              fontSize: '1rem',
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
            }}>
              安鼠之亂
            </span>
            <span style={{
              fontSize: '0.65rem',
              color: 'var(--crisis-red)',
              fontFamily: "'Noto Sans TC', sans-serif",
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderLeft: '1px solid rgba(255,255,255,0.2)',
              paddingLeft: '8px',
              marginLeft: '2px',
            }}>
              深度調查
            </span>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
            className="hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(240,237,232,0.7)',
                  fontSize: '0.8rem',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  padding: '4px 0',
                  transition: 'color 200ms ease',
                  cursor: 'pointer',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--crisis-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.7)')}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(13,13,13,0.98)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '1rem 1.5rem',
        }}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: 'rgba(240,237,232,0.8)',
                fontSize: '0.95rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
