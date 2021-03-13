import { clearCanvas } from "./clearCanvas";
import { roundRect } from "./roundRect";

export class Cutscene2D {
    img: HTMLImageElement;
    static defaultFont = "20px PressStart2P";
    /**
     * Creates a 2D Cutscene instance.
     * It is recommended to create a image to pass to this constructor and await the load of the image using promiseEventListener.
     * Otherwise the image may not have loaded properly and everything will break
     *
     * Experiment with the static defaultFont property to see what works best for your canvas.
     * @constructor
     * @param {String|HTMLImageElement} img Image object or string with image url
     * @param {String} text One or two lines of text. Separate lines with `\n`
     * @memberof Cutscene2D
     * @todo C
     */
    constructor(
        img: string | HTMLImageElement,
        public text: string,
        public font = Cutscene2D.defaultFont
    ) {
        if (img instanceof HTMLImageElement) {
            this.img = img;
        } else {
            const img_ = new Image();
            img_.src = img;
            this.img = img_;
        }
    }

    /**
     * Draws the cutscene
     * @param {CanvasRenderingContext2D} ctx
     * @memberof Cutscene2D
     */
    draw(ctx: CanvasRenderingContext2D) {
        clearCanvas(ctx);

        const canvas = ctx.canvas;

        ctx.drawImage(this.img, 0, 0);

        ctx.fillStyle = "black";
        roundRect(
            ctx,
            10,
            400,
            canvas.width - 20,
            canvas.height - 410,
            5,
            false,
            true
        );

        ctx.fillStyle = "white";
        roundRect(
            ctx,
            10,
            400,
            canvas.width - 20,
            canvas.height - 410,
            5,
            true,
            false
        );

        ctx.fillStyle = "black";
        ctx.font = this.font;
        this.text.split("\n").forEach((v, i) => {
            if (i === 0) {
                ctx.fillText(v, 20, 440, canvas.width - 40);
            } else if (i === 1) {
                ctx.fillText(v, 20, 440 + 30, canvas.width - 40);
            }
        });
    }
}
