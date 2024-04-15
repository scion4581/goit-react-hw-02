import { useState, useEffect } from "react";
import Description from './description/Description';
import Options from './options/Options';
import Feedback from './feedback/Feedback';
import Notification from './notification/Notification';

function App() {

  const FEEDBACK_LOCAL_STORAGE_KEY = 'feedback';

  const INITIAL_STATE = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  function initState() {
      const savedFeedback = window.localStorage.getItem(FEEDBACK_LOCAL_STORAGE_KEY);

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return INITIAL_STATE;
  }

  const [feedbacks, setFeedbacks] = useState(initState);

  // save feedbacks to the local storage every time it has been updated
  useEffect(() => {
    window.localStorage.setItem(FEEDBACK_LOCAL_STORAGE_KEY, JSON.stringify(feedbacks));
  }, [feedbacks]);

  // update state
  const updateFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      ...{ [feedbackType]: feedbacks[feedbackType] + 1 }
    });
  };

  // bring state to the initial
  const resetFeedback = () => {
    setFeedbacks(INITIAL_STATE);
  }

  // calculate additional feedback stats
  const { good, neutral, bad } = feedbacks;  
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options onReset={resetFeedback} onUpdate={updateFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ? <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
    </>
  )
}

export default App
