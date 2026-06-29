"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function CalEmbed() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary py-4 px-8 text-base">
        <span>📅 Book a Free 30-min Call</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-white"
            style={{ height: "80vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X size={16} className="text-black" />
            </button>
            <iframe
              src="https://cal.com/muhammad-osama/30min"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
