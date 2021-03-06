let warningMessage = document.querySelector("warning_message");
let searchResMessage = document.querySelector("search_result");

function validateFormat(input) {
  return /^[a-z]{2,35}$/.test(input);
}

function addWord() {
  // remove all previous messages from the page;
  warningMessage.innerHTML = "";
  searchResMessage.innerHTML = "";
  let word = document.getElementById("word").value;
  word = word.toLowerCase();
  let translation = document.getElementById("translation").value;
  translation = translation.toLowerCase();
  let wordList = document.getElementById("wordList");
  if (!validateFormat(word) || !validateFormat(translation)) {
    warningMessage.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
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
      searchResMessage.innerHTML = "<strong>&nbsp Cuvântul există deja în dicționar și nu a fost adăugat incă o dată!</strong><br>";
    }
  }
  return false;
}

function searchWord() {
  // remove all previous messages from the page;
  warningMessage.innerHTML = "";
  searchResMessage.innerHTML = "";
  let searchedWord = document.getElementById("searchbox").value;
  searchedWord = searchedWord.toLowerCase();
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
    searchResMessage.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
  } else {
    searchResMessage.innerHTML = "<strong>&nbsp Cuvântul căutat există în dicționar!</strong><br>";
  } 
  return false;
}

function searchTranslation() {
  // remove all previous messages from the page;
  warningMessage.innerHTML = "";
  searchResMessage.innerHTML = "";
  let searchedWord = document.getElementById("searchbox2").value;
  searchedWord = searchedWord.toLowerCase();
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
    searchResMessage.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
  }
  return false;
}

function showList() {
  // remove all previous messages from the page;
  warningMessage.innerHTML = "";
  searchResMessage.innerHTML = "";
  let words = document.getElementsByClassName("word-item"); 
  for (i = 0; i < words.length; ++i) { 
    words[i].style.display = "list-item";
  }
  return false;
}