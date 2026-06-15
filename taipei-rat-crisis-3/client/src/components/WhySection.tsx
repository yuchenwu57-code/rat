import { useEffect, useRef, useState } from 'react';

const causes = [
  {
    icon: '🏗️',
    title: '都市更新拆遷',
    subtitle: '老鼠被迫遷移',
    description: '大安區近年都更頻繁，拆除老舊建物時，原本躲藏在牆縫、地下室的鼠群被迫遷移至周邊街道。一棟老建築拆除，可能讓數百隻老鼠瞬間湧入附近社區。',
    stat: '大安區',
    statLabel: '都更最密集區域',
    color: '#C8A84B',
  },
  {
    icon: '🍱',
    title: '食物來源充足',
    subtitle: '廚餘管理失控',
    description: '民眾餵食鴿子、流浪動物；夜市廚餘管理不善；傳統市場攤商收攤後垃圾堆放路邊。對老鼠而言，台北市是一座「食物天堂」——只要食物不斷，老鼠就不會消失。',
    stat: '每月',
    statLabel: '一胎5-10隻，繁殖速度驚人',
    color: '#E84B3A',
  },
  {
    icon: '🌡️',
    title: '氣候變遷暖化',
    subtitle: '冬天不再寒冷',
    description: '全球暖化導致台北冬天更溫暖，延長了老鼠的活動期間。過去冬季低溫會自然抑制鼠群繁殖，但現在這道天然屏障正在消失，老鼠的存活率與繁殖率持續提高。',
    stat: '全年',
    statLabel: '活動期間延長，族群難以自然消退',
    color: '#4CAF50',
  },
];

const whyHard = [
  { text: '老鼠繁殖速度極快：每月可生一胎5-10隻，族群恢復速度遠超滅鼠速度' },
  { text: '都市食物來源充足：廚餘、垃圾、民眾餵食，只要食物不斷，老鼠就不會消失' },
  { text: '台北缺乏科學監測機制：對比香港2000年起設立「全港鼠患參考指數」，台北至今無系統性監測' },
  { text: '老鼠藥治標不治本：食物來源未斷絕，老鼠很快恢復族群；食物充足時甚至不會去吃毒餌' },
  { text: '可能培養超級老鼠：大量投放老鼠藥恐讓老鼠產生抗藥性，形成惡性循環' },
];

export default function WhySection() {
  const [visible, setVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-dark)',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* 標題 */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--crisis-red)',
            marginBottom: '1rem',
          }}>
            第三章 · 成因分析
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#F0EDE8',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            為什麼<span style={{ color: 'var(--crisis-red)' }}>鼠患這麼難滅</span>？
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(240,237,232,0.55)',
            maxWidth: '600px',
            lineHeight: 1.8,
          }}>
            台北市的鼠患問題並非一夕之間形成，而是多重因素長期累積的結果。
            理解成因，才能找到真正有效的解決方案。
          </p>
        </div>

        {/* 三大成因卡片 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {causes.map((cause, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderTop: `2px solid ${cause.color}`,
                padding: '2rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 120}ms`,
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cause.icon}</div>
              <div style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: cause.color,
                marginBottom: '0.5rem',
              }}>
                {cause.subtitle}
              </div>
              <h3 style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#F0EDE8',
                marginBottom: '1rem',
                lineHeight: 1.3,
              }}>
                {cause.title}
              </h3>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.875rem',
                color: 'rgba(240,237,232,0.6)',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}>
                {cause.description}
              </p>
              <div style={{
                borderTop: `1px solid ${cause.color}33`,
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px',
              }}>
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: cause.color,
                }}>
                  {cause.stat}
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  color: 'rgba(240,237,232,0.45)',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  {cause.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 為何難滅 FAQ */}
        <div style={{
          backgroundColor: '#111111',
          border: '1px solid rgba(255,255,255,0.06)',
          padding: '2.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s',
        }}>
          <h3 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            color: '#F0EDE8',
            marginBottom: '0.5rem',
          }}>
            五個讓鼠患難以根治的關鍵原因
          </h3>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.85rem',
            color: 'rgba(240,237,232,0.4)',
            marginBottom: '1.5rem',
          }}>
            點擊各項目了解詳情
          </p>

          {whyHard.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
              }}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem 0',
              }}>
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '1rem',
                  color: 'var(--crisis-red)',
                  fontWeight: 700,
                  minWidth: '24px',
                  marginTop: '2px',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.9rem',
                    color: openFaq === index ? '#F0EDE8' : 'rgba(240,237,232,0.7)',
                    lineHeight: 1.7,
                    transition: 'color 200ms ease',
                  }}>
                    {item.text}
                  </p>
                </div>
                <span style={{
                  color: 'var(--crisis-red)',
                  fontSize: '1rem',
                  transition: 'transform 200ms ease',
                  transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                }}>
                  ▼
                </span>
              </div>
              {openFaq === index && (
                <div style={{
                  paddingBottom: '1rem',
                  paddingLeft: '2.5rem',
                  animation: 'fadeIn 0.2s ease',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(232,75,58,0.08)',
                    borderLeft: '2px solid var(--crisis-red)',
                    padding: '0.75rem 1rem',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.85rem',
                    color: 'rgba(240,237,232,0.6)',
                    lineHeight: 1.8,
                  }}>
                    這是台北鼠患難以根治的核心原因之一。專家指出，若不從根本上解決食物來源與環境整頓問題，
                    單靠老鼠藥只是治標不治本，甚至可能帶來更嚴重的生態後果。
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
