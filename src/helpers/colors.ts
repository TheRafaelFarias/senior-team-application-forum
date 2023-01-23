const hexToRgbRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

export function convertHexToRGB(hex: string, opacity: number) {
  const rgbaArray = hex
    .replace(hexToRgbRegex, (_, r, g, b) => "#" + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)!
    .map((x) => parseInt(x, 16))
    .concat(opacity)
    .join(",");
  return `rgba(${rgbaArray})`;
}
