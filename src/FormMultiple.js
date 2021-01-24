import InputJawaban from "./InputJawaban";
import LabelSoal from "./LabelSoal";

const FormMultiple = (props) => {
  return (
    <div>
      <form action="">
        {props.soalCollection.map((soal, index) => {
          return (
            <div className="form-group">
              <LabelSoal labelName={soal.soal} />
              {soal.option.map((nameOption, index) => {
                return (
                  <InputJawaban
                    key={nameOption}
                    id={soal.id}
                    optionType={soal.type}
                    optionName={nameOption}
                    optionAnwer={soal.jawaban[index]}
                  />
                );
              })}
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FormMultiple;
