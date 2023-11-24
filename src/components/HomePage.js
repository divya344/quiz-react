
import { useContext } from "react"
import { myBasket } from "../App"

export function HomePage() 
{
    // setData = setCurrentData
    const { setData } = useContext(myBasket)

    function handleClick()
    {
       //Logic to navigate to question component
       setData("question")
    }

  return (
    <div 
    
    style={{
      width: "15em",
      
      padding: 2,
      borderRadius: 10,
      marginBlock: 10,
      center:20,
      top:500,

    }}
  >

      
      <button className="btn btn-primary" onClick={handleClick}>Start Quiz</button>
    </div>
  )
}


