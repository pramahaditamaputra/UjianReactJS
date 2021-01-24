const InputJawaban = (props) => {
  return (
    <div>
      <input
        type={props.optionType}
        name={props.id}
        defaultValue={props.optionName}
        defaultChecked={props.optionName === props.optionAnwer ? true : false}
      />{" "}
      {props.optionName}
    </div>
  );
};

export default InputJawaban;
