import React, { useEffect, useRef } from "react";

export default function MusicModal({ open, onClose, song }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (open) {
      audioRef.current = new Audio(song);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [open, ]);

  if (!open) return null;

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onClose();
    };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-neutral-900 rounded-2xl p-6 max-w-md w-full text-white">
        <h3 className="text-xl font-semibold mb-2">Enjoy the vibe?</h3>
        <p className="text-neutral-400 mb-4">
          Would you like me to play a song while you enjoy your coffee and forget about the world?
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => audioRef.current.play()}
            className="flex-1 rounded-xl bg-green-600 py-2 hover:bg-green-500"
          >
            ▶ Play Music
          </button>

          <button
            onClick={handleClose}
            className="flex-1 rounded-xl bg-neutral-700 py-2 hover:bg-neutral-600"
          >
            No, Thanks
          </button>
        </div>
      </div>
    </div>
  );
}