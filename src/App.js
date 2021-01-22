import { useState } from "react";
import { Form } from "./Form";

function App() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      type: "radio",
      soal: "Siapakah Penemu Baling - Baling Bambu",
      a: "doraemon",
      b: "suneo",
      c: "nobita",
      d: "naruto",
      jawab: "a",
    },
    {
      id: 2,
      type: "checkbox",
      soal: "Pilihlah 3 yang benar mengenai aqil",
      option: ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
      jawab: ["Trainer Juara Coding", "Manusia"],
    },
    {
      id: 3,
      type: "text",
      soal: "Ceritakan Pengalaman Anda Ketika Sedang Tidur",
    },
  ]);

  return (
    <div className="App">
      <Form datas={datas} />
    </div>
  );
}

export default App;
