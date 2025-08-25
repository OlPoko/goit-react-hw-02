export default function Options({
  onLeaveFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
      {totalFeedback !== 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}
