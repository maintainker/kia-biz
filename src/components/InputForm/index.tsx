import { FormEvent, InputHTMLAttributes, useRef } from "react";
import {
  inputForm,
  input,
  submitIcon,
  clearIcon,
  iconButton,
} from "./index.css";

interface Props {
  onSearchSubmit: (e: FormEvent, value?: string) => void;
  onClear?: () => void;
}

const InputForm = ({
  onSearchSubmit,
  className,
  onClear,
  value,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    onSearchSubmit?.(e, inputRef.current?.value);
  };
  return (
    <form className={inputForm} onSubmit={handleSubmit}>
      <input
        {...props}
        value={value}
        ref={inputRef}
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
