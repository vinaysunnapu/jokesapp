import { useState, useEffect } from "react";
import Jokes from "../Jokes";

import "./index.css";

const Home = () => {
  const url =
    "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10";

  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await fetch(url);
    const jokesData = await response.json();
    console.log(jokesData.jokes);
    setData(jokesData.jokes);
  }, []);

  return (
    <div>
      <table border="1" cellSpacing="0" cellPadding="10">
        <th>category</th>
        <th>type</th>
        <th>language</th>
        <th>type</th>
        <th>joke</th>
        {data.map((each) => (
          <Jokes key={each.id} jokes={each} />
        ))}
      </table>
    </div>
  );
};
export default Home;
