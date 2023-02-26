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

### <img src="/docs/storybook.png" alt="@sarpere/heatmapjs-react storybook" height="18px" /> Storybook

```bash
yarn storybook
```

Then open [`localhost:8000`](http://localhost:6006/) in a browser.

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

| Prop | Type   | Default | Required | Description                                                                                                                     |
| ---- | ------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| max  | int    | 5       | No       | Maximum value for intensity                                                                                                     |
| data | array  | []      | No       | Heatmap array of dots                                                                                                           |
| unit | string | percent | No       | Can be either `percent` or `pixels`. If percent, a `x` value like `26` is considered **26% of the container from the top left** |
