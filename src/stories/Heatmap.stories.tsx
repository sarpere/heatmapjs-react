import { Heatmap } from "./Heatmap";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/Heatmap",
  component: Heatmap,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Heatmap>;

const Template: ComponentStory<typeof Heatmap> = (args) => (
  <div style={{ width: 200, height: 200 }}>
    <Heatmap {...args} />
  </div>
);

const maxValue = 5;
const randFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const setRandomData = () => {
  let data = [];
  let dotsCount = randFromInterval(2, 30);
  for (let i = 0; i < dotsCount; i++) {
    let x = randFromInterval(1, 100);
    let y = randFromInterval(1, 100);
    let value = randFromInterval(1, maxValue);
    data.push({ x: x, y: y, value: value });
  }
  return data;
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  data: setRandomData(),
  max: maxValue,
};



const Template2: ComponentStory<typeof Heatmap> = (args) => (
  <div style={{ width: 200, height: 'auto', position: "relative" }}>
    <img width="100%" height="100%" src="/stadium.jpeg" alt="Stadium" />
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      <Heatmap  {...args} />
    </div>
  </div>
);

export const OverlayPhoto = Template2.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OverlayPhoto.args = {
  data: setRandomData(),
  max: maxValue,
};