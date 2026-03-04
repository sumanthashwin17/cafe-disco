import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import EditCoffee from "./EditCoffee";

export default function CoffeeList() {
  const [coffees, setCoffees] = useState([]);
  const hasFetched = useRef(false);
  const [editingCoffee, setEditingCoffee] = useState(null);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchCoffees();
  }, []);

  const fetchCoffees = async () => {
    const res = await axios.get("http://localhost:4001/api/coffees");
    setCoffees(res.data);
  };

  const deleteCoffee = async (id) => {
    if (!window.confirm("Delete this coffee? ☕💀")) return;
    await axios.delete(`http://localhost:4001/api/coffees/${id}`);
    fetchCoffees();
  };

  return (
    <div className="admin-root">
      <h2 className="admin-title">☕ Cafe Disco Menu</h2>

      <div className="coffee-list">
        {coffees.map((coffee, index) => (
          <div key={coffee.id} className="coffee-item">
            <div>
              <h3 className={`coffee-name font-${index % 4}`}>
                ☕ {coffee.name}
              </h3>
              <p className="coffee-origin">📍 {coffee.origin}</p>
            </div>

            <div className="btn-group">
              <button
                onClick={() => setEditingCoffee(coffee)}
                className="edit-btn"
              >
                ✏ Edit
              </button>

              <button
                onClick={() => deleteCoffee(coffee.id)}
                className="delete-btn"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingCoffee && (
        <EditCoffee
          coffee={editingCoffee}
          close={() => setEditingCoffee(null)}
          refresh={fetchCoffees}
        />
      )}

      {/* 🎨 Styles */}
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
        }

        .admin-root {
          min-height: 100vh;
          padding: 40px 60px;
          background: linear-gradient(135deg, #0f172a, #4f46e5, #9333ea);
          color: white;
        }

        .admin-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 35px;
          text-align: left;
        }

        .coffee-list {
          max-width: 720px;
        }

        .coffee-item {
          background: rgba(255, 255, 255, 0.12);
          padding: 18px 26px;
          margin-bottom: 22px;
          border-radius: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        }

        .coffee-name {
          font-size: 1.6rem;
          margin: 0;
        }

        /* 🎭 Different font styles */
        .font-0 { font-family: "Georgia", serif; }
        .font-1 { font-family: "Trebuchet MS", sans-serif; }
        .font-2 { font-family: "Courier New", monospace; }
        .font-3 { font-family: "Verdana", sans-serif; }

        .coffee-origin {
          margin-top: 6px;
          font-size: 0.9rem;
          opacity: 0.85;
        }

        .btn-group {
          display: flex;
          gap: 14px;
        }

        .edit-btn {
          background: #22c55e;
          color: white;
          padding: 8px 18px;
          border-radius: 999px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .delete-btn {
          background: #ef4444;
          color: white;
          padding: 8px 18px;
          border-radius: 999px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .edit-btn:hover,
        .delete-btn:hover {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
