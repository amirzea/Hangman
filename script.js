let word, attempts = 6, letters_guessed = 0;

function savedWord() {
    word = document.getElementById("userInput").value;
    document.getElementById("board").innerHTML = "";
    generateBoard();
}

function generateBoard() {
    document.getElementById("pictureHangman").src = attempts + ".jpg";
    document.getElementById("title").innerHTML = "Hangman";
    for (let i = 0; i < word.length; ++i) {
        document.getElementById("board").innerHTML +=
       `<u style="display: inline-block" class="${word.charAt(i)}">_</u>
       `;
    }    
    document.getElementById("board").innerHTML += `<br><br>`;    
    for (let i = 97; i <= 122; ++i) {
        document.getElementById("board").innerHTML += 
        `<button style="border-radius:10px;" class="btn btn-light" id="${String.fromCharCode(i)}" onclick="refreshBoard(this.id)">${String.fromCharCode(i)}</button>
        `;
    } 
}

function refreshBoard(elementID) {
    document.getElementById(elementID).disabled = true;
    if (word.includes(elementID) == false) {
        --attempts;
        document.getElementById("pictureHangman").src = attempts + ".jpg";
        if (attempts == 0) {
            youLost();
        }
    } else {
        for (let i = 0; i < document.getElementsByClassName(elementID).length; ++i) {
            document.getElementsByClassName(elementID)[i].innerHTML = elementID;
        }
        letters_guessed += document.getElementsByClassName(elementID).length;
        if (letters_guessed == word.length) {
            youWon();
        }
    }
}

function youLost() {
    document.getElementById("endGame").innerHTML = "Sorry, you lost &#128533";
    reload();
}

function youWon() {
    document.getElementById("endGame").innerHTML = "Congrats, you won &#127881";
    reload();
}

function reload() {
    document.getElementById("endGame").innerHTML +=
    `<br><button class="btn btn-info" onclick="history.go(0)"> Play again </br>
    `;
}
