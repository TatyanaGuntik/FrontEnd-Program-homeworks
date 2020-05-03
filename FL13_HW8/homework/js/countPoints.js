function countPoints(arr) {

    let point = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(':');
        if (arr[i][0] > arr[i][1]) {
            point += 3;
        } else if (arr[i][0] === arr[i][1]) {
            point += 1;
        }
    }
    return point;
}
