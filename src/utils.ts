import { RefObject } from 'react';

type TConvert = (
  lat: number,
  lng: number,
  w: number,
  h: number,
  k: number | [number, number],
) => { x: number | undefined; y: number | undefined };

const convert: TConvert = (lat, lng, w_, h_, k = 1) => {
  if (!lat || !lng || !w_ || !h_) return { x: undefined, y: undefined };

  const kx = Array.isArray(k) ? k[0] : k;
  const ky = Array.isArray(k) ? k[1] : k;

  const w = kx * w_;
  const h = ky * h_;

  const x = Math.round((lng + 180) * (w / 360) * 100) / 100;

  const latRad = (lat * Math.PI) / 180;

  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = Math.round((h / 2 - (w * mercN) / (2 * Math.PI)) * 100) / 100;

  return { x, y };
};

const returnDefault = () => ({ x: undefined, y: undefined });

// eslint-disable-next-line import/prefer-default-export
export const getLatLngToMap = (ref: RefObject<SVGSVGElement>, k: number | [number, number] = 1) => {
  const bBox = ref?.current?.getBBox();

  if (!ref?.current || !bBox) return returnDefault;

  return (x: number, y: number) => convert(x, y, bBox.width, bBox.height, k);
};
