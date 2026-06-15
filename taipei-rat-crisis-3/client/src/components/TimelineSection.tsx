import { useEffect, useRef, useState } from 'react';

const timelineEvents = [
  {
    date: '2026年1月',
    tag: '事件起點',
    title: '漢他病毒奪命，25年首例',
    content: '台北市大安區一名70多歲男性確診漢他病毒，1月22日因敗血症併發多重器官衰竭死亡，是台灣25年來首例漢他病毒死亡案例。環保單位捕獲的4隻老鼠中，2隻驗出病毒陽性。',
    highlight: '台灣25年來首例漢他病毒死亡',
    color: '#E84B3A',
  },
  {
    date: '2026年2月',
    tag: '輿論升溫',
    title: '社群媒體瘋傳，鼠患影片爆紅',
    content: '各種老鼠在市場、捷運站、住宅區出沒的影片在社群媒體瘋傳。台北市環保局2月接獲258件通報，市民恐慌情緒開始蔓延。「見鼠地圖（Rat Radar）」民間自製網站上線，讓市民即時回報老鼠出沒地點。',
    highlight: '2月通報258件',
    color: '#C8A84B',
  },
  {
    date: '2026年3月',
    tag: '疫情擴散',
    title: '新北市出現第二例確診',
    content: '新北市一名70多歲男性確診漢他病毒，感染源仍在調查中。台北市環保局通報案件降至90件，但民間擔憂未見消退。木柵動物園、雙連菜市場、捷運周邊頻繁傳出老鼠出沒。',
    highlight: '新北市第二例確診',
    color: '#E84B3A',
  },
  {
    date: '2026年4月',
    tag: '政策爭議',
    title: '6,000公斤老鼠藥投放，生態警報響起',
    content: '多位台北市議員質疑，北市府已投放逾6,000公斤老鼠藥。台灣猛禽研究會發出警告：2021-2024年間106隻死亡猛禽中，61%體內驗出鼠藥殘留，台北基隆地區鳳頭蒼鷹檢出率高達92%。',
    highlight: '61%死亡猛禽體內含鼠藥',
    color: '#4CAF50',
  },
  {
    date: '2026年5月初',
    tag: '危機高峰',
    title: '101上空出現獵鷹，超級老鼠風險浮現',
    content: '台北101上空出現成群鳳頭蒼鷹盤旋，引發廣泛關注。有個體同時被驗出5種鼠藥殘留。環境部長彭啟明表示應「環境整頓為主、藥劑為輔」，但台北市長蔣萬安表示通報數據未有異常上升。',
    highlight: '鳳頭蒼鷹同時含5種鼠藥',
    color: '#E84B3A',
  },
  {
    date: '2026年5月中旬',
    tag: '政府回應',
    title: '鼠類偵防師上線，全市清消展開',
    content: '台北市環保局培訓86位「鼠類偵防師」，5月15日開放社區申請到府健檢。台北市展開全市12區清消行動。第三例漢他病毒確診：新北市居民，疫調推測在基隆工作時被老鼠咬傷。',
    highlight: '86位鼠類偵防師上線',
    color: '#C8A84B',
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => { const next = new Set(prev); next.add(index); return next; });
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  return (
    <section
      id="timeline"
      style={{
        backgroundColor: '#111111',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* 標題 */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--crisis-red)',
            marginBottom: '1rem',
          }}>
            第二章 · 事件時間軸
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#F0EDE8',
            lineHeight: 1.2,
          }}>
            從一個死亡案例到<span style={{ color: 'var(--crisis-red)' }}>城市生態危機</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.95rem',
            color: 'rgba(240,237,232,0.5)',
            marginTop: '1rem',
            maxWidth: '500px',
            margin: '1rem auto 0',
            lineHeight: 1.7,
          }}>
            點擊各時間節點，了解事件如何從單一案例演變為影響整個都市生態的危機
          </p>
        </div>

        {/* 時間軸 */}
        <div style={{ position: 'relative' }}>
          {/* 中央軸線 */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(232,75,58,0.4), transparent)',
            transform: 'translateX(-50%)',
          }}
          className="hidden md:block"
          />

          {/* 左側軸線（手機版） */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(232,75,58,0.4), transparent)',
          }}
          className="md:hidden"
          />

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index);
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '2rem',
                  position: 'relative',
                  paddingLeft: '50px',
                }}
                className="md:pl-0"
              >
                {/* 桌面版：左右交替 */}
                <div
                  style={{
                    width: '45%',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateX(0)'
                      : `translateX(${isLeft ? '-30px' : '30px'})`,
                    transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
                    cursor: 'pointer',
                  }}
                  className="hidden md:block"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <div style={{
                    backgroundColor: isActive ? '#1E1E1E' : 'var(--bg-card)',
                    border: `1px solid ${isActive ? event.color : 'rgba(255,255,255,0.08)'}`,
                    borderTop: `2px solid ${event.color}`,
                    padding: '1.25rem 1.5rem',
                    transition: 'all 200ms ease',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <span style={{
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: event.color,
                        backgroundColor: `${event.color}22`,
                        padding: '2px 8px',
                      }}>
                        {event.tag}
                      </span>
                      <span style={{
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontSize: '0.75rem',
                        color: 'rgba(240,237,232,0.4)',
                      }}>
                        {event.date}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#F0EDE8',
                      marginBottom: '0.5rem',
                      lineHeight: 1.4,
                    }}>
                      {event.title}
                    </h3>
                    {isActive && (
                      <div style={{
                        overflow: 'hidden',
                        animation: 'fadeIn 0.3s ease',
                      }}>
                        <p style={{
                          fontFamily: "'Noto Sans TC', sans-serif",
                          fontSize: '0.85rem',
                          color: 'rgba(240,237,232,0.65)',
                          lineHeight: 1.8,
                          marginBottom: '0.75rem',
                        }}>
                          {event.content}
                        </p>
                        <div style={{
                          backgroundColor: `${event.color}15`,
                          borderLeft: `3px solid ${event.color}`,
                          padding: '0.5rem 0.75rem',
                          fontSize: '0.8rem',
                          color: event.color,
                          fontFamily: "'Noto Sans TC', sans-serif",
                          fontWeight: 700,
                        }}>
                          關鍵數據：{event.highlight}
                        </div>
                      </div>
                    )}
                    <div style={{
                      marginTop: '0.75rem',
                      fontSize: '0.75rem',
                      color: 'rgba(240,237,232,0.3)',
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      {isActive ? '點擊收起 ↑' : '點擊展開 ↓'}
                    </div>
                  </div>
                </div>

                {/* 中央節點（桌面版） */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '1.25rem',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                  }}
                  className="hidden md:block"
                >
                  <div style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: event.color,
                    border: '2px solid #111111',
                    boxShadow: `0 0 0 4px ${event.color}33`,
                    transition: 'all 200ms ease',
                    transform: isActive ? 'scale(1.3)' : 'scale(1)',
                  }} />
                </div>

                {/* 手機版：單欄 */}
                <div
                  style={{
                    width: '100%',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
                    cursor: 'pointer',
                  }}
                  className="md:hidden"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  {/* 手機版節點 */}
                  <div style={{
                    position: 'absolute',
                    left: '13px',
                    top: '1.25rem',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: event.color,
                    border: '2px solid #111111',
                    boxShadow: `0 0 0 4px ${event.color}33`,
                    zIndex: 10,
                  }} />

                  <div style={{
                    backgroundColor: isActive ? '#1E1E1E' : 'var(--bg-card)',
                    border: `1px solid ${isActive ? event.color : 'rgba(255,255,255,0.08)'}`,
                    borderTop: `2px solid ${event.color}`,
                    padding: '1rem 1.25rem',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: event.color,
                      }}>
                        {event.date} · {event.tag}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Noto Sans TC', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#F0EDE8',
                      lineHeight: 1.4,
                    }}>
                      {event.title}
                    </h3>
                    {isActive && (
                      <div style={{ marginTop: '0.75rem' }}>
                        <p style={{
                          fontFamily: "'Noto Sans TC', sans-serif",
                          fontSize: '0.85rem',
                          color: 'rgba(240,237,232,0.65)',
                          lineHeight: 1.8,
                          marginBottom: '0.75rem',
                        }}>
                          {event.content}
                        </p>
                        <div style={{
                          backgroundColor: `${event.color}15`,
                          borderLeft: `3px solid ${event.color}`,
                          padding: '0.5rem 0.75rem',
                          fontSize: '0.8rem',
                          color: event.color,
                          fontFamily: "'Noto Sans TC', sans-serif",
                          fontWeight: 700,
                        }}>
                          {event.highlight}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
