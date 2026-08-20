// Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

// The application must display the total number of collected feedback for each category.
import React,{useState} from 'react'

const Button = ({onClick,text})=><button onClick={onClick}>{text}</button>

export default function App()
{
  const[positive, setPositive] = useState(0)
  const[negative, setNegative] = useState(0)
  const[nuetral,setNuetral] = useState(0)

  const positiveFeedback = ()=> setPositive(positive+1)
  const negativeFeedback = ()=> setNegative(negative+1)
  const nuetralFeedback = ()=> setNuetral(nuetral+1)

  const totalNumber_of_Votes = positive + negative + nuetral
  const positivePercentage = totalNumber_of_Votes === 0 ? 0 : (positive/totalNumber_of_Votes) * 100
  const voteTotals = (positive * 1) + (nuetral * 0) + (negative * -1)
  const averageVotes = totalNumber_of_Votes === 0 ? 0 : voteTotals/totalNumber_of_Votes
  
  return(
    <div>
      <h2>Give Feedback</h2>
      <div>
        <Button onClick={positiveFeedback} text='positive Vote'/>
        <Button onClick={negativeFeedback} text='negative Vote'/>
        <Button onClick={nuetralFeedback} text='nuetral Vote'/>
      </div>
      <h2>Statistics</h2>
      <div>
      <p>Good: {positive}</p>
      <p>Nuetral: {nuetral}</p>
      <p>Negative: {negative}</p>
      <p>Total Number of Votes: {totalNumber_of_Votes}</p>
      <p>Positive Percentage: {positivePercentage}%</p>
      <p>The Average number of Votes: {averageVotes}%</p>
      </div>
    </div>
  )
}
