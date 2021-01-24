import InputJawaban from "./InputJawaban";
import LabelSoal from "./LabelSoal";

const FormMultiple = (props) => {
  return (
    <div>
      <form action="">
        <div className="form-group">
          <LabelSoal labelName={props.soalPertama.soal} />
          {props.soalPertama.option.map((nameOption) => {
            return (
              <InputJawaban
                key={nameOption}
                id={props.soalPertama.id}
                optionType={props.soalPertama.type}
                optionName={nameOption}
                optionAnwer={props.soalPertama.jawaban}
              />
            );
          })}
        </div>
        <div className="form-group">
          <LabelSoal labelName={props.soalKedua.soal} />
          {props.soalKedua.option.map((nameOption, index) => {
            return (
              <InputJawaban
                key={nameOption}
                optionType={props.soalKedua.type}
                optionName={nameOption}
                optionAnwer={props.soalKedua.jawaban[index]}
              />
            );
          })}
        </div>
        <div className="form-group">
          <LabelSoal labelName={props.soalKetiga.soal} />
          {props.soalKetiga.option.map((nameOption) => {
            return (
              <InputJawaban
                key={nameOption}
                optionType={props.soalKetiga.type}
                optionName={nameOption}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default FormMultiple;
