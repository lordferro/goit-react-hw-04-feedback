import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/';
import { Notification } from './Notification/Notification';
import { Section } from './Section';
import { Statistics } from './Statistics/';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const calcTotal = () => {
    return good + bad + neutral;
  };

  const calcPositivePercentage = () => {
    return Math.round((good * 100) / calcTotal());
  };

  const total = calcTotal();
  const positivePercentage = calcPositivePercentage();
  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      ></FeedbackOptions>
      <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
    </Section>
  );
};
