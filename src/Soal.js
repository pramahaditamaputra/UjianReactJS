import Jawaban from "./Jawaban";

const Soal = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <span>{data.id}. </span>
            <label className="form-label">{data.soal}</label>
            <Jawaban
              nama={data.id}
              optionJawaban={data.option}
              tipeJawaban={data.type}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Soal;
