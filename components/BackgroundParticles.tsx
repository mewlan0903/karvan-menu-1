const PARTICLES = [
  { top: "6%", left: "8%", size: "w-1 h-1", anim: "particle-1" },
  { top: "10%", left: "45%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "14%", left: "78%", size: "w-1 h-1", anim: "particle-3" },
  { top: "18%", left: "25%", size: "w-0.5 h-0.5", anim: "particle-1" },
  { top: "22%", left: "62%", size: "w-1 h-1", anim: "particle-2" },
  { top: "26%", left: "90%", size: "w-0.5 h-0.5", anim: "particle-3" },
  { top: "30%", left: "15%", size: "w-1 h-1", anim: "particle-1" },
  { top: "34%", left: "52%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "38%", left: "82%", size: "w-1 h-1", anim: "particle-3" },
  { top: "42%", left: "5%", size: "w-0.5 h-0.5", anim: "particle-1" },
  { top: "46%", left: "35%", size: "w-1 h-1", anim: "particle-2" },
  { top: "50%", left: "68%", size: "w-0.5 h-0.5", anim: "particle-3" },
  { top: "54%", left: "92%", size: "w-1 h-1", anim: "particle-1" },
  { top: "58%", left: "12%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "62%", left: "42%", size: "w-1 h-1", anim: "particle-3" },
  { top: "66%", left: "75%", size: "w-0.5 h-0.5", anim: "particle-1" },
  { top: "70%", left: "22%", size: "w-1 h-1", anim: "particle-2" },
  { top: "74%", left: "55%", size: "w-0.5 h-0.5", anim: "particle-3" },
  { top: "78%", left: "85%", size: "w-1 h-1", anim: "particle-1" },
  { top: "82%", left: "8%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "86%", left: "38%", size: "w-1 h-1", anim: "particle-3" },
  { top: "90%", left: "68%", size: "w-0.5 h-0.5", anim: "particle-1" },
  { top: "94%", left: "18%", size: "w-1 h-1", anim: "particle-2" },
  { top: "98%", left: "48%", size: "w-0.5 h-0.5", anim: "particle-3" },
  { top: "4%", left: "32%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "8%", left: "62%", size: "w-1 h-1", anim: "particle-3" },
  { top: "20%", left: "5%", size: "w-1 h-1", anim: "particle-1" },
  { top: "28%", left: "72%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "48%", left: "22%", size: "w-0.5 h-0.5", anim: "particle-3" },
  { top: "60%", left: "58%", size: "w-1 h-1", anim: "particle-1" },
  { top: "72%", left: "88%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "88%", left: "28%", size: "w-0.5 h-0.5", anim: "particle-1" },
  { top: "96%", left: "78%", size: "w-1 h-1", anim: "particle-3" },
  { top: "16%", left: "95%", size: "w-0.5 h-0.5", anim: "particle-1" },
  { top: "40%", left: "48%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "52%", left: "28%", size: "w-1 h-1", anim: "particle-3" },
  { top: "64%", left: "35%", size: "w-0.5 h-0.5", anim: "particle-2" },
  { top: "76%", left: "65%", size: "w-1 h-1", anim: "particle-1" },
  { top: "84%", left: "52%", size: "w-0.5 h-0.5", anim: "particle-3" },
  { top: "92%", left: "88%", size: "w-0.5 h-0.5", anim: "particle-2" },
];

export default function BackgroundParticles() {
  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-[#c9a55c] ${p.size} ${p.anim}`}
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  );
}
