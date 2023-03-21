import React, {Ref} from "react";

import regions, {TRegionName} from './regions';

export type TRegion = TRegionName | IRegionFunc;

export interface MapLayer {
  /** Unique ID of each layer. */
  id: string;
  /** Name of the layer. */
  name: string;
  /** SVG path for the layer. */
  d: string;
}

export interface RegionObj {
  id: string;
  name: string;
  viewBox: string;
  layers: MapLayer[];
}

type IRegionFunc = () => RegionObj;

export interface MapProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
  /** Unique ID of the SVG element. */
  id: string;
  /** Name of the map. */
  name: string;
  /** View box for the map. */
  viewBox: string;
  /** Layers that represent the regions of the map. */
  regions: "World" | TRegion[];
  /** Tab index for each layer. Set to '-1' to disable layer focusing. */
  tabIndex?: number;
  /** Props to spread onto each layer. */
  layerProps?: React.SVGProps<SVGPathElement>;
  /** Layer IDs to 'select' with the 'aria-checked' attribute. */
  checkedLayers?: string[];
  /** Layer IDs to 'select' with the 'aria-current' attribute. */
  currentLayers?: string[];
}
