# 😹 Jokes Generator Web App

A fun, responsive web app that fetches random jokes by category using the [JokeAPI](https://jokeapi.dev). Built with Node.js, Express, EJS, Bootstrap, and a dose of humor (and cat audio 😺).

## 🖼️ Preview

![cat laughing gif](public/photos/aaaah-cat.webp)

## 🚀 Features

- Random jokes from JokeAPI
- Category selection (Coding, Miscellaneous, Development, Halloween)
- Audio and cat image when joke appears
- Dynamic rendering with EJS
- Styled with Bootstrap & custom CSS

## 🎧 Audio

When a joke is delivered, a short sound effect (`catlaugh.mp3`) plays automatically for extra fun.

## 📁 Project Structure

project/
├── public/
│ ├── style.css
│ ├── catlaugh.mp3
│ └── photos/aaaah-cat.webp
├── views/
│ └── index.ejs
├── index.js
├── package.json
└── README.md

## 📦 Installation

1. Clone the repo:

git clone https://github.com/RanimRebai/jokes-generator.git
cd jokes-generator

2. Install dependencies:

npm install

3. Run the server:

node index.js

4. Open your browser and visit:

http://localhost:3000

## 🔧 Dependencies
- Express

- EJS

- Axios

- Body-parser

- dirname

- path

- Bootstrap 5

- JokeAPI

## 📜 License
MIT — free to use and modify.