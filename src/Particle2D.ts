export class Particle2D {
    birthtime: number;
    dead: boolean;

    /**
     * Creates a 2D particle.
     * @constructor
     * @param {Number} x starting x coordinate of the particle.
     * @param {Number} y starting y coordinate of the particle.
     * @param {Number} direction angle of particle in radians
     * @param {Number} size size of the particle in pixels
     * @param {Number} speed speed in pixels per frame
     * @param {Number} lifespan lifespan of particle in ms
     * @param {String} [color] color of particle, default black
     * @memberof Particle2D
     */
    constructor(
        public x: number,
        public y: number,
        public direction: number,
        public size: number,
        public speed: number,
        public lifespan: number,
        public color: string = "black"
    ) {
        this.birthtime = new Date().getTime();
        this.dead = false;
    }

    /**
     * Draw the particle
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Particle2D
     */
    draw(ctx: CanvasRenderingContext2D) {
        const now = new Date().getTime();
        if (this.dead || now - this.birthtime >= this.lifespan) {
            this.dead = true;
        } else {
            this.x += Math.cos(this.direction) * this.speed;
            this.y += Math.sin(this.direction) * this.speed;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(
                this.x,
                this.y,
                this.size,
                this.size,
                0,
                0,
                2 * Math.PI,
                false
            );
            ctx.fill();
        }
    }
}
