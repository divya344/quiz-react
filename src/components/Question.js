
import { useState, useContext } from "react"
import { myBasket } from "../App"

const myQuestions = [
    {
        title: "What is the use of useState()?",
        A: "To store the data",
        B: "To not store the data",
        C: "Both A and B",
        D: "None of the above",
        Answer: "A"
    },
    {
        title: "What is 10 + 20?",
        A: 100,
        B: 130,
        C: 30,
        D: 70,
        Answer: "C"
    },
    {
        title: "What is React?",
        A: "It is a library",
        B: "It is framework",
        C: "Both A and B",
        D: "None of the above",
        Answer: "A"
    }
]

export function Question() 
{
    const [currentQuestion, setCurrentQuestion] = useState(0)
    // currentQuestion = 0

    const [correctAnswer, setAnswer] = useState("")
    // answer = "A"

    // setData = setCuurentData
    const { setData, score, setScore } = useContext(myBasket)

    function goToNextQuestion()
    {
        // Logic to check the answer for that question
        if(myQuestions[currentQuestion].Answer == correctAnswer)
        {
            setScore(score + 1)
        }

        // Logic to go to next question
        setCurrentQuestion(currentQuestion + 1)
    }

    function goToResultsPage()
    {
        //Logic to check the answer for the last question
        if(myQuestions[currentQuestion].Answer == correctAnswer)
        {
            setScore(score + 1)
        }

        // Logic to go to results page
       setData("result")
    }

    return (
      <div style={{marginTop: "250px", marginLeft: "500px"}}>
        <div>
            <h3>Q: {myQuestions[currentQuestion].title}</h3>

            <div style={{display: "flex", alignItems: "center"}}>
                
                <button onClick={function()
                {
                   setAnswer("A")
                }} className="btn btn-success">{myQuestions[currentQuestion].A}</button>
            </div>
            
            <div style={{display: "flex", alignItems: "center"}}>
              
                <button onClick={function()
                {
                   setAnswer("B")
                }} className="btn btn-success">{myQuestions[currentQuestion].B}</button>
            </div>
            
            <div style={{display: "flex", alignItems: "center"}}>
              
                <button onClick={function()
                {
                    setAnswer("C")
                }} className="btn btn-success">{myQuestions[currentQuestion].C}</button>
            </div>
            
            <div>
               
                <button onClick={function()
                {
                    setAnswer("D")
                }} className="btn btn-success">{myQuestions[currentQuestion].D}</button>
            </div>

            {/* This continue button should not be displayed always, whenever
            we react displaying the last question, then instead of Continue button
            we need to display Submit button
            */}
            { currentQuestion == myQuestions.length - 1 
            ? 
            <button className="btn btn-danger" onClick={goToResultsPage}>Submit</button> 
            :
             <button className="btn btn-primary" onClick={goToNextQuestion}>Continue</button> }
            
        </div>
      </div>
    )
  }