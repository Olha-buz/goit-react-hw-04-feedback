import React, { useState } from 'react';
import Section from './Section/Section.jsx';
import FeedbackOptions from './FeedbackOptions/feedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

    const handleFeedback = optionKey => {
      setFeedback(state => ({
        ...state,
        [optionKey]: state[optionKey] + 1,
      }));
  };
  
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    return ((good / countTotalFeedback()) * 100).toFixed(1);
  };

    
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        margin: 'auto'
      }}
    >
      <Section title='Please leave feedback'>
       <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title='Statistics'>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
        ) : (
            <Notification message='There is no feedback' />
        )}
      </Section>

    </div>
    )

}

export default App;



