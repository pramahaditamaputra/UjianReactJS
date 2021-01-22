const Jawaban = ({ tipe, pilihan, stateCheck }) => {
  return (
    <div>
      <input className="mr-5" name="radio" type={tipe} checked={stateCheck} />
      <span>{pilihan}</span>
    </div>
  );
};

export default Jawaban;
