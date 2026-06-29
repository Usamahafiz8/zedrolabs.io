"use client";
import Script from "next/script";

export default function CalEmbed() {
  return (
    <>
      <Script
        id="cal-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(C,A,L){
              let p=function(a,ar){a.q.push(ar);};
              let d=C.document;
              C.Cal=C.Cal||function(){
                let cal=C.Cal;let ar=arguments;
                if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}
                if(ar[0]===L){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];
                typeof namespace==="string"?(cal.ns[namespace]=cal.ns[namespace]||api)(ar.slice(2))&&p(api,ar.slice(2)):p(cal,ar)&&(cal.loaded=false);return;}
                p(cal,ar);
              };
            })(window,"https://app.cal.com/embed/embed.js","init");
            Cal("init","30min",{origin:"https://cal.com"});
            Cal.ns["30min"]("ui",{"hideEventTypeDetails":false,"layout":"month_view"});
          `,
        }}
      />
      <button
        data-cal-namespace="30min"
        data-cal-link="muhammad-osama/30min"
        data-cal-config='{"layout":"month_view"}'
        className="btn-primary py-4 px-8 text-base"
      >
        <span>📅 Book a Free 30-min Call</span>
      </button>
    </>
  );
}
