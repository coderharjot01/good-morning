import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const rotateElement = document.getElementById('rotating-text');
  const openBtn = document.getElementById('open-btn');
  const messageContainer = document.getElementById('message-container');
  const mainMessageEl = document.getElementById('main-message');
  const subMessageEl = document.getElementById('sub-message');

  // Random Message Logic
  const messages = [
    {
      main: `"I am really sorry about last night... I fell asleep early. 😔😴"`,
      sub: `Forgive me? 🥺💖`
    }
  ];

  // Pick a random message
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  mainMessageEl.textContent = randomMsg.main;
  subMessageEl.textContent = randomMsg.sub;

  // Rotating Text Logic
  const words = ["Sunshine ☀️", "Beautiful 🌸", "Dreamer ✨", "Radiant 💖", "Star 🌟"];
  let wordIndex = 0;

  const cycleText = () => {
    // Start exit animation
    rotateElement.classList.add('fade-out');

    setTimeout(() => {
      // Change text
      wordIndex = (wordIndex + 1) % words.length;
      rotateElement.textContent = words[wordIndex];

      // Reset for entry animation
      rotateElement.classList.remove('fade-out');

      // Trigger Reflow to restart css animation
      void rotateElement.offsetWidth;

      // The element has the 'slideUpFade' animation by default in CSS, 
      // so removing 'fade-out' and triggering reflow renders it again.
    }, 500); // Matches the 0.5s CSS exit duration
  };

  // Start rotation loop
  setInterval(cycleText, 3500);

  // Interaction Logic
  openBtn.addEventListener('click', () => {
    // 1. Animate button out
    openBtn.classList.add('hidden-btn');

    // 2. Animate message in (short delay for smooth transition)
    setTimeout(() => {
      messageContainer.classList.remove('hidden');
      messageContainer.classList.add('visible');

      // Optional: Add some confetti or extra "wow" here via JS if desired later
    }, 400);
  });

  // Flying Emojis Logic
  const emojiContainer = document.getElementById('flying-emoji-container');
  const emojis = ['🎈', '❤️', '😘', '💋', '💕', '🌹'];

  const createEmoji = () => {
    const el = document.createElement('div');
    el.classList.add('flying-emoji');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random positioning and sizing
    const left = Math.random() * 100; // 0 to 100%
    const size = Math.random() * 1.5 + 1.5; // 1.5rem to 3rem
    const duration = Math.random() * 10 + 10; // 10s to 20s

    el.style.left = `${left}%`;
    el.style.fontSize = `${size}rem`;
    el.style.animationDuration = `${duration}s`;

    // Cleanup after animation
    el.addEventListener('animationend', () => {
      el.remove();
    });

    emojiContainer.appendChild(el);
  };

  // Start creating emojis
  setInterval(createEmoji, 600); // New emoji every 600ms
});
