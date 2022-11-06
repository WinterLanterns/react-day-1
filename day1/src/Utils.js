import React from "react";

const Utils = () => {
  const getMoviesByName = async (title) => {
    // const myKey = "e5c72d48";

    const result = await fetch(
      `https://www.omdbapi.com/?t=${title}&apikey=${myKey}`
    );
    const movie = await result.json();
    console.log(movie);
  };

  getMoviesByName("Halloween");
  return <div></div>;
};

export default Utils;
