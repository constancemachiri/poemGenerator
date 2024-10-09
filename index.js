
new Typewriter('#welcome', {
    strings: "WELCOME TO AI POEM GENERATOR",
    autoStart: true,
    cursor:"",
    delay:60,
  });
  function results(response) {
    let poem = response.data.answer;
    let formattedPoem = poem.replace(/,/g, "<br>");
    document.querySelector('#poemspace').innerHTML = formattedPoem;
    new Typewriter('#poemspace', {
      strings: formattedPoem,  
      autoStart: true,
      cursor: "",
      delay: 60,
    });
  }
function generatePoem(event){
    event.preventDefault();
    let apiKey = "5451tfeo2c8a3b1e71a0f670f0558529";
    let prompt =  document.querySelector("#input").value;
    
    let context = `you are a romatic poet and love to generate brief poem of 10 lines about ${"input"}.value`
    let ApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poems= document.getElementById("poemspace");
    poems.classList.remove("hidden");
    poems.innerHTML=`<div class="blink">⌛Generating poem about ${prompt}</div>`;
    axios.get(ApiUrl).then(results);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generatePoem);