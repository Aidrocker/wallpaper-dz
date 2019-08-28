export function calculateRolls(length, width, height, widthWallpaper, lengthWallpaper ) {
    const perimeter = 2 *(length + width);
    const allLineWallpaper = Math.floor(perimeter/widthWallpaper);
    const additionally = 0.1;
    const amountLineWallpaper = lengthWallpaper/(height + additionally);
    return  Math.ceil(allLineWallpaper/amountLineWallpaper);
}