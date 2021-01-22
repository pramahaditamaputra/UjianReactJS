import Soal from "./Soal";

const ListSoal = ({ datas }) => {
  return (
    <div className="card p-5 mt-5">
      <Soal datas={datas} />
    </div>
  );
};

export default ListSoal;
