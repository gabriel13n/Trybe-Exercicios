const express = require('express');
const { read } = require('fs');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const readMovies = path.resolve(__dirname, './movies.json');

async function readFile() {
  try {
    const data = await fs.readFile(readMovies);
    return JSON.parse(data);
  } catch (error) {
    console.error(`arquivo não pode ser lido ${error}`)
  }
}

app.get('/movies:id', async (req, res) => {
  try {
    const idParams = req.params.id;
    const movies = await readFile();
    const movie = movies.find(({id}) => id === Number(idParams));
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({message:error.message})
  }
})

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({message: err.message});
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = readFile();
    const newMovie = {
      id: movies[movies.lenth - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(readMovies, allMovies)
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({message: err.message});
  }
})

app.put('/movies:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFile()
    const index = movies.findIndex((element) => element.id = Number(id))
    movies[index] = { id: Number(id), movie, price};
    const updateMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(readFile, updateMovies);
    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({message: err.message})
  }
})

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFile();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});



module.exports = app;