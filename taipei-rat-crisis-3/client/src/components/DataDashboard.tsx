import { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

const monthlyReports = [
  { month: '1月', reports: 45, label: '1月' },
  { month: '2月', reports: 258, label: '2月' },
  { month: '3月', reports: 90, label: '3月' },
  { month: '4月', reports: 112, label: '4月' },
  { month: '5月', reports: 134, label: '5月' },
];

const raptorData = [
  { name: '含鼠藥', value: 61, color: '#E84B3A' },
  { name: '未含鼠藥', value: 39, color: '#2A2A2A' },
];

const taipeiRaptorData = [
  { name: '含鼠藥', value: 92, color: '#E84B3A' },
  { name: '未含鼠藥', value: 8, color: '#2A2A2A' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#1E1E1E',
        border: '1px solid rgba(232,75,58,0.4)',
        padding: '0.75rem 1rem',
        fontFamily: "'Noto Sans TC', sans-serif",
      }}>
        <p style={{ color: 'var(--crisis-red)', fontSize: '0.75rem', marginBottom: '4px' }}>{label}</p>
        <p style={{ color: '#F0EDE8', fontSize: '1rem', fontWeight: 700 }}>
          {payload[0].value} 件通報
        </p>
      </div>
    );
  }
  return null;
};

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  if (name === '未含鼠藥') return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#F0EDE8" textAnchor="middle" dominantBaseline="central"
      style={{ fontFamily: "'Noto Sans TC', sans-serif", fontSize: '1.1rem', fontWeight: 700 }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DataDashboard() {
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
      ref={sectionRef}
      style={{
        backgroundColor: '#0E0E0E',
        padding: '5rem 0',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--crisis-red)',
            marginBottom: '0.75rem',
          }}>
            數據儀表板
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            color: '#F0EDE8',
          }}>
            用數字看懂這場危機
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        }}>
          {/* 月度通報數量 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '1.75rem',
            border: '1px solid rgba(255,255,255,0.06)',
            gridColumn: 'span 2',
          }}
          className="col-span-2-md"
          >
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#F0EDE8',
              marginBottom: '0.25rem',
            }}>
              台北市鼠患月度通報件數
            </div>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(240,237,232,0.35)',
              marginBottom: '1.5rem',
            }}>
              2026年1-5月（件）
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyReports} barCategoryGap="30%">
                <XAxis
                  dataKey="month"
                  tick={{ fill: 'rgba(240,237,232,0.5)', fontSize: 12, fontFamily: "'Noto Sans TC', sans-serif" }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: 'rgba(240,237,232,0.5)', fontSize: 11, fontFamily: "'Noto Sans TC', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar dataKey="reports" radius={[0, 0, 0, 0]}>
                  {monthlyReports.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.reports === 258 ? '#E84B3A' : '#2A2A2A'}
                      stroke={entry.reports === 258 ? '#E84B3A' : 'rgba(255,255,255,0.1)'}
                      strokeWidth={1}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div style={{
              marginTop: '0.75rem',
              fontSize: '0.75rem',
              color: 'rgba(240,237,232,0.35)',
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ▲ 2月份通報量達高峰（258件），為漢他病毒死亡案例引發社會恐慌後
            </div>
          </div>

          {/* 全台猛禽 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '1.75rem',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#F0EDE8',
              marginBottom: '0.25rem',
            }}>
              全台死亡猛禽含鼠藥比例
            </div>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(240,237,232,0.35)',
              marginBottom: '1rem',
            }}>
              2021-2024年，共106隻
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={raptorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  labelLine={false}
                  label={CustomPieLabel}
                >
                  {raptorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {raptorData.map((item) => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', backgroundColor: item.color }} />
                  <span style={{
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '0.75rem',
                    color: 'rgba(240,237,232,0.5)',
                  }}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 台北基隆猛禽 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '1.75rem',
            border: '1px solid rgba(232,75,58,0.2)',
          }}>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#F0EDE8',
              marginBottom: '0.25rem',
            }}>
              台北基隆鳳頭蒼鷹含鼠藥比例
            </div>
            <div style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontSize: '0.75rem',
              color: 'rgba(240,237,232,0.35)',
              marginBottom: '1rem',
            }}>
              同期數據，情況更為嚴峻
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={taipeiRaptorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  dataKey="value"
                  labelLine={false}
                  label={CustomPieLabel}
                >
                  {taipeiRaptorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div style={{
              marginTop: '0.5rem',
              backgroundColor: 'rgba(232,75,58,0.08)',
              borderLeft: '2px solid var(--crisis-red)',
              padding: '0.5rem 0.75rem',
              fontSize: '0.75rem',
              color: 'var(--crisis-red)',
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 700,
            }}>
              ⚠ 92% 含鼠藥，遠高於全台平均
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
