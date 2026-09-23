export default function GenreFilter({ genres }) {

  return (
    <div className="genres">
      {genres.map((genre) => (
        <link
          key={genre.id || 'all'}
          to={genre.id ? `/movies?genre=${genre.id}` : '/movies'}
          className="genre-btn"
        >
          {genre.label}
        </link>
      ))}
    </div>
  );
}
