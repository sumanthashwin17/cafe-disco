import { useNavigate } from "react-router-dom";
import { COFFEES } from "../data/CoffeeData";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="disco-root">
      {/* DISCO MODE */}
      <div className="disco-mode">🎶 DISCO MODE 🎶</div>

      {/* TITLE */}
      <h1 className="title">☕ Cafe Disco 🎧</h1>

      <p className="subtitle">
        Coffee stories, random thoughts, and a little music to forget about the world.
      </p>

      {/* CARDS */}
      <div className="cards">
        {COFFEES.map((c, index) => (
          <button
            key={c.id}
            onClick={() => navigate(`/coffee/${c.id}`)}
            className={`card card-${index}`}
          >
            <h3>{c.name}</h3>
            <p>Tap to discover its vibe</p>
          </button>
        ))}
      </div>

      {/* ADMIN */}
      <button
        className="admin-btn"
        onClick={() => navigate("/admin/coffees")}
      >
        ⚙ Admin
      </button>

      {/* INLINE STYLES */}
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          background: transparent;
          overflow-x: hidden;
        }

        .disco-root {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(270deg, #6b21a8, #1e3a8a, #be185d);
          background-size: 600% 600%;
          animation: discoGradient 12s ease infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          color: white;
          padding-top: 40px;
          box-sizing: border-box;
        }

        .disco-mode {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 20px;
          color: #f9a8d4;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0;
          text-align: center;
        }

        .subtitle {
          margin-top: 10px;
          margin-bottom: 60px;
          max-width: 520px;
          text-align: center;
          opacity: 0.9;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 48px;
          max-width: 1200px;
          padding-bottom: 120px;
        }

        .card {
          width: 220px;
          height: 170px;
          border-radius: 20px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          transition: transform 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .card:hover {
          transform: scale(1.1);
        }

        .card-0 { background: #fcd34d; }
        .card-1 { background: #f9a8d4; }
        .card-2 { background: #7dd3fc; }
        .card-3 { background: #bef264; }

        .admin-btn {
          position: fixed;
          bottom: 24px;
          left: 24px;
          background: #4f46e5;
          color: white;
          padding: 14px 22px;
          border-radius: 999px;
          border: none;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          cursor: pointer;
        }

        @keyframes discoGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
