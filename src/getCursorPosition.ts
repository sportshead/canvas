import { Point2D } from "./Point2D";

export function getCursorPosition(
    canvas: HTMLCanvasElement,
    event: MouseEvent
) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return new Point2D(x, y);
}
