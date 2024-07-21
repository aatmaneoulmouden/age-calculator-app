import Form from "./Form";
import Result from "./Result";

const Calculator = () => {
  return (
    <section className="calculator bg-neutral-white p-9 rounded-xl rounded-ee-[96px] shadow-main">
      <Form />
      <Result />
    </section>
  );
};

export default Calculator;
