import './App.css';
import { useState } from 'react';


const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Tokyo", "Paris", "Quebec"],
    answer: "Paris"
  }, 
  {
    question: "What's 13 squared",
    choices: ["130", "143", "169", "213"],
    answer: "169"
  },
  {
    question: "Which of the following car brands is Japanese?",
    choices: ["Kia", "Toyota", "Hyundai", "Audi"],
    answer: "Toyota"
  },

  {
    question: "What planet is closest to the sun?",
    choices: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
},
{
    question: "Who painted the Mona Lisa?",
    choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Caravaggio"],
    answer: "Leonardo da Vinci"
},
{
    question: "What is the chemical symbol for gold?",
    choices: ["Go", "Gd", "Ag", "Au"],
    answer: "Au"
},
{
    question: "How many sides does a hexagon have?",
    choices: ["5", "6", "7", "8"],
    answer: "6"
},
{
    question: "Which country hosted the 2016 Summer Olympics?",
    choices: ["China", "UK", "Brazil", "Australia"],
    answer: "Brazil"
},
{
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific"
},
{
    question: "Which programming language was created by Guido van Rossum?",
    choices: ["Java", "Python", "Ruby", "C++"],
    answer: "Python"
},
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  function handleAnswer(choice) {
    if (questions[currentQuestion].answer === choice) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }


  return (

    <div className="App">
    { showResults ? (
       <div>
        <h1>Results</h1>
        <p>You scored {score} out of {questions.length}</p>
        <button onClick={() => {
          setScore(0);
          setCurrentQuestion(0);
          setShowResults(false);
        }}>Play Again</button>
      </div>
    ) :
    (
    <div>
    <h1>{questions[currentQuestion].question}</h1>
    {questions[currentQuestion].choices.map( (choice) => (
        <button onClick={() => handleAnswer(choice)}>
        {choice}
        </button>
    ))}
    </div>
    )
    }
  
    </div>
  );
}

export default App;
