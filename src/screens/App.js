import React from 'react';
import '../assets/App.css';
import Navbar from'../components/Navbar';
import Card from'../components/Card';

class App extends React.Component {
    
    constructor(props) {
         super(props)
        
         this.state = {
            isAnswerDisplayed: false,
            currentQuestion: 0,
            
            questions: [
                "What is a Repository?",
                "What are the 5 main steps to the Systems Development Life Cycle (SDLC)?",
                "What is an Enterprise Tier?",
                "What does DBMS stand for?",
                "What are the key characteristics of Big Data?",
                "What is a Relationship Instance?",
                "What are the good Business Rules?",
                "What is an Identifier Key?",
                "What is an Associative Entity?",
                "What are the 3 types of Relationships?"
            ],
             answers: [
                 "A centralized storehouse of metadata.",
                 "Planning, Analysis, Design, Implementation and Maintenance.", 
                 "Transaction databases containing all organizational data/summaries of data on department servers.", 
                 "Database Management System.", 
                 "Volume, Value, Veracity, Variety and Velocity.",
                 "A link between entities that corresponds to a primary or foreign key.",
                 "Declarative, Precise, Atomic, Consistent, Expressible, Distinct and Business Oriented.",
                 "An attribute that uniquely identifies individual instances of an entity type.",
                 "A combination of relationship and entity.",
                 "Unary, Binary and Ternary Relationships."
             ]
         }
    }
    
    nextQuestion = (event) => {
        let questionIndex = this.state.currentQuestion + 1
        
        
        if (questionIndex >= this.state.questions.length) {
            questionIndex = 0;
            
        }
    
        
        this.setState({
            currentQuestion: questionIndex,
            isAnswerDisplayed: false
        })
        
    }
    
    showAnswer = (event) => {
        let answerIsDisplayed = this.state.isAnswerDisplayed
        
        for (let i=0; i < this.state.questions.length; i++) {
            console.log(this.state.questions[i]);
        }
        
        if (answerIsDisplayed === false) {
            this.setState({
                isAnswerDisplayed: true
            })
        }
        else {
            this.setState({
                isAnswerDisplayed: false
            })
            
        }
    }
    
    
    render() {
        
        return (
            
        <React.Fragment>
                
             <Navbar />
            
            <div className="container">
                <section className="section">
                    <Card nextQuestion = {this.nextQuestion}
                    showAnswer = {this.showAnswer}
                    isAnswerDisplayed = {this.state.isAnswerDisplayed}
                    answer = {this.state.answers[this.state.currentQuestion]}
                    question = {this.state.questions[this.state.currentQuestion]}
                    showProgress = {this.state.showProgress}/>
                </section>
                
                
            </div>
        </React.Fragment>
        
        )
        
    }
    
}

export default App;
