export function loadImage(url: string) {
    return new Promise(resolve => {
        const image = <HTMLImageElement>new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}