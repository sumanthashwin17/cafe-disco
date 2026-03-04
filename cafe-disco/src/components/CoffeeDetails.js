import { useParams, useNavigate } from "react-router-dom";
import { COFFEES, QUOTES } from "../data/CoffeeData";
import { useRef, useState, useEffect } from "react";

export default function CoffeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const coffee = COFFEES.find(c => c.id === id);

  const audioRef = useRef(null);

  const [quote] = useState(
    QUOTES[Math.floor(Math.random() * QUOTES.length)]
  );

  const [volume, setVolume] = useState(0.6);
  const [isMuted, setIsMuted] = useState(false);
  const lastVolume = useRef(volume);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      lastVolume.current = audioRef.current.volume;
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = volume;
    }
  }, [volume, isMuted]);

  if (!coffee) return <p>Coffee not found ☕</p>;

  const playMusic = () => audioRef.current.play();
  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="coffee-root">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="coffee-card">
        <h1 className="title">{coffee.name}</h1>

        <h2 className="heading">☕ Coffee History</h2>
        <p className="text">{coffee.history}</p>

        <h2 className="heading">💭 Today’s Quote</h2>
        <p className="quote">“{quote}”</p>

        <h2 className="heading">🎵 Enjoy the vibe?</h2>

        <div className="btn-group">
          <button className="play-btn" onClick={playMusic}>▶ Play</button>
          <button className="stop-btn" onClick={stopMusic}>⏹ Stop</button>
          <button
            className="mute-btn"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? "🔊 Unmute" : "🔇 Mute"}
          </button>
        </div>

        {/* 🔊 Volume Slider */}
        <div className="volume-box">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </div>

        <audio ref={audioRef} src={coffee.song} />
      </div>

      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
        }

        .coffee-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6366f1, #9333ea, #ec4899);
          color: white;
          position: relative;
        }

        .back-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0,0,0,0.3);
          border: none;
          color: white;
          padding: 10px 16px;
          border-radius: 20px;
          cursor: pointer;
        }

        .coffee-card {
          background: rgba(0,0,0,0.35);
          padding: 40px;
          width: 420px;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 25px 50px rgba(0,0,0,0.4);
        }

        .title {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .heading {
          font-size: 1.4rem;
          margin-top: 25px;
          margin-bottom: 10px;
        }

        .text {
          font-size: 0.95rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .quote {
          font-style: italic;
          opacity: 0.85;
          margin-bottom: 10px;
        }

        .btn-group {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .play-btn {
          background: #22c55e;
          border: none;
          padding: 12px 24px;
          border-radius: 999px;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .stop-btn {
          background: #ef4444;
          border: none;
          padding: 12px 24px;
          border-radius: 999px;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .mute-btn {
          background: #f59e0b;
          border: none;
          padding: 12px 22px;
          border-radius: 999px;
          color: black;
          font-weight: bold;
          cursor: pointer;
        }

        .play-btn:hover,
        .stop-btn:hover,
        .mute-btn:hover {
          transform: scale(1.05);
        }

        .volume-box {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .volume-box input[type="range"] {
          width: 160px;
          accent-color: #22c55e;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
