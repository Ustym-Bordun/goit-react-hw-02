import { useEffect, useState } from "react";

import Section from "./components/Section/Section";
import Container from "./components/Container/Container";

import Options from "./components/Options/Options";
import Descriptions from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");

    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevfeedbacks) => ({
      ...prevfeedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <>
      <Section>
        <Container>
          <Descriptions />

          <Options
            onChangeFeedback={updateFeedback}
            onResetFeedback={resetFeedback}
            totalFeedback={totalFeedback}
          />

          {totalFeedback === 0 ? (
            <Notification />
          ) : (
            <Feedback
              feedbacks={feedbacks}
              positiveFeedbackPercentage={positiveFeedback}
            />
          )}
        </Container>
      </Section>
    </>
  );
}

export default App;
