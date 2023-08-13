import React from "react"
import SelectComponent from "./SelectComponent"

export default function Setup(props) {
    const [category, setCategory] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [type, setType] = React.useState('');


    function handleCategory(event) {
        setCategory(event.value);
    }

    function handleDifficulty(event) {
        setDifficulty(event.value);
    }

    function handleType(event) {
        setType(event.value);
    }


    const categoryOptions = [
        { value: 'any', label: 'Any Category' },
        { value: '9', label: 'General Knowledge' },
        { value: '10', label: 'Entertainment: Books' },
        { value: '11', label: 'Entertainment: Film' },
        { value: '12', label: 'Entertainment: Music' },
        { value: '13', label: 'Entertainment: Musicals and Theatres' },
        { value: '14', label: 'Entertainment: Television' },
        { value: '15', label: 'Entertainment: Video Games' },
        { value: '16', label: 'Entertainment: Board Games' },
        { value: '29', label: 'Entertainment: Comics' },
        { value: '31', label: 'Entertainment: Japanese Anime and Manga' },
        { value: '32', label: 'Entertainment: Cartoon and Animations' },
        { value: '17', label: 'Science: Nature' },
        { value: '18', label: 'Science: Computers' },
        { value: '30', label: 'Science: Gadgets' },
        { value: '19', label: 'Science: Mathematics' },
        { value: '20', label: 'Mythology' },
        { value: '21', label: 'Sports' },
        { value: '22', label: 'Geography' },
        { value: '23', label: 'History' },
        { value: '24', label: 'Politics' },
        { value: '25', label: 'Art' },
        { value: '26', label: 'Celebrities' },
        { value: '27', label: 'Animals' },
        { value: '28', label: 'Vehicles' }
    ];

    const difficultyOptions = [
        { value: 'any', label: 'Any Difficulty' },
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' }
    ];

    const typeOptions = [
        { value: 'any', label: 'Any Type' },
        { value: 'multiple', label: 'Multiple Choice' },
        { value: 'boolean', label: 'True/False' }
    ];   

    return (
        <main className="start-container">
        <h1 className="quiz-title">Quizzical</h1>
        <div className="quiz-select">
            <p>Select category:</p>
            <SelectComponent 
                options={categoryOptions}
                onChange={handleCategory}/>
            <p>Select difficulty:</p>
            <SelectComponent 
                options={difficultyOptions}
                onChange={handleDifficulty}/>
            <p>Select type:</p>
            <SelectComponent
                options={typeOptions}
                onChange={handleType}/>     
        </div>
        <button 
            className="start-quiz-button" 
            onClick={(event) => props.initialise(event, category, difficulty, type)}
        >Start quiz</button>
      </main>
    )
}