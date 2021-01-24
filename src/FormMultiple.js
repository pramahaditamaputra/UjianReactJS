import InputJawaban from "./InputJawaban";
import LabelSoal from "./LabelSoal";

const FormMultiple = (props) => {
  return (
    <div>
      <form action="">
        {props.soalCollection.map((soal, index) => {
          return (
            <div className="form-group mb-4" key={soal.id}>
              <LabelSoal
                key={soal.soal}
                labelNumber={index + 1}
                labelName={soal.soal}
              />
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
        <input
          type="submit"
          className="btn btn-sm btn-primary"
          value="Kirim Jawaban"
        />
      </form>
    </div>
  );
};

export default FormMultiple;
