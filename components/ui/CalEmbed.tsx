"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="muhammad-osama/30min"
      data-cal-config='{"layout":"month_view"}'
      className="btn-primary py-4 px-8 text-base"
    >
      <span>📅 Book a Free 30-min Call</span>
    </button>
  );
}
