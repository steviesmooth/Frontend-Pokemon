import "./Footer.css";
import footerPic from "../../images/Footer.png";

const Footer = () => {
  //   const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <img src={footerPic} alt="pokemons" />
    </footer>
  );
};

export default Footer;
