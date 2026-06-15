import { useEffect, useRef, useState } from 'react';

const TAIPEI_AERIAL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663718890898/HFcKM57xQbXgJzYvFkicx4/taipei_night_aerial-dqGoUDZv5UM7rGoSVTLXMQ.webp';

const internationalCases = [
  {
    city: '紐約',
    flag: '🇺🇸',
    title: '滅鼠沙皇 + 垃圾入桶化',
    description: '紐約市聘請「滅鼠沙皇」統籌滅鼠工作，推行垃圾入桶化政策，並試驗老鼠避孕藥。通過「Flaco法案」保護猛禽等天然天敵。「滅鼠強化區」老鼠目擊次數比前一年同期下降約14%。',
    result: '目擊次數下降14%',
    color: '#4CAF50',
  },
  {
    city: '新加坡',
    flag: '🇸🇬',
    title: '嚴格執法 + 環境衛生管理',
    description: '加強食品衛生與環境衛生管理，對垃圾管理不善的商家嚴格執法。強化執法後鼠洞數量下降，特定區域鼠類活動量下降約70%。',
    result: '特定區域下降70%',
    color: '#4CAF50',
  },
  {
    city: '日本',
    flag: '🇯🇵',
    title: '嚴格垃圾分類制度',
    description: '嚴格的垃圾分類制度要求商家加強垃圾管理，廚餘必須密封處理。從源頭斷絕老鼠食物來源，配合社區教育推廣，有效降低都市鼠患。',
    result: '從源頭斷絕食物來源',
    color: '#C8A84B',
  },
];

const shortTermSolutions = [
  { icon: '🚧', title: '物理性防治優先', desc: '封堵鼠洞、鼠道，使用隧道型毒餌站防止其他動物接觸' },
  { icon: '👨‍🔬', title: '鼠類偵防師到府', desc: '台北市86位鼠類偵防師提供社區環境健檢，找出鼠患根源' },
  { icon: '🗺️', title: '科學監測系統', desc: '建立類似香港「全港鼠患參考指數」的監測機制，掌握鼠患動態' },
];

const longTermSolutions = [
  { icon: '🗑️', title: '垃圾入桶化', desc: '推動垃圾必須入桶，不得隨地堆放，從源頭斷絕老鼠食物來源' },
  { icon: '🚫', title: '禁止隨地餵食', desc: '禁止在公共場所餵食鴿子、流浪動物，減少食物殘留' },
  { icon: '🦅', title: '保護天然天敵', desc: '保護猛禽等天然天敵，避免老鼠藥透過食物鏈傷害生態' },
  { icon: '🏙️', title: '都更配套措施', desc: '拆除老舊建物前，應先進行鼠患評估與預防性滅鼠作業' },
];

const citizenActions = [
  '垃圾確實入桶，不在路邊堆放廚餘',
  '不在公共場所餵食鴿子或流浪動物',
  '發現老鼠出沒，向環保局通報（1999）',
  '支持「垃圾入桶化」等環境衛生政策',
  '了解老鼠藥對生態的危害，避免自行濫用',
];

export default function SolutionsSection() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'short' | 'long'>('short');
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
      id="solutions"
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
            第六章 · 解決方案
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#F0EDE8',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            如何<span style={{ color: '#4CAF50' }}>真正解決</span>鼠患？
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(240,237,232,0.55)',
            maxWidth: '600px',
            lineHeight: 1.8,
          }}>
            從國際案例到台灣本土，專家提出的解方都指向同一個核心：
            斷絕食物來源，才是根治鼠患的唯一之道。
          </p>
        </div>

        {/* 國際案例 */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            color: '#F0EDE8',
            marginBottom: '1.5rem',
            paddingLeft: '1rem',
            borderLeft: '3px solid var(--crisis-red)',
          }}>
            國際成功案例
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {internationalCases.map((c, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderTop: `2px solid ${c.color}`,
                  padding: '1.75rem',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${i * 120}ms`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{c.flag}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#F0EDE8',
                    }}>
                      {c.city}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'rgba(240,237,232,0.4)',
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      {c.title}
                    </div>
                  </div>
                </div>
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(240,237,232,0.65)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                }}>
                  {c.description}
                </p>
                <div style={{
                  backgroundColor: `${c.color}15`,
                  borderLeft: `3px solid ${c.color}`,
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.8rem',
                  color: c.color,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 700,
                }}>
                  成效：{c.result}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 台灣解方 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s',
        }}>
          {/* 左側：短期/長期切換 */}
          <div>
            <h3 style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#F0EDE8',
              marginBottom: '1.25rem',
            }}>
              台灣可行方案
            </h3>
            {/* Tab */}
            <div style={{
              display: 'flex',
              gap: '0',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              {(['short', 'long'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: 'none',
                    backgroundColor: activeTab === tab ? 'var(--crisis-red)' : 'transparent',
                    color: activeTab === tab ? 'white' : 'rgba(240,237,232,0.5)',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                >
                  {tab === 'short' ? '短期措施' : '長期根治'}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(activeTab === 'short' ? shortTermSolutions : longTermSolutions).map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    border: '1px solid rgba(255,255,255,0.06)',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#F0EDE8',
                      marginBottom: '0.25rem',
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontSize: '0.8rem',
                      color: 'rgba(240,237,232,0.55)',
                      lineHeight: 1.6,
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：市民行動 */}
          <div>
            <h3 style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              color: '#F0EDE8',
              marginBottom: '1.25rem',
            }}>
              你可以做的事
            </h3>
            <div style={{
              backgroundColor: '#111111',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '1.5rem',
            }}>
              {citizenActions.map((action, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '0.875rem 0',
                    borderBottom: i < citizenActions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(76,175,80,0.15)',
                    border: '1px solid rgba(76,175,80,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#4CAF50',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    {i + 1}
                  </div>
                  <p style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.875rem',
                    color: 'rgba(240,237,232,0.7)',
                    lineHeight: 1.7,
                  }}>
                    {action}
                  </p>
                </div>
              ))}
            </div>

            {/* 通報熱線 */}
            <div style={{
              marginTop: '1.5rem',
              backgroundColor: 'rgba(232,75,58,0.08)',
              border: '1px solid rgba(232,75,58,0.25)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <span style={{ fontSize: '2rem' }}>📞</span>
              <div>
                <div style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--crisis-red)',
                }}>
                  1999
                </div>
                <div style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(240,237,232,0.55)',
                }}>
                  台北市民服務熱線 · 通報老鼠出沒
                </div>
              </div>
            </div>
          </div>
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
