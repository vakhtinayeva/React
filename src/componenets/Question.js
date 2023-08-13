import Answer from './Answer'

export default function Question(props) {

    const answers = props.options.map(option => {
        return (
            <Answer 
                key={option.id} 
                id={option.id}
                question={props.id}
                value={option.value} 
                onClick={props.onClick}
                isCorrect={option.isCorrect}
                isChosen={option.isChosen}
                isChecked={props.isChecked}
            />
        )
    })

    return (
        <div>
            <h2 className="question">{props.question}</h2>
            <div className="options-container">
                {answers}
            </div>
        </div>
    )
}