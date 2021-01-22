const Jawaban = ({ nama, tipeJawaban, optionJawaban }) => {
  return (
    <div>
      {optionJawaban.map((option, index) => {
        return (
          <div key={index}>
            <input type={tipeJawaban} name={nama} />
            <span>{option}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Jawaban;
