import './App.css';
import Question from './Question.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Question question="How to do matrices operation in python" description="I am trying to implement a math project into python, I want to make a program that do all the calculations for me, which invole matrices operations." tag="python" user="Louis" date="20/10/2023" />
        <Question question="How to sort an array in js" description="I want the fastest way to sort a big array in js" tag="javascript" user="Paul" date="20/10/2023" />
        <Question question="Error when trying to connect to database" description="I am trying to connect to my database but I get an error" tag="sql" user="Louis" date="20/10/2023" />
      </header>
    </div>
  );
}

export default App;
