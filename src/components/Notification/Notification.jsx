import css from "./Notification.module.css";

const Notification = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.heading}>No feedback yet</p>
    </div>
  );
};

export default Notification;
