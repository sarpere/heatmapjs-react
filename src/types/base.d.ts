import { units } from "../enums";

type percentValue = { x: number; y: number; value: number };
type customValue = { [key: string]: number };
type pxValue = number;
type MapValue = percentValue | pxValue | customValue;
type unit = keyof typeof units;
interface HeatmapReactProps {
  max: number;
  data: Array<MapValue>;
  unit?: unit;
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
