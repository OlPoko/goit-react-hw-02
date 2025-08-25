import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
// import ClickTracker from "./components/ClickTracker/ClickTacker";
// import Sidebar from "./components/SideBar/Sidebar";

export default function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const openSidebar = () => setIsOpen(true);
  // const closeSidebar = () => setIsOpen(false);

  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setCount((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const totalFeedback = count.good + count.neutral + count.bad;

  const resetFeedback = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  return (
    <>
      {/* <button onClick={openSidebar}>Open</button>
      {isOpen && <Sidebar onClose={closeSidebar} />}
      <ClickTracker /> */}
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedback={count}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
