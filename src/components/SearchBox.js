import { useState } from "react";

function SearchBar(props) {
  const [totalImages, setToatlImages] = useState(0);

  const searchHandler = () => {
    if (props.searchQuery.current.value === "") {
      props.unsplash.photos
        .list({
          page: 1,
          perPage: 8,
        })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            props.setImages(result.response.results);
            setToatlImages(result.response.total);
            props.setShowMore(result.response.total - 8 > 0);
          }
        });
    } else {
      props.unsplash.search
        .getPhotos({
          query: props.searchQuery.current.value,
          orientation: "squarish",
          page: 1,
          perPage: 8,
        })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            props.setImages(result.response.results);
            setToatlImages(result.response.total);
            props.setShowMore(result.response.total - 8 > 0);
          }
        });
    }
  };
  return (
    <>
      <div className="d-flex">
        <input
          type="text"
          className="shadow-sm border-0 h-3 searchInput form-control"
          placeholder="Search for photos"
          ref={props.searchQuery}
        />
        <button className="btn searchBtn btn-dark" onClick={searchHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>
      <div>
        {totalImages !== 0 && (
          <h1>
            {props.searchQuery.current.value === ""
              ? "Random"
              : props.searchQuery.current.value}
          </h1>
        )}
        {totalImages !== 0 && (
          <p className="resultCount">{totalImages} images has been found</p>
        )}
      </div>
    </>
  );
}

export default SearchBar;
