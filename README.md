

# 🦖 Dino Challenge — 2D Endless Runner Game Engine (JavaScript)

Dino Challenge is a **browser-based 2D endless runner game** built using **HTML, CSS, and Vanilla JavaScript**.
The game features a running dinosaur that the player must control to **jump over obstacles and survive while scoring points**.

The project demonstrates core **browser game development concepts** such as animation loops, collision detection, sprite handling, scoring systems, and state-based UI transitions — all implemented **without external libraries**.

---

## 🎮 Game Demo

![Dino Challenge Gameplay](Video_Demo/DinoChallenge_2D_Game.gif)

---

## 🎯 Game Mechanics

🎮 **Automatic Running Character**
The dinosaur continuously runs forward with sprite-based animation.

⌨️ **Keyboard Controls**

* **ENTER / SPACE** → Start the game
* **SPACE** → Jump to avoid obstacles

🔥 **Dynamic Obstacles**
Flame obstacles appear and move toward the player.

💥 **Collision Detection**
If the dinosaur hits an obstacle, the game ends.

🏆 **Score Tracking**
Score increases over time while surviving.

📺 **Game States**

* Start Screen
* Running Game
* Game Over Screen
* Winning Screen

🔁 **Restart System**
Players can restart the game after losing.

---

## 🧠 Technical Architecture

| Component    | Implementation                      |
| ------------ | ----------------------------------- |
| Rendering    | DOM-based sprite animation          |
| Game Loop    | JavaScript intervals                |
| Input System | Keyboard event listeners            |
| Physics      | Simulated jump trajectory & gravity |
| Collision    | Position-based obstacle detection   |
| UI System    | Dynamic DOM updates                 |

---

# ⚙️ Game Pipeline

The project is structured into **three main files**, each handling a specific part of the game engine.

---

## 📄 `index.html` — Game Structure

This file defines the **core layout of the game interface**.

It includes:

* Game background container
* Dinosaur character sprite
* Score display
* Start screen UI
* Game Over screen
* Win screen

It also loads the **CSS styling** and **JavaScript game engine logic**.

---

## 🎨 `style.css` — Game Visual Design

This file controls the **visual appearance of the game**.

It handles:

* Background environment
* Character positioning
* Screen layouts (start, end, win)
* Score display styling
* Button design
* Sprite positioning

The CSS ensures the game appears **clean, centered, and responsive within the browser window**.

---

## 🧠 `script.js` — Game Engine Logic

This is the **core logic of the game**.

It implements:

🎞️ **Animation System**

* Running animation
* Jump animation
* Idle animation
* Death animation

⌨️ **Input Handling**

* Detects keyboard input for starting and jumping

🔥 **Obstacle System**

* Generates and moves flame obstacles

⚙️ **Physics Simulation**

* Jump motion using vertical position updates

💥 **Collision Detection**

* Detects when the dinosaur collides with obstacles

🏆 **Score System**

* Tracks player survival score

🎵 **Audio Engine**

* Background music
* Jump sound
* Death sound
* Win sound

---

# 🛠️ Built With

* **HTML5**
* **CSS3**
* **JavaScript**

No external libraries or frameworks were used.

---



# 🎯 Project Objective

This project was developed to explore **fundamental browser game development concepts**, including:

* Real-time animation systems
* Event-driven keyboard input
* Basic physics simulation
* Collision detection
* Interactive UI state management

It demonstrates how a **simple game engine can be built using only core web technologies**.

---

