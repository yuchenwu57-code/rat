import { useEffect, useRef, useState } from 'react';

const FALCON_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663718890898/HFcKM57xQbXgJzYvFkicx4/falcon_closeup-YgZZfhTSzAu65nQR96qhfv.webp';
const FOOD_CHAIN_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663718890898/HFcKM57xQbXgJzYvFkicx4/food_chain_diagram-QvYyUh2ZJf532WT7S8zAmt.webp';

const stats = [
  { num: 61, unit: '%', label: '2021-2024年死亡猛禽體內含鼠藥', color: '#E84B3A' },
  { num: 92, unit: '%', label: '台北基隆地區鳳頭蒼鷹含鼠藥率', color: '#E84B3A' },
  { num: 5, unit: '種', label: '單一個體最多同時含有的鼠藥種類', color: '#C8A84B' },
  { num: 200, unit: '天+', label: '第二代抗凝血劑在體內代謝時間', color: '#C8A84B' },
];

function AnimatedBar({ value, label, color, delay = 0 }: { value: number; label: string; color: string; delay?: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.8rem',
          color: 'rgba(240,237,232,0.7)',
        }}>
          {label}
        </span>
        <span style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.9rem',
          fontWeight: 700,
          color,
        }}>
          {value}%
        </span>
      </div>
      <div style={{
        height: '6px',
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderRadius: '0',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${width}%`,
          backgroundColor: color,
          transition: `width 1.5s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
        }} />
      </div>
    </div>
  );
}

export default function FalconSection() {
  const [visible, setVisible] = useState(false);
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
      id="falcon"
      ref={sectionRef}
      style={{
        backgroundColor: '#0A0A0A',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 背景裝飾 */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        backgroundImage: `url(${FALCON_IMG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.08,
        filter: 'grayscale(100%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
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
            第四章 · 101上空的獵鷹
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#F0EDE8',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            天空的獵手，<br />
            <span style={{ color: 'var(--crisis-red)' }}>正在悄悄死去</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(240,237,232,0.55)',
            maxWidth: '600px',
            lineHeight: 1.8,
          }}>
            民眾目擊台北101上空有一群鳳頭蒼鷹在盤旋——牠們是台北都市中的頂級掠食者，
            以老鼠為主食。但牠們等待的獵物，正帶著致命的毒素。
          </p>
        </div>

        {/* 主要內容：雙欄 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* 左側：獵鷹圖片 + 說明 */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
          }}>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <img
                src={FALCON_IMG}
                alt="鳳頭蒼鷹"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(13,13,13,0.9)',
                padding: '0.5rem 0.75rem',
                borderLeft: '2px solid var(--crisis-red)',
              }}>
                <div style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--crisis-red)',
                }}>
                  鳳頭蒼鷹
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(240,237,232,0.6)',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  台北都市頂級掠食者
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-card)',
              padding: '1.5rem',
              borderLeft: '3px solid var(--crisis-red)',
            }}>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '1rem',
                color: 'rgba(240,237,232,0.85)',
                lineHeight: 1.9,
                fontStyle: 'italic',
                marginBottom: '1rem',
              }}>
                「鳳頭蒼鷹是台北都市中的頂級掠食者，以老鼠為主食。
                每年5月到7月正好是牠們的繁殖季節。
                吃下含有老鼠藥的老鼠後，藥物透過食物鏈累積，
                可能導致猛禽出血不止，最終死亡。」
              </p>
              <div style={{
                fontSize: '0.75rem',
                color: 'rgba(240,237,232,0.4)',
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                — 台灣猛禽研究會
              </div>
            </div>
          </div>

          {/* 右側：數據 */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.15s',
          }}>
            {/* 數據卡片 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem',
            }}>
              {stats.map((stat, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--bg-card)',
                  borderTop: `2px solid ${stat.color}`,
                  padding: '1.25rem',
                }}>
                  <div style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#F0EDE8',
                    lineHeight: 1,
                  }}>
                    {stat.num}<span style={{ fontSize: '0.9rem', color: stat.color }}>{stat.unit}</span>
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(240,237,232,0.5)',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    marginTop: '0.5rem',
                    lineHeight: 1.4,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 進度條 */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <h4 style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: '#F0EDE8',
                marginBottom: '1.25rem',
              }}>
                猛禽鼠藥殘留比例
              </h4>
              <AnimatedBar value={61} label="全台死亡猛禽（2021-2024）" color="#E84B3A" delay={0} />
              <AnimatedBar value={92} label="台北基隆鳳頭蒼鷹" color="#E84B3A" delay={200} />
              <AnimatedBar value={45} label="其他地區猛禽" color="#C8A84B" delay={400} />
            </div>

            {/* 警示框 */}
            <div style={{
              backgroundColor: 'rgba(232,75,58,0.1)',
              border: '1px solid rgba(232,75,58,0.3)',
              padding: '1.25rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚠️</span>
              <div>
                <div style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: 'var(--crisis-red)',
                  marginBottom: '0.5rem',
                }}>
                  超級老鼠風險
                </div>
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(240,237,232,0.6)',
                  lineHeight: 1.7,
                }}>
                  大量投放老鼠藥恐讓老鼠產生抗藥性，培養出「超級老鼠」。
                  若高階掠食者（猛禽）減少，老鼠反而可能因繁殖速度快而增加，形成惡性循環。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 食物鏈圖示 */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.3s',
        }}>
          <h3 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            color: '#F0EDE8',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>
            老鼠藥如何沿食物鏈傳遞
          </h3>
          <img
            src={FOOD_CHAIN_IMG}
            alt="都市食物鏈：老鼠藥如何傷害猛禽"
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
}
