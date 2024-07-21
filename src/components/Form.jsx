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
      <div className="fields-wrapper flex gap-7 pb-10">{displayInputs}</div>
      <div className="border-b w-[560px] relative">
        <button aria-label="Submit" className="w-16 h-16 bg-primary-purple flex justify-center items-center rounded-full absolute top-1/2 right-0 -translate-y-1/2 transition ease-linear delay-75 hover:bg-neutral-off-black">
          <img
            src="/icon-arrow.svg"
            alt="Submit"
            className="w-7"
          />
        </button>
      </div>
    </form>
  );
};

export default Form;
