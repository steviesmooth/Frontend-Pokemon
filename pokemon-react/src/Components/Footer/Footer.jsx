const Footer = ({ onPrev, onNext }) => {
  //   const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <button onClick={() => onPrev()}>Previous</button>
        <button onClick={() => onNext()}>Next</button>
      </div>
    </footer>
  );
};

export default Footer;
