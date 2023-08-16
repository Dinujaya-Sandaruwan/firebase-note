const AddMovies = () => {
  return (
    <div className="movie-form">
      <input type="text" placeholder="Movie title..." />
      <input type="number" placeholder="Released year..." />
      <select>
        <option value="true"></option>
        <option value="false"></option>
      </select>
    </div>
  );
};

export default AddMovies;
