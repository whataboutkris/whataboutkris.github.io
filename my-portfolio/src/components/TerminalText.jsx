import { useEffect, useState } from "react";

export default function TerminalText({
text,
delay = 0,
speed = 35,
className = "",
showCursor = true,
}) {
const [displayedText, setDisplayedText] = useState("");
const [started, setStarted] = useState(false);

useEffect(() => {
let typingInterval;
let startTimeout;


setDisplayedText("");
setStarted(false);

startTimeout = setTimeout(() => {
  setStarted(true);
  let index = 0;

  typingInterval = setInterval(() => {
    index++;
    setDisplayedText(text.slice(0, index));

    if (index >= text.length) {
      clearInterval(typingInterval);
    }
  }, speed);
}, delay);

return () => {
  clearTimeout(startTimeout);
  clearInterval(typingInterval);
};


}, [text, delay, speed]);

return ( <span className={className}>
{displayedText}
{showCursor && started && ( <span className="terminal-cursor" aria-hidden="true">
▍ </span>
)} </span>
);
}
