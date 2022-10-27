import { units } from "./Enums";

type value = { x: number; y: number };

interface HeatmapReactProps {
  max: number;
  data: Array<value>;
  unit: units;
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
