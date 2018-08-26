export default class SpriteSheet {
    private tiles = new Map<string, HTMLCanvasElement>();

    constructor(private image: HTMLImageElement, private width: number, private height: number) {
        return this;
    }

    public define(name: string, x: number, y: number): void {
        const buffer: HTMLCanvasElement = document.createElement('canvas');
        buffer.width = this.width;
        buffer.height = this.height;
        const ctx = <CanvasRenderingContext2D> buffer.getContext('2d');
        ctx.drawImage(this.image, x * this.width, y * this.height, this.width, this.height, 0, 0, this.width, this.height);
        this.tiles.set(name, buffer);
    }

    public draw(name: string, ctx: CanvasRenderingContext2D, x: number, y: number): void {
        const buffer = <HTMLCanvasElement> this.tiles.get(name);
        ctx.drawImage(buffer, x, y);
    }

}
