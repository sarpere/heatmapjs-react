import { config } from "heatmapjs";
import { units } from "../Enums";

type percentValue = { x: number; y: number; value: number };
type customValue = { [key: string]: number };
type pxValue = number;
type MapValue = percentValue | pxValue | customValue;
interface HeatmapReactProps {
  max: number;
  data: Array<MapValue>;
  unit?: units.decimal | units.percent;
  config?: config;
}
