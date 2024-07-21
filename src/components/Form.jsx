import { useId } from "react";
import Input from "./Input";

const Form = () => {
  const formId = useId();

  const inputs = [
    {
      id: "day",
      name: "day",
      label: "Day",
      placeholder: "DD",
    },
    {
      id: "month",
      name: "month",
      label: "Month",
      placeholder: "MM",
    },
    {
      id: "year",
      name: "year",
      label: "Year",
      placeholder: "YYYY",
    },
  ];

  const displayInputs = inputs.map((input) => (
    <Input
      key={input.id}
      id={`${formId}-${input.id}`}
      name={input.name}
      label={input.label}
      placeholder={input.placeholder}
    />
  ));
  return (
    <form action="" className="form">
      <div className="fields-wrapper flex gap-7">{displayInputs}</div>
    </form>
  );
};

export default Form;
