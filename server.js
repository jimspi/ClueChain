const express = require('express');
const puzzles = require('./puzzles.json');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function getTodaysPuzzle() {
  const today = new Date().toISOString().slice(0,10);
  return puzzles.find(p => p.date === today) || puzzles[puzzles.length - 1];
}

app.get('/api/puzzle', (req, res) => {
  const { date, clues } = getTodaysPuzzle();
  res.json({ date, clues });
});

app.post('/api/guess', (req, res) => {
  const { guess } = req.body;
  const puzzle = getTodaysPuzzle();
  const isCorrect = guess.toLowerCase() === puzzle.answer.toLowerCase();
  res.json({ correct: isCorrect });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
