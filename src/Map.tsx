import React, {forwardRef, useRef} from 'react';
import type { MapLayer, MapProps } from './Map.d';

// import cx from '../maps/cx.json';

function Map({
  id,
  name,
  tabIndex = 0,
  layerProps,
  checkedLayers,
  regions = [],
  currentLayers,
  children,
  ...other
}: MapProps, ref) {
  // if (!layers || layers.length === 0) {
  //   // eslint-disable-next-line no-console
  //   console.error(
  //     `[@south-paw/react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?`,
  //   );
  //   return null;
  // }

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

// eslint-disable-next-line import/prefer-default-export
export default forwardRef(Map);
