let paragraphs = document.getElementsByTagName("p");
let i;
let str;
let temp;

function clickEvent(characters) {
  characters = characters / 100;

  for (paragraph of paragraphs) {
    str = "";
    for (word of paragraph.innerText.split(" ")) {
      temp = word.slice(0, word.length * characters);
      word = word.slice(word.length * characters, word.length);
      str += `<span style="font-weight:bold">${temp}</span>${word} `;
    }
    paragraph.innerHTML = str;
  }
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.activate){
    clickEvent(msg.characters);
  }
})