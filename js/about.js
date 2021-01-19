function wordReplacer() {

  const textContainer = document.querySelector(".container");

  const htmlAfterTheReplace = textContainer.innerHTML.replace(/the/g, "replaced").replace(/The/g, "Replaced");

  textContainer.innerHTML = htmlAfterTheReplace;
}

setTimeout(wordReplacer, 4000);