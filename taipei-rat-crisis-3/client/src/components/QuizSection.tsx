import { useState } from 'react';

const quizData = [
  {
    id: 1,
    question: '老鼠大約多久可以生一胎？',
    options: ['每3個月', '每個月', '每半年', '每2個月'],
    correct: 1,
    explanation: '老鼠的繁殖速度驚人，每個月可以生一胎，每胎5到10隻。這意味著即使大量滅鼠，只要食物來源不斷，族群很快就能恢復。',
    icon: '🐀',
  },
  {
    id: 2,
    question: '台北101上空出現的猛禽是哪種鳥類？',
    options: ['遊隼', '鳳頭蒼鷹', '黑鳶', '大冠鷲'],
    correct: 1,
    explanation: '鳳頭蒼鷹（Accipiter trivirgatus）是台北都市中最常見的猛禽，以老鼠、小鳥為主食。牠們在台北市區繁殖，是都市生態系的頂級掠食者。',
    icon: '🦅',
  },
  {
    id: 3,
    question: '2021-2024年間，台灣死亡猛禽體內驗出老鼠藥的比例是多少？',
    options: ['約30%', '約45%', '約61%', '約80%'],
    correct: 2,
    explanation: '台灣猛禽研究會的調查顯示，2021-2024年間106隻死亡猛禽中，有61%體內驗出老鼠藥殘留。台北基隆地區的鳳頭蒼鷹檢出率更高達92%。',
    icon: '📊',
  },
  {
    id: 4,
    question: '台北市2026年初鼠患爆發的直接導火線是什麼？',
    options: ['市場老鼠大量出現', '漢他病毒死亡案例', '捷運站鼠患影片瘋傳', '都更工地老鼠遷移'],
    correct: 1,
    explanation: '2026年1月，台北市大安區一名70多歲男性確診漢他病毒死亡，是台灣25年來首例漢他病毒死亡案例，此事件引爆了社會對台北鼠患問題的廣泛關注。',
    icon: '🔬',
  },
  {
    id: 5,
    question: '以下哪個是解決鼠患的「治本」方法？',
    options: ['大量投放老鼠藥', '捕鼠器全面佈設', '垃圾入桶化、斷絕食物來源', '引進更多天敵'],
    correct: 2,
    explanation: '專家指出，老鼠藥和捕鼠器都是治標方法。真正的治本之道是斷絕老鼠的食物來源——推行垃圾入桶化、加強廚餘管理、禁止隨地餵食，才能從根本上解決問題。',
    icon: '💡',
  },
];

