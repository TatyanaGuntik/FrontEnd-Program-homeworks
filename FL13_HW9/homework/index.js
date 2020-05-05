function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            arr.push(String(arguments[i]));
        } else {
            arr.push(Number(arguments[i]));
        }
    }
    return arr;
}


function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        array[i] = func(array[i]);
    }
}

// executeforEach([1,2,3], function(el) {console.log(el * 2)}); // 2 4 6


function mapArray(arr, func) {

    executeforEach(arr, function (item) {
        return Number(item);
    });

    executeforEach(arr, func);
    return arr;
}

// console.log(mapArray([2, '5', 8], function (el) {return el + 3}));

function filterArray(array, func) {
    executeforEach(array, function (el) {
        if (!func(el)) {
            el = null;
        }
        return el;
    });
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            result.push(array[i]);
        }
    }

    return result;
}

// console.log(filterArray([2, 5, 8], function (el) {
//     return el % 2 === 0
// }));


function containsValue(array, val) {

    executeforEach(array, function (item) {
        if (item === val) {
            item = true;
        } else {
            item = false
        }

        return item;
    })

    let result = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            result = true;
        }
    }
    return result;
}


function flipOver(str) {

    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}


function makeListFromRange(array) {
    let result = [];

    if (array[0] > array[1]) {
        for (let i = array[0]; i >= array[1]; i--) {
            result.push(i);
        }
    } else {
        for (let i = array[0]; i <= array[1]; i++) {
            result.push(i);
        }
    }

    return result;
}


const fruits = [
    {name: 'apple', weight: 0.5},
    {name: 'pineapple', weight: 2}
];

function getArrayOfKeys(object, prop) {

    let resultArr = [];

    executeforEach(object, function (item) {
        resultArr.push(item[prop]);
    })
    return resultArr;
}


function substitute(array, func) {
    return mapArray(array, func);
}

// console.log(substitute([58, 14, 48, 12, 31, 19, 10], function (item) {
//     if (item > 10 && item < 20) {
//         item = '*';
//     }
//     return item;
// }));


const date = new Date(2020, 0, 2);

function getPastDay(date, val) {
    let resultTIme = date.getTime() - val * 86400000;
    let resultDate = new Date();
    resultDate.setTime(resultTIme);

    let resDay = resultDate.getDate();
    let resMonth = resultDate.toLocaleString('en', {month: 'short'});
    let resYear = resultDate.getFullYear();

    return resDay + ' ' + resMonth + ' ' + resYear;
}


function formatDate(date) {

    let month = getCurrent(date.getMonth() + 1);

    let day = getCurrent(date.getDate());

    let hour = getCurrent(date.getHours());

    let min = getCurrent(date.getMinutes());

    function getCurrent(val) {
        if (val < 10) {
            val = '0' + val;
        }
        return val;
    }
    return date.getFullYear() + '/' + month + '/' + day + ' ' + hour + ':' + min;
}

