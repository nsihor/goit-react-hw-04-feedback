import { useLocalStorage } from "hooks/useLocalStorage";

import { FeedbackOptions } from "./leaveFeedback/leaveFeedback";
import { Statistic } from "./statistic/statistic";
import { Section } from "./Section/section";
import { Notification } from "./notification/notification";

export const App = () => {
  const [good, setGood] = useLocalStorage('good', 0);
  const [neutral, setNeutral] = useLocalStorage('neutral', 0);
  const [bad, setBad] = useLocalStorage('bad', 0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
      if (good) {
        const fullNumber = good * 100 / countTotalFeedback();
      
        return parseFloat(fullNumber.toFixed(1));
      } else {
        return 0
      }
  }

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good': 
        setGood((prev) => prev + 1)
        break;
      case 'neutral':
        setNeutral((prev) => prev + 1)
        break;
      case 'bad':
        setBad((prev) => prev + 1)
        break;
      default:
        console.log('Unexpected option');
        break;
    }}

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

  const hasFeedback = countTotalFeedback() > 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback}  options={['good', 'neutral', 'bad']} />
      </Section>
      {hasFeedback ? 
      <Section title="Statistic">
        <Statistic good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage() } handleReset={handleReset}/>
      </Section> : 
      <Section title="">
        <Notification message="There is no feedback" />
      </Section>} 
    </>
  );
  }