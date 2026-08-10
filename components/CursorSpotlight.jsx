// "use client";

// import { useEffect, useRef } from "react";

// const CursorSpotlight = () => {
//   const spotlightRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (spotlightRef.current) {
//         spotlightRef.current.style.left = `${e.clientX}px`;
//         spotlightRef.current.style.top = `${e.clientY}px`;
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={spotlightRef}
//       className="pointer-events-none fixed z-30 -translate-x-1/2 -translate-y-1/2
//       w-[400px] h-[400px] rounded-full"
//       style={{
//         background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
//       }}
//     />
//   );
// };

// export default CursorSpotlight;
