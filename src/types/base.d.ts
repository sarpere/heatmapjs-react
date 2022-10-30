import { units } from "../Enums";

type percentValue = { x: number; y: number; value: number };
type pxValue = number;
type MapValue = percentValue | pxValue;
interface HeatmapReactProps {
  max: number;
  data: Array<MapValue>;
  unit?: units.decimal | units.percent;
}

interface config {
  Radius: number;
  Renderer: string;
  Gradient: { [key: string | number]: string };
  MaxOpacity: number;
  MinOpacity: number;
  Blur: number;
  XField: string;
  YField: string;
  ValueField: string;
  plugins: { [key: string | number]: string };
}
