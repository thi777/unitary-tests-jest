import React, { useState } from 'react';

const App = () => {
  const [movie, updateMovie] = useState('')
  const [movies, updateMovies] = useState([])
  const handleInput = e => updateMovie(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    updateMovies([...movies, movie])
    updateMovie('')
  }

  return (
     <>
      <form onSubmit={handleSubmit}>
        <input 
          value={movie} 
          data-testid="form-field"
          onChange={handleInput}
          placeholder="add you movie here"
        />
        <button data-testid="form-btn">enviar</button>
      </form>
      <table>
          <tr>
            <th>add your movie</th>
          </tr>
          <tbody>
            {movies.map((t, index)=> (
                <tr key={index}>
                  <td>{t}</td>
                </tr>
            ))}
          </tbody>
      </table>
     </>
  );
}


export default App;
