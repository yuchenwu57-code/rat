import { useEffect, useRef, useState } from 'react';

const typewriterText = '「那天傍晚，我站在台北101的廣場上，仰頭望向天空。一隻、兩隻、三隻——越來越多的鳳頭蒼鷹在玻璃帷幕大樓之間盤旋。牠們在等什麼？」';

export default function ReporterIntro() {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setStarted(true), 600);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (indexRef.current >= typewriterText.length) return;

    const timer = setInterval(() => {
      if (indexRef.current < typewriterText.length) {
        setDisplayText(typewriterText.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#0A0A0A',
        padding: '5rem 0',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* 背景裝飾線 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(232,75,58,0.15), transparent)',
        transform: 'translateX(-50%)',
      }} />

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* 記者標記 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '2rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#161616',
            border: '1px solid rgba(232,75,58,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
          }}>
            🎙️
          </div>
          <div>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--crisis-red)',
            }}>
              記者現場手記
            </div>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(240,237,232,0.35)',
            }}>
              2026年5月 · 台北101廣場
            </div>
          </div>
        </div>

        {/* 打字機效果引言 */}
        <div style={{
          position: 'relative',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
        }}>
          <div style={{
            position: 'absolute',
            left: '-1.5rem',
            top: '0',
            bottom: '0',
            width: '3px',
            backgroundColor: 'var(--crisis-red)',
          }} />
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: 'rgba(240,237,232,0.9)',
            lineHeight: 2,
            fontStyle: 'italic',
            paddingLeft: '1rem',
            minHeight: '4rem',
          }}>
            {displayText}
            {started && indexRef.current < typewriterText.length && (
              <span style={{
                display: 'inline-block',
                width: '2px',
                height: '1.2em',
                backgroundColor: 'var(--crisis-red)',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            )}
          </p>
        </div>

        {/* 後續說明 */}
        <div style={{
          marginTop: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.5s',
        }}>
          <div style={{
            backgroundColor: '#161616',
            padding: '1.25rem',
            borderLeft: '2px solid rgba(232,75,58,0.4)',
          }}>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--crisis-red)',
              marginBottom: '0.5rem',
            }}>
              調查動機
            </div>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(240,237,232,0.6)',
              lineHeight: 1.8,
            }}>
              一個死亡案例、一群盤旋的猛禽，讓我們開始追問：
              台北的鼠患究竟有多嚴重？政府的應對是否正確？
              這場危機對城市生態又意味著什麼？
            </p>
          </div>
          <div style={{
            backgroundColor: '#161616',
            padding: '1.25rem',
            borderLeft: '2px solid rgba(200,168,75,0.4)',
          }}>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--crisis-amber)',
              marginBottom: '0.5rem',
            }}>
              調查方法
            </div>
            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(240,237,232,0.6)',
              lineHeight: 1.8,
            }}>
              訪談環保局官員、生態學者、猛禽研究者，
              分析政府公開數據，並參考香港、紐約、新加坡的成功案例，
              試圖找出台北鼠患的真正解方。
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
