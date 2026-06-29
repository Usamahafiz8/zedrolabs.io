"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

export default function CalEmbed() {
  const cal = useRef<Awaited<ReturnType<typeof getCalApi>> | null>(null);

  useEffect(() => {
    (async () => {
      cal.current = await getCalApi({ namespace: "30min" });
      cal.current("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      onClick={() =>
        cal.current?.("modal", {
          calLink: "muhammad-osama/30min",
          config: { layout: "month_view" },
        })
      }
      className="btn-primary py-4 px-8 text-base"
    >
      <span>📅 Book a Free 30-min Call</span>
    </button>
  );
}
