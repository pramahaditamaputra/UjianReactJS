import Soal from "./ListSoal";

export const Form = ({ datas }) => {
  return (
    <div>
      <form>
        <Soal datas={datas} />
      </form>
    </div>
  );
};
