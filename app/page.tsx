"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MouseFollowAnimation() {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const boxRef = useRef(null);
	const textRef = useRef<any>(null);

	useEffect(() => {
		const handleMouseMove = (event: any) => {
			setMousePos({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		gsap.to(boxRef.current, {
			x: mousePos.x,
			y: mousePos.y,
			duration: 0.3,
		});
	}, [mousePos]);

	useEffect(() => {
		gsap.to(textRef.current.children, {
		  duration: 1,
		  ease: "power1.inOut",
		  stagger: 0.3,
		  y: (i) => Math.sin(i) * 20, // Create a wave effect
		  repeat: -1,
		  yoyo: true,
		});
	  }, []);

	return (
		<>
			<div
				ref={boxRef}
				className="-z-50 w-8 h-8 rounded-full box absolute  -translate-x-2/4 -translate-y-2/4 bg-blue-300 blur-1xl"
			></div>
			<div className="absolute flex w-full h-full justify-center items-center">
				<h1
					ref={textRef}
					className="relative font-semibold text-8xl text-black selection:text-white"
				>
					{Array.from("NFT KNIGHT").map((char, i) => (
						<span key={i} className="inline-block">
							{char}
						</span>
					))}
				</h1>
			</div>
		</>
	);
}
