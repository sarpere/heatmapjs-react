import { config } from "heatmapjs";

/**
 * @description This method allow to filter heatmapjs config params
 * @param mixedConfig Json which is contain heatmapjs config
 * @returns Base config for heatmapjs
 */
export const getHeatmapjsConfig = (mixedConfig: config): config => {
  return {
    blur: mixedConfig.blur,
    gradient: mixedConfig.gradient,
    maxOpacity: mixedConfig.maxOpacity,
    minOpacity: mixedConfig.minOpacity,
    plugins: mixedConfig.plugins,
    radius: mixedConfig.radius,
    renderer: mixedConfig.renderer,
    valueField: mixedConfig.valueField,
    xField: mixedConfig.xField,
    yField: mixedConfig.yField,
  };
};
