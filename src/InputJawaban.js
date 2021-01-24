const InputJawaban = (props) => {
  return (
    <div>
      <input
        type={props.optionType}
        name={props.id}
        value={props.optionName}
        checked={props.optionName === props.optionAnwer}
      />{" "}
      {props.optionName}
    </div>
  );
};

export default InputJawaban;
