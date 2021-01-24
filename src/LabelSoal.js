const LabelSoal = (props) => {
  return (
    <div>
      <label htmlFor="">
        {props.labelId} {". "} {props.labelName}
      </label>
    </div>
  );
};

export default LabelSoal;
