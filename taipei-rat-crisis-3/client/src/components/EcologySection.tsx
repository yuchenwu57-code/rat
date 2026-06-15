import { useEffect, useRef, useState } from 'react';

const ecologyChain = [
  {
    icon: '🌿',
    label: '植物 / 廚餘',
    desc: '豐富的食物來源',
    color: '#4CAF50',
    arrow: true,
  },
  {
    icon: '🐀',
    label: '老鼠',
    desc: '吃下含毒餌料',
    color: '#C8A84B',
    arrow: true,
  },
  {
    icon: '☠️',
    label: '老鼠藥',
    desc: '第二代抗凝血劑，體內殘留200天+',
    color: '#E84B3A',
    arrow: true,
  },
  {
    icon: '🦅',
    label: '猛禽',
    desc: '吃下含毒老鼠，毒素累積',
    color: '#E84B3A',
    arrow: true,
  },
  {
    icon: '💀',
    label: '猛禽死亡',
    desc: '天然天敵消失，鼠患更難控制',
    color: '#E84B3A',
    arrow: false,
  },
];

const affectedAnimals = [
  { name: '鳳頭蒼鷹', status: '嚴重受害', icon: '🦅', detail: '台北基隆地區92%含鼠藥' },
  { name: '貓頭鷹', status: '受害', icon: '🦉', detail: '夜行性，以老鼠為主食' },
  { name: '黑鳶', status: '受害', icon: '🪶', detail: '全台死亡猛禽61%含鼠藥' },
  { name: '寵物犬貓', status: '誤食風險', icon: '🐾', detail: '誤食老鼠藥或中毒老鼠' },
  { name: '蛇類', status: '間接受害', icon: '🐍', detail: '食物鏈毒素累積' },
  { name: '流浪貓', status: '誤食風險', icon: '🐱', detail: '捕食中毒老鼠後二次中毒' },
];

export default function EcologySection() {
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
      id="ecology"
      ref={sectionRef}
      style={{
        backgroundColor: '#0E0E0E',
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
            第五章 · 生態鏈危機
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#F0EDE8',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            毒藥不會消失，<br />
            <span style={{ color: 'var(--crisis-red)' }}>只會沿著食物鏈向上傳遞</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(240,237,232,0.55)',
            maxWidth: '600px',
            lineHeight: 1.8,
          }}>
            台灣自1980年後核准的老鼠藥幾乎都是第二代抗凝血劑，毒性更強，
            在動物體內代謝時間長達200天以上。這意味著每一隻中毒的老鼠，
            都是一顆等待引爆的生態炸彈。
          </p>
        </div>

        {/* 食物鏈視覺化 */}
        <div style={{
          marginBottom: '4rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}>
          <h3 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 700,
            fontSize: '1.1rem',
            color: '#F0EDE8',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            毒素如何沿食物鏈傳遞
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}>
            <img
              src="/manus-storage/IMG_0063_a9b7c7a8.JPG"
              alt="食物鏈傳遞圖表：廚餘 → 老鼠 → 獵鷹 → 中毒猛禽"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(232, 75, 58, 0.15)',
              }}
            />
          </div>
        </div>

        {/* 受影響動物 */}
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
            paddingLeft: '1rem',
            borderLeft: '3px solid var(--crisis-red)',
          }}>
            受老鼠藥影響的動物
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {affectedAnimals.map((animal, i) => {
              const statusColor = animal.status === '嚴重受害' ? '#E84B3A'
                : animal.status === '受害' ? '#C8A84B'
                : '#9A9A9A';
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    padding: '1.25rem',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{animal.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#F0EDE8',
                      marginBottom: '4px',
                    }}>
                      {animal.name}
                    </div>
                    <div style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: statusColor,
                      marginBottom: '4px',
                    }}>
                      {animal.status}
                    </div>
                    <div style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontSize: '0.75rem',
                      color: 'rgba(240,237,232,0.45)',
                      lineHeight: 1.5,
                    }}>
                      {animal.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vitamin K1 缺貨警示 */}
          <div style={{
            marginTop: '2rem',
            backgroundColor: 'rgba(200,168,75,0.08)',
            border: '1px solid rgba(200,168,75,0.3)',
            padding: '1.5rem',
            display: 'flex',
            gap: '1.25rem',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>💊</span>
            <div>
              <div style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                color: '#C8A84B',
                marginBottom: '0.5rem',
              }}>
                Vitamin K1 解毒劑缺貨警報
              </div>
              <p style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(240,237,232,0.6)',
                lineHeight: 1.8,
              }}>
                治療誤食老鼠藥的解毒劑 Vitamin K1 因需求大增而出現缺貨狀況。
                寵物主人若發現貓狗誤食老鼠藥或中毒老鼠，應立即就醫，
                並告知獸醫師目前藥品供應緊張的情況。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
