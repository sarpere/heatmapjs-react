declare module "heatmapjs" {
  import { MutableRefObject } from "react";
  interface IheatmapObj {
    setData: (values: {
      max: number;
      data: number[] | { x: number; y: number; value: number }[];
    }) => void;
  }

  export default any;
}
