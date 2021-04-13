import React from "react";
import "./input.css";
export function PlayIcon() {
  return (
    <svg
      className="playIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      space="preserve"
      fill="none"
    >
      <g>
        <g>
          <circle cx="20" cy="20" r="20" fill="#3faf6c" />
        </g>
      </g>
      <g>
        <polyline points="29,20 15,12 15,28 29,20" fill="#fff" />
      </g>
    </svg>
  );
}