export default function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const question = quizData[currentQ];

  const handleSelect = (optionIndex: number) => {
    if (answered) return;
    setSelected(optionIndex);
    setAnswered(true);
    const isCorrect = optionIndex === question.correct;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (currentQ < quizData.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const pct = score / quizData.length;
    if (pct === 1) return { title: '完美！你是鼠患專家', desc: '你對台北鼠患危機有深入的了解，快把這個報導分享給更多人！', color: '#4CAF50' };
    if (pct >= 0.6) return { title: '不錯！你對鼠患有基本認識', desc: '繼續閱讀這份報導，你會對這個議題有更全面的了解。', color: '#C8A84B' };
    return { title: '還有進步空間', desc: '台北鼠患危機比你想像的更複雜，建議仔細閱讀這份深度調查報導。', color: '#E84B3A' };
  };

  return (
    <section
      id="quiz"
      style={{
        backgroundColor: '#111111',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        {/* 標題 */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--crisis-red)',
            marginBottom: '1rem',
          }}>
            互動測驗
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: '#F0EDE8',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            你對台北鼠患了解多少？
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.9rem',
            color: 'rgba(240,237,232,0.5)',
            lineHeight: 1.7,
          }}>
            5道題目，測試你對這場城市生態危機的認識
          </p>
        </div>

        {!finished ? (
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '2.5rem',
          }}>
            {/* 進度條 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}>
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.75rem',
                  color: 'var(--crisis-red)',
                  letterSpacing: '0.1em',
                }}>
                  第 {currentQ + 1} 題 / 共 {quizData.length} 題
                </span>
                <span style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.75rem',
                  color: 'rgba(240,237,232,0.4)',
                }}>
                  {question.icon}
                </span>
              </div>
              <div style={{
                height: '3px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${((currentQ + 1) / quizData.length) * 100}%`,
                  backgroundColor: 'var(--crisis-red)',
                  transition: 'width 0.5s ease',
                }} />
              </div>
            </div>

            {/* 問題 */}
            <h3 style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: '#F0EDE8',
              lineHeight: 1.5,
              marginBottom: '2rem',
            }}>
              {question.question}
            </h3>

            {/* 選項 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {question.options.map((option, i) => {
                let borderColor = 'rgba(255,255,255,0.12)';
                let bgColor = 'rgba(255,255,255,0.03)';
                let textColor = 'rgba(240,237,232,0.75)';
                let icon = null;

                if (answered) {
                  if (i === question.correct) {
                    borderColor = '#4CAF50';
                    bgColor = 'rgba(76,175,80,0.1)';
                    textColor = '#4CAF50';
                    icon = '✓';
                  } else if (i === selected && i !== question.correct) {
                    borderColor = 'var(--crisis-red)';
                    bgColor = 'rgba(232,75,58,0.1)';
                    textColor = 'var(--crisis-red)';
                    icon = '✗';
                  }
                } else if (selected === i) {
                  borderColor = 'var(--crisis-red)';
                  bgColor = 'rgba(232,75,58,0.08)';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={answered}
                    style={{
                      border: `1px solid ${borderColor}`,
                      backgroundColor: bgColor,
                      padding: '1rem 1.25rem',
                      textAlign: 'left',
                      width: '100%',
                      cursor: answered ? 'default' : 'pointer',
                      transition: 'all 200ms ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                    }}
                    onMouseEnter={(e) => {
                      if (!answered) {
                        e.currentTarget.style.borderColor = 'var(--crisis-red)';
                        e.currentTarget.style.backgroundColor = 'rgba(232,75,58,0.06)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!answered) {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontSize: '0.85rem',
                        color: answered ? textColor : 'rgba(240,237,232,0.3)',
                        minWidth: '20px',
                        fontWeight: 700,
                      }}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span style={{
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontSize: '0.9rem',
                        color: textColor,
                        lineHeight: 1.5,
                      }}>
                        {option}
                      </span>
                    </div>
                    {icon && (
                      <span style={{
                        fontSize: '1.1rem',
                        color: textColor,
                        fontWeight: 700,
                        flexShrink: 0,
                      }}>
                        {icon}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 解析 */}
            {answered && (
              <div style={{
                backgroundColor: selected === question.correct
                  ? 'rgba(76,175,80,0.08)'
                  : 'rgba(232,75,58,0.08)',
                border: `1px solid ${selected === question.correct ? 'rgba(76,175,80,0.3)' : 'rgba(232,75,58,0.3)'}`,
                padding: '1.25rem',
                marginBottom: '1.5rem',
                animation: 'fadeIn 0.3s ease',
              }}>
                <div style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: selected === question.correct ? '#4CAF50' : 'var(--crisis-red)',
                  marginBottom: '0.5rem',
                }}>
                  {selected === question.correct ? '✓ 答對了！' : '✗ 答錯了'}
                </div>
                <p style={{
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(240,237,232,0.7)',
                  lineHeight: 1.8,
                }}>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* 下一題按鈕 */}
            {answered && (
              <button
                onClick={handleNext}
                style={{
                  backgroundColor: 'var(--crisis-red)',
                  color: 'white',
                  border: 'none',
                  padding: '0.875rem 2rem',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 160ms ease',
                  width: '100%',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c93d2c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--crisis-red)';
                }}
              >
                {currentQ < quizData.length - 1 ? '下一題 →' : '查看結果 →'}
              </button>
            )}
          </div>
        ) : (
          /* 結果頁 */
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '2.5rem',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease',
          }}>
            {(() => {
              const msg = getScoreMessage();
              return (
                <>
                  <div style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: msg.color,
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}>
                    {score}/{quizData.length}
                  </div>
                  <h3 style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: '#F0EDE8',
                    marginBottom: '1rem',
                  }}>
                    {msg.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.9rem',
                    color: 'rgba(240,237,232,0.6)',
                    lineHeight: 1.7,
                    marginBottom: '2rem',
                    maxWidth: '400px',
                    margin: '0 auto 2rem',
                  }}>
                    {msg.desc}
                  </p>

                  {/* 答題回顧 */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginBottom: '2rem',
                  }}>
                    {answers.map((correct, i) => (
                      <div
                        key={i}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: correct ? 'rgba(76,175,80,0.2)' : 'rgba(232,75,58,0.2)',
                          border: `2px solid ${correct ? '#4CAF50' : 'var(--crisis-red)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          color: correct ? '#4CAF50' : 'var(--crisis-red)',
                          fontWeight: 700,
                        }}
                      >
                        {correct ? '✓' : '✗'}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                      onClick={handleRestart}
                      style={{
                        backgroundColor: 'transparent',
                        color: 'rgba(240,237,232,0.7)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '0.75rem 1.5rem',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: 'all 160ms ease',
                      }}
                    >
                      重新作答
                    </button>
                    <button
                      onClick={() => document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        backgroundColor: 'var(--crisis-red)',
                        color: 'white',
                        border: 'none',
                        padding: '0.75rem 1.5rem',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: 'all 160ms ease',
                      }}
                    >
                      查看解決方案 →
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}
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
