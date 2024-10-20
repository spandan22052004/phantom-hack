 // Countdown Timer Script
 const countdownDate = new Date("October 31, 2024 00:00:00").getTime();
 const timerElement = document.getElementById("timer");

 const x = setInterval(function () {
     const now = new Date().getTime();
     const distance = countdownDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

     if (distance < 0) {
         clearInterval(x);
         timerElement.innerHTML = "EXPIRED";
     }
 }, 1000);

 // Play Background Sound
 const playButton = document.getElementById("play-button");
 const backgroundSound = document.getElementById("background-sound");

 playButton.addEventListener("click", function () {
     backgroundSound.paused ? backgroundSound.play() && playButton.innerText("Pause audio") : backgroundSound.pause() && playButton.innerText("play Audio");
 });

 // Mouse Follow Witch
 const witch = document.createElement("img");
 witch.src = "/photo/witch.png"; // Ensure the path to the witch image is correct
 witch.classList.add("witch");
 document.body.appendChild(witch);

 document.addEventListener("mousemove", function (e) {
     witch.style.left = e.pageX + "px";
     witch.style.top = e.pageY + "px";
 });

 // Ghost Animation
 function animateGhost(ghost) {
     const x = Math.random() * window.innerWidth;
     const y = Math.random() * window.innerHeight;

     ghost.style.left = x + "px";
     ghost.style.top = y + "px";

     setTimeout(() => {
         animateGhost(ghost);
     }, 2000 + Math.random() * 3000); // Random delay between movements
 }

 // Create Ghosts
 const ghost1 = document.createElement("img");
 ghost1.src = "/photo/ghost1.png"; // Ensure the path to the ghost image is correct
 ghost1.classList.add("ghost");
 document.body.appendChild(ghost1);
 animateGhost(ghost1);

 const ghost2 = document.createElement("img");
 ghost2.src = "/photo/ghost2.png"; // Ensure the path to the ghost image is correct
 ghost2.classList.add("ghost");
 document.body.appendChild(ghost2);
 animateGhost(ghost2);
 document.getElementById('submit-quiz').addEventListener('click', () => {
     const nameInput = document.getElementById('fullName').value;
     const q1 = document.querySelector('input[name="q1"]:checked');
     const q2 = document.querySelector('input[name="q2"]:checked');

     let score = 0;

     // Check answers
     if (q1 && q1.value === 'c') score++; // Correct answer for Q1
     if (q2 && q2.value === 'c') score++; // Correct answer for Q2

     // Prepare the discount message
     const discountMessage = `Thank you, ${nameInput}! You scored ${score} out of 2.`;
     document.getElementById('discount-message').innerText = discountMessage;

     const productCards = document.querySelectorAll('.product-card');

     // Show products based on score
     productCards.forEach(card => {
         const discount = parseInt(card.getAttribute('data-discount'));
         // Show products based on score
         if (score >= discount / 10) {
             card.style.display = 'block'; // Show the card if the score meets the discount requirement
         } else {
             card.style.display = 'none'; // Hide the card if the score doesn't meet the requirement
         }
     });
 });
