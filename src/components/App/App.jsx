import { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Section from '../Section/Section';
import OptionsFeedBack from '../OptionsFeedback/OptionsFeedback';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const total = countTotalFeedback();
  const countPositiveFeedback = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const addFeedback = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const options = ['good', 'neutral', 'bad'];
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <OptionsFeedBack
          options={options}
          clickFeedback={addFeedback}
        ></OptionsFeedBack>
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedback()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Wrapper>
  );
}
