import moment from "moment";
import { useId, useState } from "react";
import { useSnapshot } from "valtio";
import { results } from "../states/results";

const Form = () => {
  const id = useId();

  const snapResults = useSnapshot(results);

  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  // Function: prefix numbers by 0 if less then 10
  function prefixZero(number) {
    return number < 10 ? '0' + number : number;
  }

  // Function: update state whenever input's value changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  }

  // Function: Get form data and calculate age when submitting the form
  function handleClick(e) {
    e.preventDefault();

    const today = new Date();

    const birthDateData = `${formData.year}-${formData.month}-${formData.day}`;
    const birthDate = new Date(birthDateData);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for nigative days (if today is less then birth day)
    if (days < 0) {
      months--;

      // Add to days last day in the last month
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Adjust for nigative months (if current month is less then birth month)
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Update data in results file
    results.years = prefixZero(years);
    results.months = prefixZero(months);
    results.days = prefixZero(days);
  }

  return (
    <form action="" className="form">
      <div className="fields-wrapper flex gap-7 pb-10">
        <div className="input-wrapper">
          <label htmlFor={`${id}-day`} className="label">
            Day
          </label>
          <input
            type="number"
            id={`${id}-day`}
            name="day"
            placeholder="DD"
            className="input"
            value={formData.day}
            onChange={handleChange}
          />
          <small className="error"></small>
        </div>

        <div className="input-wrapper">
          <label htmlFor={`${id}-month`} className="label">
            Month
          </label>
          <input
            type="number"
            id={`${id}-month`}
            name="month"
            placeholder="MM"
            className="input"
            value={formData.month}
            onChange={handleChange}
          />
          <small className="error"></small>
        </div>

        <div className="input-wrapper">
          <label htmlFor={`${id}-year`} className="label">
            Year
          </label>
          <input
            type="number"
            id={`${id}-year`}
            name="year"
            placeholder="YYYY"
            className="input"
            value={formData.year}
            onChange={handleChange}
          />
          <small className="error"></small>
        </div>
      </div>
      <div className="border-b w-[560px] relative">
        <button
          aria-label="Submit"
          className="w-16 h-16 bg-primary-purple flex justify-center items-center rounded-full absolute top-1/2 right-0 -translate-y-1/2 transition ease-linear delay-75 hover:bg-neutral-off-black"
          onClick={handleClick}
        >
          <img src="/icon-arrow.svg" alt="Submit" className="w-7" />
        </button>
      </div>
    </form>
  );
};

export default Form;
