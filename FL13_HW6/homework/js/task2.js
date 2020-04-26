let even = 2;

let word = prompt();

let wordWithoutSpace = word.trim();

let letterSum = word.length;

let letterCount = Math.floor(word.length / even);

let arr = word.split('');


if (!letterCount || !wordWithoutSpace.length) {
    alert('Invalid value');
} else if (letterSum % even === 0) {
    alert('"' + arr[letterCount - 1] + arr[letterCount] + '"');
} else {
    alert('"' + arr[letterCount] + '"');
}

