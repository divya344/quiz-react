import { useContext } from "react"
import { myBasket } from "../App"

export function Result() 
{
    const { score } = useContext(myBasket)

    return (
      <div>
         <h2>Your total score out of 3 is {score}</h2>
      </div>
    )
  }