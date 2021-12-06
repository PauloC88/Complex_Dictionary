let messageBox1 = document.querySelector("div1");
let messageBox2 = document.querySelector("div2");
let messageBox3 = document.querySelector("div3");
let messageBox4 = document.querySelector("div4");

function addWord() {
  // remove all previous messages from the page;
  messageBox1.innerHTML = "";
  messageBox2.innerHTML = "";
  messageBox3.innerHTML = "";
  messageBox4.innerHTML = "";
  let word = document.getElementById("word").value;
  word = word.toLowerCase();
  let translation = document.getElementById("translation").value;
  translation = translation.toLowerCase();
  let wordList = document.getElementById("wordList");
  if (!/^[a-z]{2,35}$/.test(word) || !/^[a-z]{2,35}$/.test(translation)) {
    messageBox1.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  } else {
    let words = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < words.length; i += 2) { 
      if (words[i].innerText === word) {
        wordExists = 1;
      }
    }
    if (wordExists === 0) {
      wordList.innerHTML += "<li class=\"word-item\">" + word + "</li><li class=\"word-item\">" + translation + "</li>";
    } else {
      messageBox4.innerHTML = "<strong>&nbsp Cuvântul există deja în dicționar și nu a fost adăugat incă o dată!</strong><br>";
    }
  }
  return false;
}

function searchWord() {
  // remove all previous messages from the page;
  messageBox1.innerHTML = "";
  messageBox2.innerHTML = "";
  messageBox3.innerHTML = "";
  messageBox4.innerHTML = "";
  let searchedWord = document.getElementById("searchbox").value;
  searchedWord = searchedWord.toLowerCase();
  if (!/^[a-z]{2,35}$/.test(searchedWord)) {
    messageBox2.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  } else {
    let words = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < words.length; i += 2) {
      words[i].style.display = "list-item";
      ++i;
      words[i].style.display = "list-item";
      --i; 
      if (words[i].innerText === searchedWord) {
        wordExists = 1;
      }
    }
    if (wordExists === 0) {
      messageBox4.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
    } else {
      messageBox4.innerHTML = "<strong>&nbsp Cuvântul căutat există în dicționar!</strong><br>";
    }
  } 
  return false;
}

function searchTranslation() {
  // remove all previous messages from the page;
  messageBox1.innerHTML = "";
  messageBox2.innerHTML = "";
  messageBox3.innerHTML = "";
  messageBox4.innerHTML = "";
  let searchedWord = document.getElementById("searchbox2").value;
  searchedWord = searchedWord.toLowerCase();
  if (!/^[a-z]{2,35}$/.test(searchedWord)) {
    messageBox3.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  } else {
    let words = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < words.length; i += 2) { 
      if (words[i].innerText === searchedWord) {
        words[i].style.display = "list-item";
        ++i;
        words[i].style.display = "list-item";
        --i;
        wordExists = 1;
      } else {
        words[i].style.display="none";
        ++i;
        words[i].style.display="none";
        --i;
      }
    }
    if (wordExists === 0) {
      messageBox4.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
    }
  }
  return false;
}

function showList() {
  // remove all previous messages from the page;
  messageBox1.innerHTML = "";
  messageBox2.innerHTML = "";
  messageBox3.innerHTML = "";
  messageBox4.innerHTML = "";
  let words = document.getElementsByClassName("word-item"); 
  for (i = 0; i < words.length; ++i) { 
    words[i].style.display = "list-item";
  }
  return false;
}