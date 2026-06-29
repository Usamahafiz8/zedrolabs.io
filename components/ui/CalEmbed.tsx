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
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="btn-primary w-full justify-center py-5 text-base"
    >
      <span>📅 Pick a Time — Book Your Free 30-min Call</span>
    </button>
  );
}
