function addWord() {
  var word = document.getElementById("word").value;
  word = word.toLowerCase();
  var translation = document.getElementById("translation").value;
  translation = translation.toLowerCase();
  let div1 = document.querySelector("div1");
  div1.innerHTML = "";
  let div2 = document.querySelector("div2");
  div2.innerHTML = "";
  let div3 = document.querySelector("div3");
    div3.innerHTML = "";
  let div4 = document.querySelector("div4");
  div4.innerHTML = "";
  var theList = document.getElementById("wordList");
  if (/^[a-z]{2,35}$/.test(word) && /^[a-z]{2,35}$/.test(translation)) {
    let wordlist = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < wordlist.length; i += 2) { 
      if (wordlist[i].innerText === word) {
        wordExists = 1;
      }
    }
    if (wordExists === 0) {
      theList.innerHTML += "<li class=\"word-item\">" + word + "</li><li class=\"word-item\">" + translation + "</li>";
    } else {
      div4.innerHTML = "<strong>&nbsp Cuvântul căutat exista deja în dicționar și nu a fost adăugat incă o dată!</strong><br>";
    }
  } else {
    div1.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  }
  return false;
}

function searchWord() {
  let input = document.getElementById("searchbox").value
  input = input.toLowerCase();
  if (/^[a-z]{2,35}$/.test(input)) {
    let wordlist = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < wordlist.length; i += 2) { 
      if (wordlist[i].innerText === input) {
        wordlist[i].style.display = "list-item";
        ++i;
        wordlist[i].style.display = "list-item";
        --i;
        wordExists = 1;
      } else {
        wordlist[i].style.display = "list-item";
        ++i;
        wordlist[i].style.display = "list-item";
        --i;
      }
    }
    let div1 = document.querySelector("div1");
    div1.innerHTML = "";
    let div2 = document.querySelector("div2");
    div2.innerHTML = "";
    let div3 = document.querySelector("div3");
    div3.innerHTML = "";
    let div4 = document.querySelector("div4");
    div4.innerHTML = "";
    if (wordExists === 0) {
      div4.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
    } else {
      div4.innerHTML = "<strong>&nbsp Cuvântul căutat există deja în dicționar!</strong><br>";
    }
  } else {
    div2.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  }
  return false;
}

function searchTranslation() {
  let input = document.getElementById("searchbox2").value
  input = input.toLowerCase();
  if (!(/^[a-z]{2,35}$/.test(input))) {
    div3.innerHTML = "Introduceți doar litere! Minim 2, maxim 35.";
  } else {
    let div1 = document.querySelector("div1");
    div1.innerHTML = "";
    let div2 = document.querySelector("div2");
    div2.innerHTML = "";
    let div3 = document.querySelector("div3");
    div3.innerHTML = "";
    let div4 = document.querySelector("div4");
    div4.innerHTML = "";
    let wordlist = document.getElementsByClassName("word-item"); 
    let wordExists = 0; 
    for (i = 0; i < wordlist.length; i += 2) { 
      if (wordlist[i].innerText === input) {
        wordlist[i].style.display = "list-item";
        ++i;
        wordlist[i].style.display = "list-item";
        --i;
        wordExists = 1;
      } else {
        wordlist[i].style.display="none";
        ++i;
        wordlist[i].style.display="none";
        --i;
      }
    }
    if (wordExists === 0) {
      div4.innerHTML = "<strong>&nbsp Cuvântul căutat nu există în dicționar!</strong><br>";
    }
  }
  return false;
}

function showList() {
  let wordlist = document.getElementsByClassName("word-item"); 
  for (i = 0; i < wordlist.length; ++i) { 
    wordlist[i].style.display = "list-item";
  }
  return false;
}