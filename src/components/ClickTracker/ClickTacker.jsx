import { useEffect, useState } from "react";

export default function ClickTracker() {
  const [click, setClick] = useState(0);
  const [date, setDate] = useState(Date.now());

  //   useEffect(() => {
  //     console.log("ClickTracker");
  //   }, []);

  useEffect(() => {
    if (click === 0) {
      return;
    }
    console.log("Changed clicks"), click;
  }, [click]);

  //   useEffect(() => {
  //     console.log("Date", date);
  //   }, [date]);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      <button onClick={() => setClick(click + 1)}>Clicks {click}</button>
      <button onClick={() => setClick(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date {date}</button>
    </div>
  );
}
