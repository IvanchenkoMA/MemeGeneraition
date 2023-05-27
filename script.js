function clearAll() {
  const memeContainer = document.querySelector(".meme-content");
  memeContainer.innerHTML = "";
  const jokeContainer = document.querySelector(".joke-content");
  jokeContainer.innerHTML = "";
  const riddleContainer = document.querySelector(".riddle-content");
  riddleContainer.innerHTML = "";
  const quteContainer = document.querySelector(".quote-content");
  quteContainer.innerHTML = "";
}

const memes = [
  "https://cnnespanol.cnn.com/wp-content/uploads/2018/10/181018064715-01-food-meme-screengrab-restricted-exlarge-169.jpg",
  "https://st.peopletalk.ru/wp-content/uploads/2023/01/img_2638.png",
  "https://cs13.pikabu.ru/post_img/2023/01/26/8/1674737374154760580.jpg"
];
const joke = [
  "Единственный, кто тебя по-настоящему поддерживает - твой позвоночник",
  "- Я такой худой! Вчера наступил ногой на грабли!- Ну?!- Ну-ну... Мимо!",
  "Хорошо, когда наши лежания совпадают с нашими возможностями."
];
const quote = [
  { quote: "Si vis pacem, para bellum", autor: "Caesar" },
  { quote: "Divide et impera", autor: "Caesar" },
  { quote: "Veni, vidi, vici ", autor: "Caesar" },
  { quote: "ālea jacta est", autor: "Caesar" },
  { quote: "Et tu, Brute ", autor: "Caesar" }
];
const riddles = [
  { question: "Висит груша нельзя скушать", answer: "bulb" },
  { question: "Мчится печка впереди,Тащит избы позади.", answer: "train" },
  { question: "На верхушке стебелька солнышко и облака", answer: "chamomile" }
];
function rnNum(len) {
  return Math.floor(Math.random() * len);
}
function getRandomData(data) {
  return data[rnNum(data.length)];
}

console.log(getRandomData(quote));

function showMeme() {
  clearAll();
  const memUrl = getRandomData(memes);
  const memeContainer = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src", memUrl);
  memeContainer.appendChild(newMeme);
  console.log(newMeme);
}

function showJoke() {
  clearAll();
  const jokeUrl = getRandomData(joke);
  const jokeContainer = document.querySelector(".joke-content");
  const newJoke = document.createElement("p");
  newJoke.textContent = jokeUrl;
  jokeContainer.appendChild(newJoke);
  console.log(newJoke);
}

function showRiddle() {
  clearAll();
  const ridUrl = getRandomData(riddles);
  const riddleContainer = document.querySelector(".riddle-content");
  const newRiddel = document.createElement("p");
  newRiddel.textContent = ridUrl.question;
  const newAnswer = document.createElement("p");
  newAnswer.setAttribute("id", "riddle-answer");
  newAnswer.textContent = ridUrl.answer;
  newAnswer.hidden = true;
  riddleContainer.appendChild(newRiddel);
  riddleContainer.appendChild(newAnswer);
}

function showAnswer() {
  const newAnswer = document.querySelector("#riddle-answer");
  newAnswer.hidden = false;
}

function showQuote() {
  clearAll();
  const quteUrl = getRandomData(quote);
  const quteContainer = document.querySelector(".quote-content");
  const newQute = document.createElement("p");
  newQute.textContent = quteUrl.quote;
  const newAutor = document.createElement("p");
  newAutor.setAttribute("id", "riddle-answer");
  newAutor.textContent = quteUrl.autor;
  quteContainer.appendChild(newQute);
  quteContainer.appendChild(newAutor);
}
