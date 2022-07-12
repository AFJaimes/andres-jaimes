import { FunctionComponent } from "react";
import css from "./Pointer.module.scss";

type PointerProps = {
  text: string;
};

const Pointer: FunctionComponent<PointerProps> = ({ text }) => {
  return <span className={css.root}>{text}</span>;
};

export default Pointer;
