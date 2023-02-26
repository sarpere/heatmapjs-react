import { useEffect, useMemo, useRef } from "react";
import { units } from "../enums";
import heatmapjs, { heatmapjsObj } from "heatmapjs";
import { customValue, HeatmapReactProps, MapValue } from "../types";
import { heatmapjsUtils } from "../utils";
const HeatmapReact = (props: HeatmapReactProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heatmapRef = useRef<heatmapjsObj | null>(null);
  const computeData = (data: MapValue[]) => {
    if (props.unit === units.percent) {
      let container = {
        width: 0,
        height: 0,
      };
      container.width = containerRef.current?.offsetWidth ?? 0;
      container.height = containerRef.current?.offsetHeight ?? 0;
      return (data as customValue[]).map(function (values, index) {
        return {
          x: Math.round((values[props.xField] / 100) * container.width),
          y: Math.round((values[props.yField] / 100) * container.height),
          value: values[props.valueField],
        };
      });
    } else {
      return data;
    }
  };
  const setData = (max: number, data: MapValue[]) => {
    heatmapRef.current?.setData({
      max: max,
      data: computeData(data),
    });
  };
  const createHeatmapInstane = () => {
    if (!containerRef.current) return null;
    const heatmapjsConfig = heatmapjsUtils.getHeatmapjsConfig(props);
    return heatmapjs.create(
      Object.assign(
        {
          container: containerRef.current,
        },
        heatmapjsConfig
      )
    );
  };
  useEffect(() => {
    heatmapRef.current = createHeatmapInstane();
    setData(props.max, props.data);
  }, []);
  useMemo(() => {
    setData(props.max, props.data);
  }, [props.data, props.max, props.unit]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};
// Heatmap Config stores default values and will be merged with instance config
var HeatmapConfig = {
  radius: 40,
  renderer: "canvas2d",
  gradient: {
    0.25: "rgb(0,0,255)",
    0.55: "rgb(0,255,0)",
    0.85: "yellow",
    1.0: "rgb(255,0,0)",
  },
  maxOpacity: 1,
  minOpacity: 0,
  blur: 0.85,
  xField: "x",
  yField: "y",
  valueField: "value",
  plugins: {},
};
HeatmapReact.defaultProps = {
  unit: units.decimal,
  data: [],
  ...HeatmapConfig,
};
export default HeatmapReact;
