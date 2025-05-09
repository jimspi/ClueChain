# ClueChain

## Overview
Daily five-clue puzzle: guess the mystery word in 5 tries.

## Setup
1. Install dependencies  
   ```bash
   npm install
   ```
2. Run the server  
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000` in your browser.

## Adding Puzzles
Edit `puzzles.json`, append entries with:
```json
{
  "date": "YYYY-MM-DD",
  "answer": "yourword",
  "clues": ["clue1","clue2","clue3","clue4","clue5"]
}
```
