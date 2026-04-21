// JavaScript pour l'interactivité

const card = document.getElementById('profileCard');
const followBtn = document.getElementById('followBtn');
const messageBtn = document.getElementById('messageBtn');
const messageBox = document.getElementById('messageBox');

// Compteur de followers
let followers = 0;

// Effet au clic sur la carte
card.addEventListener('click', function() {
  this.style.transform = 'scale(0.98)';
  setTimeout(() => {
    this.style.transform = '';
  }, 200);
});

// Bouton Suivre
followBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  followers++;
  
  if (followers === 1) {
    this.textContent = `Suivi ✓ (${followers})`;
  } else {
    this.textContent = `Suivi ✓ (${followers})`;
  }
  
  this.style.background = '#4caf50';
  this.style.borderColor = '#4caf50';
  
  setTimeout(() => {
    this.style.background = '#667eea';
    this.style.borderColor = '#667eea';
  }, 1000);
});

// Bouton Message
messageBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  messageBox.classList.add('show');
  
  setTimeout(() => {
    messageBox.classList.remove('show');
  }, 3000);
});
