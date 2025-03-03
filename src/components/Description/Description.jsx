import Heading from "../Heading/Heading";

import css from "./Description.module.css";

const Description = () => {
  return (
    <div className={css.wrapper}>
      <Heading title="Sip Happens Café" tag="h1" bottom />
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
