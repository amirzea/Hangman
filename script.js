let word
let letter;
let attempts = 6, letters_guessed = 0;

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
        `
        <u style="display: inline-block" class="${word.charAt(i)}">_</u>
        `;
    }    
    document.getElementById("board").innerHTML += `<br><br>`;    
    for (let i = 97; i <= 122; ++i) {
        letter = String.fromCharCode(i);
		document.getElementById("board").innerHTML += 
        `
        <button style="border-radius:10px;" class="btn btn-light" id="${letter}" onclick="refreshBoard(this.id)">${letter}</button>
        `;
    } 
}

function refreshBoard(elementID) {
    document.getElementById(elementID).disabled = true;
    let letters_array = document.getElementsByClassName(elementID);
    for (let i = 0; i < letters_array.length; ++i) {
        let item = letters_array[i];  
        item.innerHTML = elementID;
    }
    if (word.includes(elementID) == false) {
        --attempts;
        console.log(attempts);
        document.getElementById("pictureHangman").src = attempts + ".jpg";
        if(attempts == 0) {
            youLost();
        }
    }
    letters_guessed += letters_array.length;
    if (letters_guessed == word.length) {
        youWon();
    }
}

function youLost() {
    document.getElementById("endGame").innerHTML = "Sorry, you lost &#128533" + 
    `<br><button class="btn btn-info" onclick="history.go(0)"> Play again </br>
    `;
}

function youWon() {
    document.getElementById("endGame").innerHTML = "Congrats, you won &#127881" + 
    `<br><button class="btn btn-info" onclick="history.go(0)"> Play again </br>
    `;
}
