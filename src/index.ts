import SpriteSheet from './js/SpriteSheet';
import {loadImage} from './js/loaders';
const image = require('./img/tiles.png');

const canvas = <HTMLCanvasElement> document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d');

ctx.fillRect(0, 0, 50, 50);
loadImage('./img/tiles.png').then(image => {
console.log(image);
    const sprites = new SpriteSheet(image as HTMLImageElement, 16, 16);
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);
    sprites.draw('sky', ctx, 42, 62);

});

