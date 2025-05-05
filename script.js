const sons = {
  chuva: new Audio("sons/chuva.mp3"),
  floresta: new Audio("sons/floresta.mp3"),
  cafeteria: new Audio("sons/cafeteria.mp3"),
  lareira: new Audio("sons/lareira.mp3"),
};

// Reproduzir em loop
for (let som in sons) {
  sons[som].loop = true;
}

function toggleSound(nome) {
  const audio = sons[nome];
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
