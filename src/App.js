import './App.css';
import { HomePage } from './components/HomePage';
import {useState, createContext} from "react"
import { Question } from './components/Question';
import { Result } from './components/Result';

export const myBasket = createContext()


function App() 
{
  const [currentData, setCurrentData] = useState("homepage")
  // currentData = "question"

  const [myScore, setMyScore] = useState(0)

  return (
    <div>
      <myBasket.Provider value={ {setData: setCurrentData, score: myScore, setScore: setMyScore} }>
        { currentData == "homepage" && <HomePage/> }
        { currentData == "question" && <Question/> }
        { currentData == "result" && <Result/> }
      </myBasket.Provider>
    </div>
  );
}

export default App;
