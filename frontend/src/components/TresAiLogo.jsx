import React from "react";
import tresAiLogo from "../assets/Tres AI/tres-ai-logo.png";
import tresAiMark from "../assets/Tres AI/tres-ai-mark.png";

// Official TRES AI Assistant brand assets (source files live in src/assets/Tres AI/).
// The mark is the icon cropped from the full logo, for avatars and small spaces.
export const TresAiMark = ({ size = 40, className = "", title = "TRES AI Assistant" }) => (
  <img src={tresAiMark} width={size} height={size} alt={title} className={`object-contain ${className}`} draggable="false" />
);

const TresAiLogo = ({ className = "h-10 w-auto" }) => (
  <img src={tresAiLogo} width="1200" height="210" alt="TRES AI Assistant" className={className} draggable="false" />
);

export default TresAiLogo;
