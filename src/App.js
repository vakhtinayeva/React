import React from 'react';
import Question from "./componenets/Question";
import Setup from "./componenets/Setup";
import { nanoid } from 'nanoid';
import decode from 'html-entities-decoder';

function App() {
  const [questions, setQuestions] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [score, setScore] = React.useState(0);
  const [start, setStart] = React.useState(true);
  const [URL, setURL] = React.useState('');

  React.useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results.map(obj => {
          return {
            id: nanoid(),
            question: decode(obj.question),
            answers: formAnswers(obj.correct_answer, obj.incorrect_answers)
          }
        }))
      })
  }, [URL])


  function formAnswers(correct_answer, incorrect_answers) {
    const index = Math.floor(Math.random() * (1 + incorrect_answers.length));
    incorrect_answers.splice(index, 0, correct_answer);
    const answers = [];
    
    for (let i = 0; i < incorrect_answers.length; i++ ) {
      answers.push({
        id: i,
        value: decode(incorrect_answers[i]),
        isCorrect: i === index,
        isChosen: false,
        isChecked: false
      })
    }
    return answers;
  }


  function answerQuestion(event, questionId, answerId) {
    setQuestions((oldQuestions) => oldQuestions.map((question) => {
      if (question.id === questionId) {
        const updatedAnswers = updateAnswers(question, answerId);
        return {
          ...question,
          answers: updatedAnswers
        }
      } else {
        return question;
      }
    }))
  }


  function updateAnswers(question, answerId) {
    return question.answers.map(answer => {
      if (answer.id === answerId) {
        return {
          ...answer,
          isChosen: true,
        }
      } else {
        return {
          ...answer,
          isChosen: false,
        }
      }
    })
  }


  function checkResults() {
    let counter = 0;
    const answers = questions.map(question => question.answers);
    answers.forEach((answer) => {
      for (let i = 0; i < answer.length; i++) {
        if (answer[i].isChosen && answer[i].isCorrect) {
          counter++;
        }
      }
    })
    setScore(counter);

    setChecked(true);
  
    setQuestions((oldQuestions) => oldQuestions.map((question) => {
      return {
        ...question,
        isChecked: true
      }    
    }))
  }


  function restart() {
    setStart(true);
    setChecked(false);
  }


  function initialise(event, category, difficulty, type) {
    const link = "https://opentdb.com/api.php?amount=5"
      + `&category=${category}`
      + `&difficulty=${difficulty}`
      + `&type=${type}`;

    setURL(link);
    setStart(false);
  }


  const quizElements = questions.map((question) => (
    <Question
      key={nanoid()}
      id={question.id}
      question={question.question}
      options={question.answers}
      isChecked={question.isChecked}
      onClick={answerQuestion}
    />
  ))


  if (start) {
    return <Setup initialise={initialise}/>
  } else {
    return (
      <main>
        <div className="quiz-container">
          {quizElements}
          {checked && <p className="quiz-score">You scored {score}/5 correct answers</p>}
          {checked 
            ? <button className="quiz-button" onClick={restart}>Play again</button>
            : <button className="quiz-button" onClick={checkResults}>Check answers</button>
          }
        </div>
      </main>
    )
  }
}

export default App;
