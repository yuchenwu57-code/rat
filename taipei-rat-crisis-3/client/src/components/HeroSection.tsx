import { useEffect, useState } from 'react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663718890898/HFcKM57xQbXgJzYvFkicx4/hero_falcon_taipei-LTKAqCptbxKUuBff6N3gkF.webp';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.4;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0D0D0D',
      }}
    >
      {/* 背景圖 - 視差效果 */}
      <div
        style={{
          position: 'absolute',
          inset: '-10%',
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.05s linear',
          filter: 'brightness(0.45)',
        }}
      />

      {/* 漸層遮罩 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.1) 40%, rgba(13,13,13,0.8) 80%, rgba(13,13,13,1) 100%)',
      }} />

      {/* 左側紅色邊條 */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '15%',
        bottom: '15%',
        width: '3px',
        background: 'linear-gradient(to bottom, transparent, var(--crisis-red), transparent)',
      }} />

      {/* 內容 */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        paddingTop: '80px',
        width: '100%',
      }}>
        <div style={{ maxWidth: '700px' }}>
          {/* 標籤 */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '1.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--crisis-red)',
              animation: 'pulse-red 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--crisis-red)',
            }}>
              深度調查報導 · 2026
            </span>
          </div>

          {/* 主標題 */}
          <h1
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 1.05,
              color: '#F0EDE8',
              marginBottom: '0.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
            }}
          >
            牠們在
            <span style={{ color: 'var(--crisis-red)' }}>等什麼</span>
            ？
          </h1>

          {/* 副標題 */}
          <h2
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'rgba(240,237,232,0.75)',
              marginBottom: '2rem',
              lineHeight: 1.5,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
            }}
          >
            台北101上空的獵鷹，揭開一場城市生態危機
          </h2>

          {/* 引言 */}
          <p
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              color: 'rgba(240,237,232,0.6)',
              lineHeight: 1.9,
              maxWidth: '580px',
              marginBottom: '2.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s',
            }}
          >
            2026年初，台北市大安區一名男性死於漢他病毒，是台灣25年來首例。
            與此同時，台北101上空出現成群獵鷹盤旋——牠們在等待的，正是這場城市生態危機的最終代價。
          </p>

          {/* CTA 按鈕 */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s',
            }}
          >
            <button
              onClick={() => document.querySelector('#spark')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'var(--crisis-red)',
                color: 'white',
                border: 'none',
                padding: '0.875rem 2rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 160ms ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c93d2c';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--crisis-red)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              開始閱讀調查報導
              <span style={{ fontSize: '1.1rem' }}>↓</span>
            </button>
            <button
              onClick={() => document.querySelector('#quiz')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(240,237,232,0.8)',
                border: '1px solid rgba(240,237,232,0.3)',
                padding: '0.875rem 2rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 500,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 160ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--crisis-red)';
                e.currentTarget.style.color = 'var(--crisis-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.3)';
                e.currentTarget.style.color = 'rgba(240,237,232,0.8)';
              }}
            >
              參加互動測驗
            </button>
          </div>
        </div>

        {/* 數據快覽 */}
        <div
          style={{
            position: 'absolute',
            right: '2rem',
            bottom: '10vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.5s',
          }}
          className="hidden lg:flex"
        >
          {[
            { num: '3', unit: '例', label: '漢他病毒確診' },
            { num: '61', unit: '%', label: '猛禽體內含鼠藥' },
            { num: '6,000', unit: 'kg', label: '已投放老鼠藥' },
          ].map((stat) => (
            <div key={stat.label} style={{
              textAlign: 'right',
              borderRight: '2px solid var(--crisis-red)',
              paddingRight: '1rem',
            }}>
              <div style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#F0EDE8',
                lineHeight: 1,
              }}>
                {stat.num}<span style={{ fontSize: '1rem', color: 'var(--crisis-red)' }}>{stat.unit}</span>
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: 'rgba(240,237,232,0.5)',
                fontFamily: "'Noto Sans TC', sans-serif",
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 滾動提示 */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: visible ? 0.6 : 0,
          transition: 'opacity 1s ease 0.8s',
          cursor: 'pointer',
        }}
        onClick={() => document.querySelector('#spark')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(240,237,232,0.6)',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(240,237,232,0.6), transparent)',
          animation: 'pulse-red 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
}
