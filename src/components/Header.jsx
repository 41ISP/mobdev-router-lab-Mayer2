import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search?q=`+query)
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to={`/`} className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="nav">
          <Link to={`/`} className="nav-item">Главная</Link>
          <Link to={`/movies`} className="nav-item">Фильмы</Link>
          <Link to={`/about`} className="nav-item">О проекте</Link>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
