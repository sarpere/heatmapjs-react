import { config } from "heatmapjs";

type percentValue = { x: number; y: number; value: number };
type customValue = { [key: string]: number };
type pxValue = number;
type MapValue = percentValue | pxValue | customValue;
interface HeatmapReactProps {
  max: number;
  data: Array<MapValue>;
  unit?: "decimal" | "percent"
  config?: config;
}
