import React from 'react';

function Card (props) {
    
    return(
    
    <div className="card">
            <div className="card-content">
                <h2 className="title">
                    
                    { 
                        (props.isAnswerDisplayed === false) &&
                            props.question
                    }
                    { 
                        (props.isAnswerDisplayed === true) &&
                            props.answer    
                    }
                </h2>
            </div>
            
            <br></br>
            
        <div className="card-footer">
            <p className="card-footer-item">  
                <button onClick={props.showAnswer} className="button is-dark is-fullwidth">
                    Answer
                </button>
            </p>
            
            <p className="card-footer-item">  
                <button onClick = {props.nextQuestion} className="button is-light is-fullwidth">
                    Next Question
                </button>
            </p>
        </div>
        
        <br></br>
        <progress class="progress is-warning" value="65" max="100">65%</progress>

    </div>
    )   
}

export default Card