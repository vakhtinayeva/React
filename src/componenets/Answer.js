export default function Answer(props) {
    let styles;
    if(props.isChecked && props.isCorrect) {
        styles = {
            backgroundColor: "#94D7A2",
            border: "2px solid #94D7A2"
        }
    } else if(props.isChecked && props.isChosen && !props.isCorrect) {
        styles = {
            backgroundColor: "#F8BCBC",
            border: "2px solid #F8BCBC"
        }
    } else if(!props.isChecked && props.isChosen) {
        styles = {
            backgroundColor: "#D6DBF5"
        }
    } else {
        styles = {
            backgroundColor: "#F5F7FB"
        }
    }

    return (
        <div 
            className="option"
            onClick={(event) => props.onClick(event, props.question, props.id)}
            style={styles}
        >
            {props.value}
        </div>
    )
}