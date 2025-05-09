let attempts = 0;

window.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('/api/puzzle');
  const { clues } = await res.json();
  const list = document.getElementById('clues');
  clues.forEach(clue => {
    const li = document.createElement('li');
    li.textContent = clue;
    list.appendChild(li);
  });
});

async function checkGuess() {
  const input = document.getElementById('guessInput').value;
  attempts++;
  const res = await fetch('/api/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess: input })
  });
  const { correct } = await res.json();
  const fb = document.getElementById('feedback');

  if (correct) {
    fb.textContent = 'Correct!';
    fb.style.color = 'green';
  } else if (attempts >= 5) {
    fb.textContent = 'Out of attempts!';
    fb.style.color = 'red';
  } else {
    fb.textContent = `Incorrect. Attempts left: ${5 - attempts}`;
    fb.style.color = 'orange';
  }
}
