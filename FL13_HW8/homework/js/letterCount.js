function letterCount(word, letter) {

    let array = word.toLowerCase().split('');
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === letter) {
            count++;
        }
    }
    return count;
}