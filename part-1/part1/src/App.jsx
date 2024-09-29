import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {good && bad ? (good - bad) / all : 0}</p>
      <p>positive {good ? (good / all) * 100 : 0} %</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  return (
    <div>
      <h2>Give feedback</h2>
      <Button
        onClick={() => {
          setGood(good + 1);
          setAll(all + 1);
        }}
        text="good"
      />
      <Button
        onClick={() => {
          setNeutral(neutral + 1);
          setAll(all + 1);
        }}
        text="neutral"
      />
      <Button
        onClick={() => {
          setBad(bad + 1);
          setAll(all + 1);
        }}
        text="bad"
      />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
