import { useState } from "react";
import FormMultiple from "./FormMultiple";

const App = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      type: "radio",
      soal: "Siapakah Penemu Baling - Baling Bambu",
      option: ["doraemon", "suneo", "nobita", "naruto"],
      jawaban: ["doraemon"],
    },
    {
      id: 2,
      type: "checkbox",
      soal: "Pilihlah 3 yang benar mengenai aqil",
      option: ["TrainerJuaraCoding", "Manusia", "Anggota Avenger"],
      jawaban: ["TrainerJuaraCoding", "Manusia"],
    },
    {
      id: 3,
      type: "text",
      soal: "Ceritakan Pengalaman Anda Ketika Sedang Tidur",
      option: [""],
      jawaban: [""],
    },
  ]);

  let [soalPertama] = [...datas];
  let [, soalKedua] = [...datas];
  let [, , soalKetiga] = [...datas];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card p-5 mt-5">
            <FormMultiple
              soalPertama={soalPertama}
              soalKedua={soalKedua}
              soalKetiga={soalKetiga}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
