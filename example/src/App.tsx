import { useEffect, useState } from "react";
import "./App.css";
import { heatmap as Heatmap } from "@sarpere/heatmapjs-react";
import { value } from "@sarpere/heatmapjs-react/dist/types";
const data = [
  { x: 10, y: 15, value: 5 },
  { x: 50, y: 50, value: 2 },
];
function App() {
  const [data, setData] = useState<value[]>([]);
  const randFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const setRandomData = () => {
    let data = [];
    let dotsCount = randFromInterval(2, 30);
    for (let i = 0; i < dotsCount; i++) {
      let x = randFromInterval(1, 100);
      let y = randFromInterval(1, 100);
      let value = randFromInterval(1, 5);
      data.push({ x: x, y: y, value: value });
    }
    setData(data);
  };
  useEffect(() => {
    setRandomData();
  }, []);

  return (
    <div style={{ width: 200, height: 200 }}>
      {data && <Heatmap max={5} data={data} />}
      <div style={{ marginTop: 40 }}>
        <button onClick={setRandomData}>Randomize data</button>
      </div>
    </div>
  );
}

export default App;
