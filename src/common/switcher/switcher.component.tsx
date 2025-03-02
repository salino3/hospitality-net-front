import React from "react";
import ReactSwitch from "react-switch";
import "./switcher.styles.scss";

interface Props {
  first: any;
  second: any;
  currentvalue: any;
  toggle: () => void;
  t: (i: string) => string;
}

export const Switcher: React.FC<Props> = (props) => {
  const { first, second, currentvalue, toggle, t } = props;

  return (
    <section className="switch">
      <label htmlFor="switcher">
        {currentvalue === second ? t(second) : t(first)}
      </label>
      <ReactSwitch
        name="switcher"
        onChange={toggle}
        checked={currentvalue === second}
      />
    </section>
  );
};
