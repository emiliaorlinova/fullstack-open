const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} - {props.exersice}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exersice={props.exersice1} />
      <Part part={props.part2} exersice={props.exersice2} />
      <Part part={props.part3} exersice={props.exersice3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises: {props.exersice1 + props.exersice2 + props.exersice3}
    </p>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exersice1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total
        exersice1={exercises1}
        exersice2={exercises2}
        exersice3={exercises3}
      />
    </div>
  );
};

export default App;
