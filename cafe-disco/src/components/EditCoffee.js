import { useState } from "react";
import axios from "axios";

export default function EditCoffee({ coffee, close, refresh }) {
  const [name, setName] = useState(coffee.name);
  const [origin, setOrigin] = useState(coffee.origin);

  const updateCoffee = async () => {
    await axios.put(`http://localhost:4001/api/coffees/${coffee.id}`, {
      name,
      origin,
    });

    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-80">
        <h3 className="text-xl font-bold mb-3">Edit Coffee ☕</h3>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Coffee name"
        />

        <input
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="border p-2 w-full mb-4"
          placeholder="Origin"
        />

        <div className="flex justify-end gap-2">
          <button onClick={close} className="px-3 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={updateCoffee}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
