let check = parseFloat(prompt('Check number'));

let tips = parseFloat(prompt('Tip'));

let maxTip = 100;
let even = 2;

if (isNaN(check) || check < 0 || tips < 0 || tips > maxTip) {
    alert('Invalid input data');
} else {
    let tipsCount = check * tips / maxTip,
        totalSum = check + tipsCount;

    if (Math.round(tipsCount) !== tipsCount) {
        tipsCount = tipsCount.toFixed(even);
    }

    if (Math.round(totalSum) !== totalSum) {
        totalSum = totalSum.toFixed(even);
    }

    alert('Check number: ' + check +
        '\nTip: ' + tips + '%' +
        '\nTip amount: ' + tipsCount +
        '\nTotal sum to pay: ' + totalSum);
}








