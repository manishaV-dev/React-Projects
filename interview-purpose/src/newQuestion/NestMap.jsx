import React from "react";

const NestMap = () => {
  const directors = [
    { name: "Director 1", movies: ["Movie 1", "Movie 2", "Movie 3"] },
    { name: "Director 2", movies: ["Movie 4", "Movie 5", "Movie 6"] },
    { name: "Director 3", movies: ["Movie 7", "Movie 8", "Movie 9"] },
    { name: "Director 4", movies: ["Movie 10", "Movie 11", "Movie 12"] },
    // Add more directors if needed
  ];

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h1>{director.name}</h1>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NestMap;
