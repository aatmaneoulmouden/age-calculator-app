const Input = (props) => {
  return (
    <div className="input-wrapper w-32">
      <label htmlFor={props.id} className="label block text-[12px] uppercase text-neutral-smokey-grey font-semibold tracking-[2px] mb-1">
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className="input w-full outline-none border border-neutral-light-grey rounded-md p-4 text-2xl font-bold text-neutral-off-black placeholder:text-neutral-smokey-grey/70 cursor-pointer transition ease-linear delay-75 hover:placeholder:text-neutral-smokey-grey/90 focus:border-primary-purple"
      />
      <small className="error"></small>
    </div>
  );
};

export default Input;
