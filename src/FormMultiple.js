import InputJawaban from "./InputJawaban";
import LabelSoal from "./LabelSoal";

const FormMultiple = (props) => {
  return (
    <div>
      <form action="">
        {props.soalCollection.map((soal) => {
          return (
            <>
              <div className="form-group" key={soal.id}>
                <LabelSoal labelId={soal.id} labelName={soal.soal} />
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
              <br />
            </>
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
