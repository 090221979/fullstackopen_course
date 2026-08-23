// 1.11*: unicafe step 6
// Display the statistics in an HTML table
//1.14*: anecdotes step 3
// Now implement the final version of the application that displays the anecdote with the largest number of votes

import React, { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.statistic}</td>
      <td>{props.percent}</td>
    </tr>
  );
};

const Statistics = ({
  positive,
  nuetral,
  negative,
  totalNumber_of_Votes,
  positivePercentage,
  averageVotes,
  percent,
}) => {
  return (
    <div>
      <h2 style={{ fontFamily: 'tahoma', textAlign: 'center' }}>Statistics</h2>
      <table
        style={{ background: 'silver', width: '30vw', margin: '5px auto' }}
      >    
        <tbody>
          <StatisticsLine name="Positive:" statistic={positive} />
          <StatisticsLine name="Neutral:" statistic={nuetral} />
          <StatisticsLine name="Negative" statistic={negative} />
          <StatisticsLine
            name="All:"
            statistic={totalNumber_of_Votes}
            percent={percent}
          />
          <StatisticsLine
            name="Positive:"
            statistic={positivePercentage}
            percent={percent}
          />
          <StatisticsLine
            name="Average:"
            statistic={averageVotes}
            percent={percent}
          />
        </tbody>
      </table>
    </div>
  );
};

export default function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [nuetral, setNuetral] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));


  const positiveFeedback = () => setPositive(positive + 1);
  const negativeFeedback = () => setNegative(negative + 1);
  const nuetralFeedback = () => setNuetral(nuetral + 1);

  const totalNumber_of_Votes = positive + negative + nuetral;
  const positivePercentage =
    totalNumber_of_Votes === 0
      ? 0
      : ((positive / totalNumber_of_Votes) * 100).toFixed(2);
  const voteTotals = positive * 1 + nuetral * 0 + negative * -1;
  const averageVotes =
    totalNumber_of_Votes === 0
      ? 0
      : (voteTotals / totalNumber_of_Votes).toFixed(2);
  const chosenAnecDote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));
  
  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  };
  const percent = '%';
  const voteTally = votes[selected]
  console.log(votes)
  const highestAnecDoteVote = votes.indexOf(Math.max(...votes))
  const highestAnecDote = anecdotes[highestAnecDoteVote]
  const WinningAnecdote = Math.max(...votes)
  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <Button onClick={positiveFeedback} text="positive Vote" />
        <Button onClick={negativeFeedback} text="negative Vote" />
        <Button onClick={nuetralFeedback} text="nuetral Vote" />
      </div>
      {totalNumber_of_Votes > 0 && (
        <Statistics
          positive={positive}
          nuetral={nuetral}
          negative={negative}
          totalNumber_of_Votes={totalNumber_of_Votes}
          positivePercentage={positivePercentage}
          averageVotes={averageVotes}
          percent={percent}
        />
      )}
      <p>{anecdotes[selected]}</p>
      <Button onClick={chosenAnecDote} text="Random Anecdote" />
      <Button onClick={voteForAnecdote} text="Vote" />
      <span>Votes:{voteTally}</span>
      <div>
        <h3 style={{margin:'5px 0'}}>Highest Voted Anecdote</h3>
        <div>{highestAnecDote}</div>
        <span>Vote Count: {WinningAnecdote}</span>
      </div>
    </div>
  );
}
