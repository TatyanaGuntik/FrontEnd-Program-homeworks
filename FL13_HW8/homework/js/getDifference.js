function isBidder(a, b) {
    return a > b;
}

function getDifference(a, b) {
    if (isBidder(a, b)) {
        return a - b;
    } else {
        return b - a;
    }
}