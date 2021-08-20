import { useSelector } from "react-redux";

function ImagesBox() {
  const images = useSelector((state) => state.images);

  return (
    <div className="row text-center text-lg-start">
      {images.map((image) => (
        <div className="col-lg-3 col-md-4 col-6" key={image.id}>
          <img
            className="cardImage rounded d-block mb-4 img-fluid"
            alt={image.alt_description}
            src={image.urls.regular}
          ></img>
        </div>
      ))}
    </div>
  );
}

export default ImagesBox;
