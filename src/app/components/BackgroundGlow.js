"use client";

export default function BackgroundGlow() {
  return (
    <div className="glow-wrapper">
      <div className="glow-circle circle1"></div>
      <div className="glow-circle circle2"></div>
      <div className="glow-circle circle3"></div>
      <style jsx>{`
        .glow-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          border-radius: 12px;
        }
        .glow-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.05;
          pointer-events: none;
        }
        .circle1 {
          background: #55CDFC;
          width: 250px;
          height: 250px;
          top: 5%;
          left: 0;
          animation: float 12s ease-in-out infinite;
        }
        .circle2 {
          background: #F7A8B8;
          width: 400px;
          height: 400px;
          bottom: 0;
          right: 0;
          animation: float 15s ease-in-out infinite;
        }
        .circle3 {
          background: #55CDFC;
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float 18s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(20px, 20px) rotate(180deg) scale(1.05); }
          100% { transform: translate(0, 0) rotate(360deg) scale(1); }
        }
      `}</style>
    </div>
  );
}