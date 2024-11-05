import { FC, ReactNode } from "react";

export interface FormProps {
  /** label */
  name?: string;
  /** label */
  children?: ReactNode;
}

export const Form: FC<FormProps> = (props) => {
  const { name, children } = props;
  return (
    <form name={name} className="viking-form">
      {children}
    </form>
  );
};

export default Form;
