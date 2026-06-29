"use client";
import Cal from "@calcom/embed-react";
import { useState } from "react";

export default function CalEmbed() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-primary py-4 px-8 text-base"
      >
        <span>📅 Book a Free 30-min Call</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden w-full max-w-2xl"
            style={{ height: "640px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 text-lg font-bold"
            >
              ×
            </button>
            <Cal
              calLink="muhammad-osama/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
