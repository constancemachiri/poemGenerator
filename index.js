
new Typewriter('#welcome', {
    strings: "WELCOME TO AI POEM GENERATOR",
    autoStart: true,
    cursor:""
  });

function generatePoem(event){
    event.preventDefault();
    new Typewriter('#poemspace', {
        strings: "hello world",
        autoStart: true,
        cursor:"",
      });
}


let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);