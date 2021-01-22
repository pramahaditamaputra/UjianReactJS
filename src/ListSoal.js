import Jawaban from "./Jawaban";
import Soal from "./Soal";

const ListSoal = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => {
        if (data.id === 1) {
          return (
            <div className="mb-3" key={data.id}>
              <Soal soal={data.soal} />
              <Jawaban tipe={data.type} pilihan={data.a} stateCheck={true} />
              <Jawaban
                tipe={data.type}
                pilihan={data.b}
                jawaban={data.jawaban}
              />
              <Jawaban
                tipe={data.type}
                pilihan={data.c}
                jawaban={data.jawaban}
              />
              <Jawaban
                tipe={data.type}
                pilihan={data.d}
                jawaban={data.jawaban}
              />
            </div>
          );
        } else if (data.id === 2) {
          return (
            <div className="mb-3" key={data.id}>
              <label className="form-label">{data.soal}</label>
              <Jawaban
                tipe={data.type}
                pilihan={data.option[0]}
                stateCheck={true}
              />
              <Jawaban
                tipe={data.type}
                pilihan={data.option[1]}
                stateCheck={true}
              />
              <Jawaban tipe={data.type} pilihan={data.option[2]} />
            </div>
          );
        } else if (data.id === 3) {
          return (
            <div className="mb-3" key={data.id}>
              <Soal soal={data.soal} />
              <div>
                <Jawaban tipe={data.type} />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ListSoal;
