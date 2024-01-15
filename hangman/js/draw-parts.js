import { getContext, drawLine } from "./canvas.js";

export const head = () => {
  const context = getContext();
  context.beginPath();
  context.arc(120, 60, 20, 0, Math.PI * 2, true);
  context.stroke();
};

export const body = () => {
  drawLine(120, 80, 120, 140);
};

export const leftArm = () => {
  drawLine(120, 80, 100, 110);
};

export const rightArm = () => {
  drawLine(120, 80, 140, 110);
};

export const leftLeg = () => {
  drawLine(120, 140, 100, 170);
};

export const rightLeg = () => {
  drawLine(120, 140, 140, 170);
};
