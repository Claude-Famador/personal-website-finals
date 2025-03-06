export default function FloatingElements() {
  return (
    <div className="floating-elements">
      <div className="element e1"></div>
      <div className="element e2"></div>
      <div className="element e3"></div>
      <style jsx>{`
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .element {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, #55CDFC, #F7A8B8);
          opacity: 0.1;
        }
        .e1 {
          width: 10px;
          height: 10px;
          top: 20%;
          left: 10%;
          animation: float-1 15s infinite;
        }
        .e2 {
          width: 15px;
          height: 15px;
          top: 50%;
          right: 15%;
          animation: float-2 20s infinite;
        }
        .e3 {
          width: 12px;
          height: 12px;
          bottom: 30%;
          left: 50%;
          animation: float-3 18s infinite;
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(100px, 100px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-100px, 50px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -100px); }
        }
      `}</style>
    </div>
  );
}