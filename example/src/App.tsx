import { useEffect, useState } from "react";
import "./App.css";
import { Heatmap, MapValue } from "@sarpere/heatmapjs-react";

function App() {
  const [data, setData] = useState<MapValue[]>([]);
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
