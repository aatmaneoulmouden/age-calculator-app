import { useId } from "react";

const Form = () => {
  const id = useId();

  return (
    <form action="" className="form">
      <div className="fields-wrapper flex gap-7 pb-10">
        <div className="input-wrapper">
          <label
            htmlFor={`${id}-day`}
            className="label"
          >
            Day
          </label>
          <input
            type="text"
            id={`${id}-day`}
            name="day"
            placeholder="DD"
            className="input"
          />
          <small className="error"></small>
        </div>

        <div className="input-wrapper">
          <label
            htmlFor={`${id}-month`}
            className="label"
          >
            Month
          </label>
          <input
            type="text"
            id={`${id}-month`}
            name="month"
            placeholder="MM"
            className="input"
          />
          <small className="error"></small>
        </div>

        <div className="input-wrapper">
          <label
            htmlFor={`${id}-year`}
            className="label"
          >
            Year
          </label>
          <input
            type="text"
            id={`${id}-year`}
            name="year"
            placeholder="YYYY"
            className="input"
          />
          <small className="error"></small>
        </div>
      </div>
      <div className="border-b w-[560px] relative">
        <button
          aria-label="Submit"
          className="w-16 h-16 bg-primary-purple flex justify-center items-center rounded-full absolute top-1/2 right-0 -translate-y-1/2 transition ease-linear delay-75 hover:bg-neutral-off-black"
        >
          <img src="/icon-arrow.svg" alt="Submit" className="w-7" />
        </button>
      </div>
    </form>
  );
};

export default Form;
