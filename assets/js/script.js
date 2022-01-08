const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-word");

btn.addEventListener("click", () => {
    let inputWord = document.getElementById("word-input").value;
    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inputWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="more-info">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="example">
                    ${data[0].meanings[0].definitions[0].example ||
                "Example Not Found &#x1F625"
                }
                </p>`;
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Word not found &#x1F625</h3>`;
        });
});
function playSound() {
    sound.play();
}
