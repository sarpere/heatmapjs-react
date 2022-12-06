# Heatmapjs React

A very simple port of `heatmap.js` for `React`. The idea behind this component is to be able to display a heatmap over any type of content (image, div, components ...).
Inspired by [react-heatmap](https://github.com/mazedesignhq/react-heatmap).

## Demo & Examples

Live Demo: [@sarpere/heatmapjs-react](https://sarpere.com/heatmapjs-react)

```bash
    yarn
    yarn dev
```

<img src="/docs/example.png" alt="@sarpere/heatmapjs-react example" width="100%" />

Then open [`localhost:8000`](http://localhost:8000) in a browser.

## Installation

### npm

```bash
    npm i @sarpere/heatmapjs-react
```

### yarn

```bash
    yarn add @sarpere/heatmapjs-react
```

## Usage

```js
import { Heatmap } from "@sarpere/heatmapjs-react";
const App = () => {
    const data = [{ x: 10, y: 15, value: 5}, { x: 50, y: 50, value: 2}, ...];
    return (
        <Heatmap max={5} data={data} />
    )
}
```

## Props

| Prop | Type | Default | Required | Description |
|--|--|--|--|--|
| max | int | 5 | Yes | Maximum value for intensity |
| data | array | [] | Yes | Heatmap array of dots |
| unit | string | decimal | No | Can be either `percent` or `decimal`. If percent, a `x` value like `26` is considered **26% of the container from the top left**|
| config | HeatmapConfig | <pre>{<br />&nbsp;&nbsp; radius: 40,<br />&nbsp;  &nbsp;renderer: &quot;canvas2d&quot;,<br />&nbsp;  &nbsp;gradient: { <br />&nbsp;  &nbsp;  &nbsp;  &nbsp;0.25: &quot;rgb(0,0,255)&quot;, <br />&nbsp;  &nbsp;​​​​​​​ &nbsp;  &nbsp;0.55: &quot;rgb(0,255,0)&quot;,​​​​​​​ <br />&nbsp;  &nbsp;​​​​​​​ &nbsp;  &nbsp;0.85: &quot;yellow&quot;,​​​​​​​ <br />&nbsp;  &nbsp;​​​​​​​ &nbsp;  &nbsp;1.0: &quot;rgb(255,0,0)&quot;,​​​​​​​ <br />&nbsp;  &nbsp;},​​​​​​​ <br />&nbsp;  &nbsp;maxOpacity: 1,​​​​​​​ <br />&nbsp;  &nbsp;minOpacity: 0,​​​​​​​ <br />&nbsp;  &nbsp;blur: 0.85,​​​​​​​ <br />&nbsp;  &nbsp;xField: &quot;x&quot;,​​​​​​​ <br />&nbsp;  &nbsp;yField: &quot;y&quot;,​​​​​​​ <br />&nbsp;  &nbsp;valueField: &quot;value&quot;,​​​​​​​ <br />&nbsp;  &nbsp;plugins: {},<br />}</pre> | No | A Heatmap can be customized with the HeatmapConfig. More info on [Heatmap.js configObject](https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-create) |