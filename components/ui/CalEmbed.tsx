"use client";

export default function CalEmbed() {
  return (
    <button
      onClick={() =>
        window.open(
          "https://cal.com/muhammad-osama/30min",
          "book-a-call",
          "width=900,height=750,scrollbars=yes,resizable=yes"
        )
      }
      className="btn-primary py-4 px-8 text-base"
    >
      <span>📅 Book a Free 30-min Call</span>
    </button>
  );
}
