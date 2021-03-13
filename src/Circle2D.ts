import { Point2D } from "./Point2D";

export class Circle2D extends Point2D {
    radius: number;

    constructor(rect: Circle2D);
    constructor(point: Point2D, radius?: number);
    constructor(x?: number, y?: number, radius?: number);
    constructor(
        arg1: any = 0,
        arg2: number = 0,
        arg3: number = 0,
        arg4: number = 0
    ) {
        if (typeof arg1 === "number") {
            super(arg1, arg2);
            this.radius = arg3 === 0 ? 1 : arg3;
            return this;
        } else if (arg1 instanceof Circle2D) {
            const { x, y, radius } = arg1;
            super(x, y);
            this.radius = radius;
            return this;
        } else if (arg1 instanceof Point2D) {
            super(arg1);
            this.radius = arg2 === 0 ? 1 : arg2;
            return this;
        }
        super();
        this.radius = 0;
    }

    set(
        ...args: [rect: Circle2D] | [point: Point2D] | [x: number, y: number]
    ): Point2D {
        if (typeof args[0] === "number") {
            this.x = args[0];
            this.y = args[1]!;
        } else if (args[0] instanceof Circle2D) {
            const { x, y, radius } = args[0];
            this.x = x;
            this.y = y;
            this.radius = radius;
        } else if (args[0] instanceof Point2D) {
            const { x, y } = args[0];
            this.x = x;
            this.y = y;
        }
        return this;
    }

    toArray(): [x: number, y: number, radius: number, radius: number] {
        return [this.x, this.y, this.radius, this.radius];
    }

    render(
        ctx: CanvasRenderingContext2D,
        fill: boolean | (string | CanvasGradient | CanvasPattern) = true,
        stroke: boolean | (string | CanvasGradient | CanvasPattern) = false
    ) {
        if (typeof fill !== "boolean") {
            ctx.fillStyle = fill;
            fill = true;
        }
        if (typeof stroke !== "boolean") {
            ctx.strokeStyle = stroke;
            stroke = true;
        }
        ctx.beginPath();
        ctx.rect(...this.toArray());
        const args = this.toArray();
        args.push(Math.PI / 4, 0, 2 * Math.PI);
        ctx.ellipse(
            ...((args as unknown) as [
                x: number,
                y: number,
                radiusX: number,
                radiusY: number,
                rotation: number,
                startAngle: number,
                endAngle: number,
                anticlockwise?: boolean
            ])
        );
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    }
}
