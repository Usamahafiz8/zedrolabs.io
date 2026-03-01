"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + "px";
        dot.current.style.top  = my + "px";
      }
    };

    const lerp = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top  = ry + "px";
      }
      requestAnimationFrame(lerp);
    };

    const onDown = () => {
      if (dot.current)  dot.current.style.transform  = "translate(-50%,-50%) scale(0.6)";
      if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(0.7)";
    };
    const onUp = () => {
      if (dot.current)  dot.current.style.transform  = "translate(-50%,-50%) scale(1)";
      if (ring.current) ring.current.style.transform = "translate(-50%,-50%) scale(1)";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    lerp();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={dot} style={{ position:"fixed", width:10, height:10, background:"#ff4d4d", borderRadius:"50%", pointerEvents:"none", zIndex:9999, transform:"translate(-50%,-50%)", mixBlendMode:"screen", transition:"transform 0.1s" }} />
      <div id="cursor-ring" ref={ring} style={{ position:"fixed", width:38, height:38, border:"1.5px solid rgba(193,39,45,0.55)", borderRadius:"50%", pointerEvents:"none", zIndex:9998, transform:"translate(-50%,-50%)", transition:"transform 0.1s" }} />
    </>
  );
}
