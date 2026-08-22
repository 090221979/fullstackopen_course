// 1.8: unicafe step 3
// Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

//1.9: unicafe step 4
// Change your application to display statistics only once feedback has been gathered.

// 1.10: unicafe step 5
// StatisticLine for displaying a single statistic, e.g. the average score.

import React,{useState} from 'react'

const Button = ({onClick,text})=><button onClick={onClick}>{text}</button>

const StatisticsLine = (props)=>
  {
    return <p>{props.name} {props.statistic} {props.percent}</p>
  }

const Statistics = ({positive,nuetral,negative,totalNumber_of_Votes,positivePercentage,averageVotes,percent})=>
  {
    return(
      <div>
      <h2>Statistics</h2>
      <div>
      <StatisticsLine name='Positive' statistic={positive}/>
      <StatisticsLine name='Neutral' statistic={nuetral}/>
      <StatisticsLine name='Negative' statistic={negative}/>
      <StatisticsLine name='Total Number of Votes' statistic={totalNumber_of_Votes} percent={percent}/>
      <StatisticsLine name='Positive Percentage' statistic={positivePercentage} percent={percent}/>
      <StatisticsLine name='The Average number of Votes' statistic={averageVotes} percent={percent}/>

      </div>
      </div>
    )
  }

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
  const percent = '%'
  
  return(
    <div>
      <h2>Give Feedback</h2>
      <div>
        <Button onClick={positiveFeedback} text='positive Vote'/>
        <Button onClick={negativeFeedback} text='negative Vote'/>
        <Button onClick={nuetralFeedback} text='nuetral Vote'/>
      </div>
      {totalNumber_of_Votes > 0 && <Statistics positive={positive} nuetral={nuetral} negative={negative} totalNumber_of_Votes={totalNumber_of_Votes} positivePercentage={positivePercentage} averageVotes={averageVotes} percent={percent}/>}
    </div>
  )
}
