import { useEffect, useMemo, useRef } from "react";
import { units } from "../Enums";
import heatmapjs, { heatmapjsObj } from "heatmapjs";
import { HeatmapReactProps, MapValue, percentValue } from "../types";
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
      return (data as percentValue[]).map(function (values, index) {
        return {
          x: Math.round((values.x / 100) * container.width),
          y: Math.round((values.y / 100) * container.height),
          value: values.value,
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

  useEffect(() => {
    if (containerRef.current)
      heatmapRef.current = heatmapjs.create({
        container: containerRef.current,
      });
    setData(props.max, props.data);
  }, []);
  useMemo(() => {
    setData(props.max, props.data);
  }, [props.data, props.max, props.unit]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};
HeatmapReact.defaultProps = {
  units: units.decimal,
};
export default HeatmapReact;
