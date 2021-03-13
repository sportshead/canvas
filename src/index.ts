import {
    detectRectCollision,
    detectXCollision,
    detectYCollision,
    detectCircleCollision,
} from "./collision";
import { getCursorPosition } from "./getCursorPosition";
import { Point2D } from "./Point2D";
import { Rect2D } from "./Rect2D";
import { Size2D } from "./Size2D";
import { roundRect } from "./roundRect";
import { Particle2D } from "./Particle2D";
import { Circle2D } from "./Circle2D";
declare global {
    interface Window {
        CanvasAPI: typeof CanvasAPI;
    }
}

const CanvasAPI = {
    detectRectCollision,
    detectXCollision,
    detectYCollision,
    detectCircleCollision,
    getCursorPosition,
    Point2D,
    Rect2D,
    Size2D,
    roundRect,
    Particle2D,
    Circle2D,
};
window.CanvasAPI = CanvasAPI;

export default CanvasAPI;
