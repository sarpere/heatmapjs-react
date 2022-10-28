declare module "heatmapjs" {
  import { RefObject, ReactElement } from "react";
  export interface heatmapjsObj {
    setData: (values: {
      max: number;
      data: (number | { x: number; y: number; value: number })[];
    }) => void;
  }
  function create(container: { container: Element }): heatmapjsObj;
  export default {
    create,
  };
}
