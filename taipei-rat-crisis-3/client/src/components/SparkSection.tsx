import { useEffect, useRef, useState } from 'react';

const RAT_URBAN_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663718890898/HFcKM57xQbXgJzYvFkicx4/rat_urban_dark-L25c5sV3ynpvz9G4bFfeu8.webp';

function StatCard({ num, unit, label, delay = 0 }: { num: string; unit: string; label: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '2px solid var(--crisis-red)',
        padding: '1.5rem',
        flex: 1,
        minWidth: '140px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      <div style={{
        fontFamily: "'Noto Sans TC', sans-serif",
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#F0EDE8',
        lineHeight: 1,
      }}>
        {num}<span style={{ fontSize: '1.2rem', color: 'var(--crisis-red)' }}>{unit}</span>
      </div>
      <div style={{
        fontSize: '0.8rem',
        color: 'rgba(240,237,232,0.55)',
        fontFamily: "'Noto Sans TC', sans-serif",
        marginTop: '0.5rem',
        lineHeight: 1.4,
      }}>
        {label}
      </div>
    </div>
  );
}

export default function SparkSection() {
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
      id="spark"
      ref={sectionRef}
      style={{
        backgroundColor: 'var(--bg-dark)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* 章節標籤 */}
        <div style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--crisis-red)',
          marginBottom: '1rem',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}>
          第一章 · 事件起點
        </div>

        {/* 雙欄佈局 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* 左側：文字 */}
          <div>
            <h2
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                color: '#F0EDE8',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.1s',
              }}
            >
              一個死亡案例，<br />
              <span style={{ color: 'var(--crisis-red)' }}>驚醒了整座城市</span>
            </h2>

            <div style={{
              borderLeft: '3px solid var(--crisis-red)',
              paddingLeft: '1.25rem',
              marginBottom: '1.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
            }}>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '1.05rem',
                color: 'rgba(240,237,232,0.85)',
                lineHeight: 1.9,
                fontStyle: 'italic',
              }}>
                「2026年1月，台北市大安區一名70多歲男性因呼吸喘、發燒就醫，1月22日確診漢他病毒，是台灣25年來首例漢他病毒死亡案例。」
              </p>
            </div>

            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(240,237,232,0.65)',
              lineHeight: 1.9,
              marginBottom: '1.25rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.3s',
            }}>
              環保單位隨即前往個案住家周邊捕獲4隻老鼠，其中2隻驗出漢他病毒抗體陽性。
              這個消息迅速在社群媒體擴散，各種老鼠出沒的影片開始瘋傳——台北的鼠患問題，
              終於從街頭巷尾的私下議論，躍上了全國新聞的頭版。
            </p>

            <p style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.95rem',
              color: 'rgba(240,237,232,0.65)',
              lineHeight: 1.9,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.4s',
            }}>
              漢他病毒可透過吸入被污染的粉塵感染，不一定需要直接接觸老鼠。
              目前無疫苗或特效藥，只能靠支持性療法。這場城市危機，遠比大多數人想像的更加嚴峻。
            </p>

            {/* 記者標記 */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease 0.5s',
            }}>
              <div style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--crisis-red)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}>
                📰
              </div>
              <div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#F0EDE8',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 700,
                }}>
                  深度調查小組
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: 'rgba(240,237,232,0.4)',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  2026年5月 · 台北報導
                </div>
              </div>
            </div>
          </div>

          {/* 右側：圖片 + 數據 */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 0.2s',
          }}>
            <div style={{
              position: 'relative',
              marginBottom: '1.5rem',
            }}>
              <img
                src={RAT_URBAN_BG}
                alt="台北市夜間老鼠出沒"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  filter: 'brightness(0.8)',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(13,13,13,0.85)',
                padding: '0.5rem 0.75rem',
                borderLeft: '2px solid var(--crisis-red)',
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  color: 'rgba(240,237,232,0.6)',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  台北市傳統市場周邊夜間老鼠出沒（示意圖）
                </div>
              </div>
            </div>

            {/* 數據卡片 */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <StatCard num="25" unit="年" label="台灣首例漢他病毒死亡案例距今" delay={100} />
              <StatCard num="3" unit="例" label="2026年截至5月確診案例" delay={200} />
              <StatCard num="2" unit="隻" label="周邊捕獲老鼠驗出病毒陽性" delay={300} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
