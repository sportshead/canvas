export function clearCanvas(ctx: CanvasRenderingContext2D) {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
