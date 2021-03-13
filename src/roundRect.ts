export interface RoundRectRadius {
    tl: number;
    tr: number;
    br: number;
    bl: number;
}

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
export function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number | Partial<RoundRectRadius> = 5,
    fill: boolean = false,
    stroke: boolean = true
) {
    let _radius: RoundRectRadius;
    if (typeof radius === "number") {
        _radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        _radius = {
            tl: radius.tl ?? 0,
            tr: radius.tr ?? 0,
            br: radius.br ?? 0,
            bl: radius.bl ?? 0,
        };
    }
    ctx.beginPath();
    ctx.moveTo(x + _radius.tl, y);
    ctx.lineTo(x + width - _radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + _radius.tr);
    ctx.lineTo(x + width, y + height - _radius.br);
    ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - _radius.br,
        y + height
    );
    ctx.lineTo(x + _radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - _radius.bl);
    ctx.lineTo(x, y + _radius.tl);
    ctx.quadraticCurveTo(x, y, x + _radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }
}
