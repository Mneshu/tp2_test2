function checkVRN() {
    let input = document.getElementById("vrnInput").value.trim().toUpperCase();
    let resultElement = document.getElementById("result");

    const vrnPattern = /^[A-Z]{3} \d{3}-EC$/;
    if (!vrnPattern.test(input)) {
        resultElement.innerHTML = "Invalid format! Use AAA NNN-EC";
        return;
    }

    let [letters, numbers] = input.split(" ");
    let numPart = parseInt(numbers.split("-")[0], 10);

    numPart++;
    if (numPart > 999) {
        numPart = 0;
        letters = incrementLetters(letters);
    }

    if (letters === null) {
        resultElement.innerHTML = "Maximum registration reached!";
        return;
    }

    let nextVRN = `${letters} ${String(numPart).padStart(3, "0")}-EC`;
    resultElement.innerHTML = `Next VRN: ${nextVRN}`;
}

function incrementLetters(letters) {
    let chars = letters.split("");
    for (let i = 2; i >= 0; i--) {
        if (chars[i] === 'Z') {
            chars[i] = 'A';
        } else {
            chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
            return chars.join("");
        }
    }
    return null; // If all letters were 'Z', we return null
}
