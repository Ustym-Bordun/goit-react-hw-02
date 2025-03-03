import clsx from "clsx";

import css from "./Options.module.css";

const Options = ({ onChangeFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.heading}>Options</p>
      <div className={css.btnsWrapper}>
        <button
          className={css.btn}
          onClick={() => {
            onChangeFeedback("good");
          }}
        >
          Good
        </button>
        <button
          className={css.btn}
          onClick={() => {
            onChangeFeedback("neutral");
          }}
        >
          Neutral
        </button>
        <button
          className={css.btn}
          onClick={() => {
            onChangeFeedback("bad");
          }}
        >
          Bad
        </button>

        {totalFeedback !== 0 && (
          <button
            className={clsx(css.btn, css.reset)}
            onClick={() => {
              onResetFeedback();
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Options;
