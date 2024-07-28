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
      <Part part={props.part1} exersice={props.exersices1} />
      <Part part={props.part2} exersice={props.exercises2} />
      <Part part={props.part3} exersice={props.exercises3} />
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
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0].name}
        exersices1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total
        exersice1={parts[0].exercises}
        exersice2={parts[1].exercises}
        exersice3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
