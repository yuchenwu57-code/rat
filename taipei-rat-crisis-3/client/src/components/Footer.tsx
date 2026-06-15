const TAIPEI_AERIAL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663718890898/HFcKM57xQbXgJzYvFkicx4/taipei_night_aerial-dqGoUDZv5UM7rGoSVTLXMQ.webp';

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* 結語區塊 */}
      <div style={{
        position: 'relative',
        padding: '6rem 0',
        backgroundColor: '#080808',
      }}>
        {/* 背景圖 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${TAIPEI_AERIAL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          filter: 'grayscale(50%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.7) 50%, #080808 100%)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--crisis-red)',
            marginBottom: '1.5rem',
          }}>
            記者後記
          </div>
          <h2 style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: '#F0EDE8',
            lineHeight: 1.3,
            marginBottom: '2rem',
          }}>
            台北101上空的獵鷹，<br />
            <span style={{ color: 'var(--crisis-red)' }}>還在等待</span>
          </h2>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '1.05rem',
            color: 'rgba(240,237,232,0.75)',
            lineHeight: 2,
            marginBottom: '1.5rem',
            fontStyle: 'italic',
          }}>
            「鳳頭蒼鷹盤旋在台北101上空，牠們等待的獵物，
            正帶著我們投放的毒素。這不只是一個關於老鼠的故事，
            而是一面鏡子，映照出我們如何對待自己居住的城市，
            以及城市中所有的生命。」
          </p>
          <p style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontSize: '0.9rem',
            color: 'rgba(240,237,232,0.45)',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}>
            解決鼠患，沒有捷徑。唯有從源頭斷絕食物來源、改善環境衛生、
            建立科學監測機制，才能在不傷害生態的前提下，
            讓台北重新成為一座人與自然和諧共存的城市。
          </p>

          {/* 分享按鈕 */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: '安鼠之亂｜台北鼠患深度調查',
                    text: '台北101上空的獵鷹究竟在等什麼？深入調查台北市鼠患危機。',
                    url: window.location.href,
                  });
                }
              }}
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
              📤 分享這篇報導
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(240,237,232,0.6)',
                border: '1px solid rgba(240,237,232,0.2)',
                padding: '0.875rem 2rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 160ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--crisis-red)';
                e.currentTarget.style.color = 'var(--crisis-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,237,232,0.2)';
                e.currentTarget.style.color = 'rgba(240,237,232,0.6)';
              }}
            >
              ↑ 回到頂部
            </button>
          </div>
        </div>
      </div>

      {/* 底部版權 */}
      <div style={{
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <div style={{
          fontFamily: "'Noto Sans TC', sans-serif",
          fontSize: '0.75rem',
          color: 'rgba(240,237,232,0.25)',
          lineHeight: 1.6,
        }}>
          <div style={{ fontWeight: 700, color: 'rgba(240,237,232,0.4)', marginBottom: '2px' }}>
            安鼠之亂｜台北鼠患深度調查
          </div>
          本報導為競賽作品，所有數據引自公開新聞報導與學術研究。
        </div>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
        }}>
          {['事件起點', '時間軸', '生態危機', '解決方案'].map((item, i) => (
            <button
              key={i}
              onClick={() => {
                const ids = ['#spark', '#timeline', '#ecology', '#solutions'];
                document.querySelector(ids[i])?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(240,237,232,0.25)',
                fontSize: '0.75rem',
                fontFamily: "'Noto Sans TC', sans-serif",
                cursor: 'pointer',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--crisis-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.25)')}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
