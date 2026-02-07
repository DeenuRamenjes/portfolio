import React from "react";

export interface StaggerTextOptions {
  staggerDelay?: number;
  by?: "word" | "line" | "char";
}

export function splitTextForAnimation(
  text: string,
  options: StaggerTextOptions = {}
): React.ReactNode[] {
  const { by = "word" } = options;

  if (by === "word") {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="inline-block will-animate"
        style={{ whiteSpace: "pre" }}
      >
        {word}
        {index < text.split(" ").length - 1 ? "\u00A0" : ""}
      </span>
    ));
  }

  if (by === "line") {
    return text.split("\n").map((line, index) => (
      <span key={index} className="block will-animate">
        {line}
      </span>
    ));
  }

  if (by === "char") {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block will-animate">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }

  return [text];
}

export function getStaggerDelay(index: number, baseDelay: number = 0.04): number {
  return index * baseDelay;
}
