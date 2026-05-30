async function searchWord() {
    const word = document.getElementById("wordInput").value.trim();

    const resultCard = document.getElementById("resultCard");
    const wordTitle = document.getElementById("wordTitle");
    const meaning = document.getElementById("meaning");
    const example = document.getElementById("example");
    const pos = document.getElementById("pos");
    const audio = document.getElementById("audio");

    if (!word) {
        alert("Please enter a word");
        return;
    }

    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await res.json();

        const wordData = data[0];

        wordTitle.innerText = wordData.word;
        meaning.innerText = wordData.meanings[0].definitions[0].definition;
        example.innerText = wordData.meanings[0].definitions[0].example || "No example available";
        pos.innerText = wordData.meanings[0].partOfSpeech;

        // pronunciation
        if (wordData.phonetics && wordData.phonetics[0].audio) {
            audio.src = wordData.phonetics[0].audio;
            audio.style.display = "block";
        } else {
            audio.style.display = "none";
        }

        resultCard.style.display = "block";

    } catch (error) {
        resultCard.style.display = "block";
        wordTitle.innerText = "❌ Not Found";
        meaning.innerText = "No meaning found";
        example.innerText = "-";
        pos.innerText = "-";
        audio.style.display = "none";
    }
}