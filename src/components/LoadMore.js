import { useState } from "react";

function LoadMore(props) {
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreHandler = () => {
    const pageToLoad = currentPage + 1;
    if (props.searchQuery.current.value === "") {
      props.unsplash.photos
        .list({
          page: pageToLoad,
          perPage: 8,
        })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            props.setImages((prevState) => {
              return [...prevState, ...result.response.results];
            });
            props.setShowMore(result.response.total - 8 > 0);
            setCurrentPage((prevState) => {
              return prevState + 1;
            });
          }
        });
    } else {
      props.unsplash.search
        .getPhotos({
          query: props.searchQuery.current.value,
          orientation: "squarish",
          page: pageToLoad,
          perPage: 8,
        })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            props.setImages((prevState) => {
              return [...prevState, ...result.response.results];
            });
            props.setShowMore(result.response.total - 8 > 0);
            setCurrentPage((prevState) => {
              return prevState + 1;
            });
          }
        });
    }
  };

  return (
    <>
      {props.showMore && (
        <div className="text-center">
          <button
            onClick={loadMoreHandler}
            className="bg-black p-2 text-white rounded border-0"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default LoadMore;
