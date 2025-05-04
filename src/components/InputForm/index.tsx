import { FormEvent, InputHTMLAttributes } from "react";
import {
  inputForm,
  input,
  submitIcon,
  clearIcon,
  iconButton,
} from "./index.css";

interface Props {
  onSubmit: (e: FormEvent) => void;
  onClear?: () => void;
}

const InputForm = ({
  onSubmit,
  className,
  onClear,
  value,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <form className={inputForm} onSubmit={onSubmit}>
      <input
        {...props}
        value={value}
        className={[input, className ?? ""].join("")}
      />
      <button
        className={[
          iconButton,
          clearIcon,
          ((value as string) || "").length > 0 ? "active" : "",
        ].join(" ")}
        type="reset"
        onClick={onClear}
      >
        다시입력
      </button>
      <button className={[iconButton, submitIcon].join(" ")} type="submit">
        검색
      </button>
    </form>
  );
};

export default InputForm;
