import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews !== null) {
      return JSON.parse(storedReviews);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          total={totalFeedback}
          reviews={reviews}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
