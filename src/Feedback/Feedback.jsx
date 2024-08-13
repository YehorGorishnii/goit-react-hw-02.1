export default function Feedback({ reviews, total, positive}) {
  return (
    <ul>
      <li>
        <p>Good :{reviews.good}</p>
      </li>
      <li>
        <p>Neutral :{reviews.neutral}</p>
      </li>
      <li>
        <p>Bad : {reviews.bad}</p>
      </li>
      <li>
        <p>Total : {total}</p>
      </li>
      <li>
        <p>Positive: {positive}%</p>
      </li>
    </ul>
  );
}
