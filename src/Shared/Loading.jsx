import image from "../assets/Home/Banner/banner-image-1.png"
import "../Styles/Shared/Loading.css"
const Loading = () => {
  return (
    <div className="root-loading">
      <div className="logo-container">
        <img src={image} alt="Logo" className="logo" />
      </div>
    </div>
  )
};

export default Loading;