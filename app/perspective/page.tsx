"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HomePage() {
  const textRef = useRef<any>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorSize = 16;
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - cursorSize / 2;
      const y = e.clientY - cursorSize / 2;

      gsap.to(cursorRef.current, {
        duration: 0.5,
        x: x,
        y: y,
      });

      textRef.current.forEach((el: any, i: any) => {
        gsap.to(el, {
          duration: 0.5,
          x: (e.clientX - window.innerWidth / 2) * (i + 1) * 0.02,
          y: (e.clientY - window.innerHeight / 2) * (i + 1) * 0.02,
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        ref={cursorRef}
        className="w-4 h-4 bg-blue-500 rounded-full pointer-events-none"
      ></div>
      <div className="h-screen flex justify-center items-center overflow-hidden bg-blue-600">
        <div className="relative perspective-100 uppercase">
          {Array.from({ length: 15 }, (_, i) => (
            <h1
              ref={(el) => (textRef.current[i] = el)}
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "white",
              }}
              className={`absolute top-0 left-0 text-blue-500 text-9xl font-bold transform-style-preserve-3d ${
                i === 0 && "relative"
              }`}
              key={i}
            >
              NFT KNIGHT
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}
