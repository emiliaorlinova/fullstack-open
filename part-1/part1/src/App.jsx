import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine
        text="average"
        value={good && bad ? (good - bad) / all : 0}
      />
      <StatisticLine text="positive" value={good ? (good / all) * 100 : 0} />
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
      <h2>Statistics</h2>
      {good || neutral || bad ? (
        <table>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} />
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
