import preload from "../../assets/img/preload.gif";
import "../Preloader/Preloader.css";

const Preloader = () => {
  return <img className="preload" src={preload} />;
};

export default Preloader;
