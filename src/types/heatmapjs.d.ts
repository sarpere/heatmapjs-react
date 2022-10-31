declare module "heatmapjs" {
  import { RefObject, ReactElement } from "react";
  import { MapValue } from "./base";
  export interface heatmapjsObj {
    setData: (values: { max: number; data: MapValue[] }) => void;
  }
  export interface config {
    radius: number;
    renderer: string;
    gradient: { [key: string | number]: string };
    maxOpacity: number;
    minOpacity: number;
    blur: number;
    xField: string;
    yField: string;
    valueField: string;
    plugins: { [key: string | number]: string };
  }

  function create(
    config: { container: Element } & Partial<config>
  ): heatmapjsObj;
  export default {
    create,
  };
}
