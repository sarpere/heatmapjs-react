import { units } from "../Enums";

type percentValue = { x: number; y: number; value: number };
type pxValue = number;
type value = percentValue | pxValue;
interface HeatmapReactProps {
  max: number;
  data: Array<value>;
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
