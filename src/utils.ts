const convert = (lat: number, lng: number, w, h, k = 1) => {
  if (!lat || !lng || !w || !h) return { x: undefined, y: undefined };

  const kx = Array.isArray(k) ? k[0] : k;
  const ky = Array.isArray(k) ? 1 / k[1] : 1 / k;

  const x = Math.round(kx * ((lng + 180) * (w / 360)) * 100) / 100;

  const latRad = (lat * Math.PI) / 180;

  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = Math.round(ky * (h / 2 - (w * mercN) / (2 * Math.PI)) * 100) / 100;

  return { x, y };
};

const returnDefault = () => ({ x: undefined, y: undefined });

// eslint-disable-next-line import/prefer-default-export
export const getLatLngToMap = (ref) => {
  const bBox = ref?.current?.getBBox();

  if (!ref.current || !bBox) return returnDefault;

  return (x, y, k = 1) => convert(x, y, bBox.width, bBox.height, k);
};
