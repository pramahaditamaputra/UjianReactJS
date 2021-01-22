import { useState } from "react";
import ListSoal from "./ListSoal";

const App = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      type: "radio",
      soal: "Siapakah Penemu Baling - Baling Bambu",
      option: ["doraemon", "suneo", "nobita", "naruto"],
      jawaban: "doraemon",
    },
    {
      id: 2,
      type: "checkbox",
      soal: "Pilihlah 3 yang benar mengenai aqil",
      option: ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
      jawaban: ["Trainer Juara Coding", "Manusia"],
    },
    {
      id: 3,
      type: "text",
      soal: "Ceritakan Pengalaman Anda Ketika Sedang Tidur",
      option: [""],
      jawaban: "",
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ListSoal datas={datas} />
        </div>
      </div>
    </div>
  );
};

export default App;
