import { Heatmap as HeatmapR } from "..";
import { HeatmapReactProps } from "../types";

interface HeatmapProps extends HeatmapReactProps {}
/**
 * Heatmap UI component for user interaction
 */
export const Heatmap = (props: HeatmapProps) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <HeatmapR {...props} />
    </div>
  );
};

Heatmap.defaultProps = HeatmapR.defaultProps;
