import { forwardRef, useEffect, useRef, useState } from 'react';
import type { MapLayer, MapProps } from './Map.d';

import cx from '../maps/cx.json';

const convert = (lat: number, lng: number, box, k = 1) => {
  const [w, h] = box;

  const kx = Array.isArray(k) ? k[0] : k;
  const ky = Array.isArray(k) ? 1 / k[1] : 1 / k;

  const x = (lng + 180) * (kx * w / 360);

  const latRad = (lat * Math.PI) / 180;

  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = ky * h / 2 - (kx * w * mercN) / (2 * Math.PI);

  return { x, y };
};

function NMap(
  { id, name, tabIndex = 0, layerProps, checkedLayers, regions = [], currentLayers, children, ...other }: MapProps,
  fRef,
) {
  // if (!layers || layers.length === 0) {
  //   // eslint-disable-next-line no-console
  //   console.error(
  //     `[@south-paw/react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?`,
  //   );
  //   return null;
  // }

  const ref = useRef<SVGSVGElement>(null);
  const [box, setBox] = useState([undefined, undefined]);

  useEffect(() => {
    if (ref.current) {
      const bBox = ref.current.getBBox();
      setBox([bBox.width, bBox.height]);
      //
      // console.log('ref', ref.current.viewBox);
      //
      // for (const child of ref.current.children) {
      //   // console.log(child.getBBox().width / bBox.width);
      //   // x[child.id] = child.getBBox().width / bBox.width;
      //   console.log(child.id, cx[child.id], '!');
      // }
    }
  }, [ref]);

  useEffect(() => {
    fRef.current = { latLntToMap: (x, y, k = 1) => convert(x, y, box, k) };
  }, [convert, box, fRef]);

  const layers: MapLayer[] = [];

  // if (regions !== 'World')
  //   regions.forEach((item: TRegion) => {
  //     if (typeof item === 'function') layers.splice(0, 0, ...item().layers);
  //     else if (regionsDictionary[item])
  //       layers.splice(0, 0, ...require(`../maps/json/${regionsDictionary[item]}.json`).layers);
  //   });
  // else return layers.splice(0, 0, ...require(`../maps/json/world.json`).layers);
  //
  // console.log('xx', other, layerProps);

  // const r = typeof regions !== 'function' ? require(`../maps/json/russia.json`) : regions();
  const r =
    typeof regions !== 'function' ? require(`../maps/json/russia.json`) : require(`../maps/json/world-low-res.json`);

  layers.splice(0, 0, ...r.layers);
  other.viewBox = r.viewBox;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" ref={ref} key={id} id={id} aria-label={name} {...other}>
      {layers.map((layer) => (
        <path
          key={layer.id}
          tabIndex={tabIndex}
          aria-label={layer.name}
          aria-checked={checkedLayers && checkedLayers.includes(layer.id)}
          aria-current={currentLayers && currentLayers.includes(layer.id)}
          {...layer}
          {...layerProps}
        />
      ))}

      {children}
    </svg>
  );
}

const returnDefault = () => ({ x: undefined, y: undefined });

export const useMapFunction = (ref) => {
  const [force, setForce] = useState(1);

  useEffect(() => {
    setForce(Math.random());
  }, [ref?.current?.latLntToMap]);

  if (!ref?.current?.latLntToMap)
    return returnDefault;

  return ref.current.latLntToMap;
};

// eslint-disable-next-line import/prefer-default-export
export const Map = forwardRef(NMap);
// export const Map = NMap;
