import React from "react";

interface LogoGuaxasProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export function LogoGuaxas({
  className = "",
  size = "md",
  showText = true,
}: LogoGuaxasProps) {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-36 h-36",
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className={`relative ${sizeMap[size]} flex items-center justify-center`}>
        {/* SVG Crest of A.A.A.P.U. Guaxas */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Circular Forest Background */}
          <circle cx="100" cy="95" r="85" fill="#0c2438" stroke="#00bcd4" strokeWidth="4" />
          
          {/* Inner Teal Glow */}
          <circle cx="100" cy="95" r="76" fill="#083344" />

          {/* Stylized Pine Trees Silhouette */}
          <path d="M45 110L60 70L75 110Z" fill="#0e7490" />
          <path d="M125 110L140 70L155 110Z" fill="#0e7490" />
          <path d="M55 105L70 60L85 105Z" fill="#155e75" />
          <path d="M115 105L130 60L145 105Z" fill="#155e75" />

          {/* Mascot Raccoon (Guaxas) Silhouette & Features */}
          {/* Ears */}
          <path d="M68 55L78 30L94 50Z" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <path d="M132 55L122 30L106 50Z" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <path d="M73 48L80 36L89 48Z" fill="#e2e8f0" />
          <path d="M127 48L120 36L111 48Z" fill="#e2e8f0" />

          {/* Raccoon Head Base & Cheeks */}
          <path
            d="M60 85C50 75 55 60 75 55C85 50 115 50 125 55C145 60 150 75 140 85C148 95 142 110 125 115C115 118 85 118 75 115C58 110 52 95 60 85Z"
            fill="#94a3b8"
            stroke="#0f172a"
            strokeWidth="3"
          />

          {/* Dark Raccoon Mask */}
          <path
            d="M65 72C70 65 85 68 95 75C98 77 102 77 105 75C115 68 130 65 135 72C140 80 135 90 125 90C115 90 106 82 100 82C94 82 85 90 75 90C65 90 60 80 65 72Z"
            fill="#0f172a"
          />

          {/* Eyes (Fierce Cyan Glow) */}
          <ellipse cx="82" cy="78" rx="5" ry="4" fill="#00e5ff" />
          <ellipse cx="118" cy="78" rx="5" ry="4" fill="#00e5ff" />
          <circle cx="82" cy="78" r="2" fill="#0f172a" />
          <circle cx="118" cy="78" r="2" fill="#0f172a" />
          <circle cx="83" cy="76" r="1" fill="#ffffff" />
          <circle cx="119" cy="76" r="1" fill="#ffffff" />

          {/* White Snout & Chest */}
          <path
            d="M85 82C90 78 110 78 115 82C122 88 120 102 100 105C80 102 78 88 85 82Z"
            fill="#ffffff"
          />
          {/* Nose */}
          <path d="M96 86C98 84 102 84 104 86L102 91C101 92 99 92 98 91Z" fill="#0f172a" />
          {/* Grin / Determination Line */}
          <path d="M93 96C98 99 102 99 107 96" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

          {/* Strong Forearms & Hands in Centered Focus Pose */}
          <path
            d="M50 115C45 95 65 105 75 125C80 135 88 138 95 130C97 126 103 126 105 130C112 138 120 135 125 125C135 105 155 95 150 115C145 135 135 145 120 150L80 150C65 145 55 135 50 115Z"
            fill="#64748b"
            stroke="#0f172a"
            strokeWidth="3"
          />
          <path
            d="M85 128C92 120 108 120 115 128C110 138 90 138 85 128Z"
            fill="#e2e8f0"
            stroke="#0f172a"
            strokeWidth="2"
          />

          {/* Lower Crest Banner: A.A.A.P.U. */}
          <path
            d="M10 150L25 138H175L190 150L175 182L100 195L25 182Z"
            fill="#081b2a"
            stroke="#00e5ff"
            strokeWidth="3.5"
          />
          
          {/* Banner inner border */}
          <path
            d="M20 152L30 144H170L180 152L168 178L100 189L32 178Z"
            fill="#0a253a"
          />

          {/* Collegiate Typography: A.A.A.P.U. */}
          <text
            x="100"
            y="168"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="2"
            fill="#ffffff"
            stroke="#0f172a"
            strokeWidth="0.8"
          >
            A.A.A.P.U.
          </text>

          {/* Subtitle Badge: GUAXAS */}
          <rect x="58" y="174" width="84" height="15" rx="4" fill="#00bcd4" />
          <text
            x="100"
            y="185"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="10"
            letterSpacing="2.5"
            fill="#051622"
          >
            GUAXAS
          </text>
        </svg>
      </div>

      {showText && size !== "sm" && (
        <span className="mt-1 text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 font-mono">
          A.A.A.P.U. · GUAXAS
        </span>
      )}
    </div>
  );
}
