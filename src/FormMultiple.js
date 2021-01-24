import InputJawaban from "./InputJawaban";
import LabelSoal from "./LabelSoal";

const FormMultiple = (props) => {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <LabelSoal labelName={props.soalPertama.soal} />
          {props.soalPertama.option.map((item) => {
            return (
              <InputJawaban
                key={item}
                optionType={props.soalPertama.type}
                optionName={item}
              />
            );
          })}
        </div>
        <div className="form-group">
          <LabelSoal labelName={props.soalKedua.soal} />
          {props.soalKedua.option.map((item) => {
            return (
              <InputJawaban
                key={item}
                optionType={props.soalKedua.type}
                optionName={item}
              />
            );
          })}
        </div>
        <div className="form-group">
          <LabelSoal labelName={props.soalKetiga.soal} />
          {props.soalKetiga.option.map((item) => {
            return (
              <InputJawaban
                key={item}
                optionType={props.soalKetiga.type}
                optionName={item}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default FormMultiple;
