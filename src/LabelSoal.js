const LabelSoal = (props) => {
  return (
    <div>
      <label htmlFor="">
        {props.labelNumber} {". "} {props.labelName}
      </label>
    </div>
  );
};

export default LabelSoal;
