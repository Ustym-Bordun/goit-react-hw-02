import clsx from "clsx";

import css from "./Feedback.module.css";

const Feedback = ({
  feedbacks: { good, neutral, bad },
  positiveFeedbackPercentage,
}) => {
  return (
    <div className={css.wrapper}>
      <p className={css.heading}>Feedback</p>
      <ul className={css.list}>
        <li>
          <p className={css.text}>Good: {good}</p>
        </li>
        <li>
          <p className={css.text}>Neutral: {neutral}</p>
        </li>
        <li>
          <p className={css.text}>Bad: {bad}</p>
        </li>
      </ul>
      <p className={clsx(css.text, css.center)}>
        Positive feedback: {positiveFeedbackPercentage}%
      </p>
    </div>
  );
};

export default Feedback;
