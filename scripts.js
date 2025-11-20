/* Global Styles */
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(120deg, #0e0e0e, #1a1a1a, #0f0f0f);
  color: #fff;
  margin: 0;
  padding: 0;
  animation: bgPulse 15s infinite alternate;
}

@keyframes bgPulse {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Navbar */
nav {
  width: 100%;
  background: rgba(17,17,17,0.9);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 20px rgba(0,188,212,0.7);
  animation: slideDownBounce 1s ease;
}

@keyframes slideDownBounce {
  0% { transform: translateY(-50px); opacity: 0; }
  60% { transform: translateY(10px); opacity: 1; }
  80% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 1rem;
  transition: 0.5s;
}
nav a:hover {
  color: #00ffe0;
  transform: scale(1.2) rotate(3deg);
}

header {
  text-align: center;
  padding: 140px 20px 50px;
  background: linear-gradient(to bottom, #141414, #0e0e0e);
  animation: rainbowText 3s infinite alternate;
}
header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  animation: floatUp 2s infinite ease-in-out;
}
header p {
  animation: glowPulse 2s infinite alternate;
}

@keyframes rainbowText {
  0% { color: #00bcd4; }
  20% { color: #ff00ff; }
  40% { color: #ffdd00; }
  60% { color: #00ff99; }
  80% { color: #ff5500; }
  100% { color: #00bcd4; }
}

@keyframes floatUp {
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
}

@keyframes glowPulse {
  0% { text-shadow: 0 0 5px #00bcd4; }
  50% { text-shadow: 0 0 20px #ff00ff; }
  100% { text-shadow: 0 0 5px #00bcd4; }
}

section {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: rgba(26,26,26,0.9);
  border-radius: 12px;
  animation: spinPulse 2s infinite alternate;
}
@keyframes spinPulse {
  0% { transform: rotate(0deg) scale(1); opacity: 0; }
  50% { transform: rotate(5deg) scale(1.05); opacity: 0.7; }
  100% { transform: rotate(-3deg) scale(1); opacity: 1; }
}

h2 {
  font-size: 2rem;
  border-left: 4px solid #00ffe0;
  padding-left: 10px;
  margin-bottom: 15px;
  animation: colorShift 3s infinite alternate;
}
@keyframes colorShift {
  0% { color: #00bcd4; }
  25% { color: #ff00ff; }
  50% { color: #ffdd00; }
  75% { color: #00ff99; }
  100% { color: #00bcd4; }
}

ul li {
  margin: 8px 0;
  animation: wiggle 2s infinite;
}
@keyframes wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}

/* Gallery */
.gallery .card {
  background: #121212;
  border-radius: 12px;
  padding: 10px;
  transition: transform 0.5s, box-shadow 0.5s;
  animation: cardBounce 1.5s infinite alternate;
}
.gallery .card img {
  width: 100%;
  border-radius: 10px;
  animation: imagePulse 3s infinite alternate;
}
.gallery .card:hover {
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 0 25px rgba(0,255,224,0.8);
}
@keyframes cardBounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
@keyframes imagePulse {
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(180deg); }
  100% { filter: hue-rotate(360deg); }
}

.socials a:hover {
  color: #ff00ff;
  text-shadow: 0 0 10px #00ffe0, 0 0 20px #ff00ff;
  transform: scale(1.3) rotate(-5deg);
}

.skills span:hover {
  background: linear-gradient(45deg, #00ffe0, #ff00ff, #ffdd00);
  color: #000;
  transform: scale(1.3) rotate(5deg);
  transition: 0.5s;
}

/* Back to Top Button */
#backToTop {
  animation: bounceArrow 1s infinite alternate;
}
@keyframes bounceArrow {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.2); }
  100% { transform: translateY(0) scale(1); }
}

/* Scroll Reveal Animations */
.reveal {
  opacity: 0;
  transform: translateY(50px) rotateX(20deg);
  transition: all 1s cubic-bezier(0.68,-0.55,0.27,1.55);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0) rotateX(0deg);
}
