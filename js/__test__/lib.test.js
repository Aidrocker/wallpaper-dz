import {calculateRolls} from "../lib";

test('the function must work, i hope', () => {
   const length = 7;
   const width = 5;
   const height = 2.75;
   const widthWallpaper = 1.75;
   const lengthWallpaper = 15;

   const expeted = 3;
   const result = calculateRolls(length, width, height,widthWallpaper, lengthWallpaper);

   expect(result).toBe(expeted);
});