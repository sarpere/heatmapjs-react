// @ts-nocheck
import { useEffect, useMemo, useRef } from "react";
import { HeatmapReactProps, value } from ".";
import heatmapjs from "heatmapjs";
const HeatmapReact = (props: HeatmapReactProps) => {
  const containerRef = useRef(null);
  const heatmapRef = useRef(null);
  const setData = (max: number, data: value[]) => {
    heatmapRef.current.setData({
      max: max,
      data: computeData(data),
    });
  };

  useEffect(() => {
    heatmapRef.current = heatmapjs.create({ container: containerRef });
    setData(props.max, props.data);
  }, []);
  useMemo(() => {
    setData(props.max, props.data);
  }, [props.data, props.max, props.unit]);

  const computeData = (data) => {
    if (props.unit === "percent") {
      let container = {};
      container.width = containerRef.current.offsetWidth;
      container.height = containerRef.current.offsetHeight;
      return data.map(function (values, index) {
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
  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
  );
};

export default HeatmapReact;
