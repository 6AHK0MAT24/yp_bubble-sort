function bubbleSort(arr) {
    let bobl = true;
    while (bobl) {
        bobl = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                bobl = true;
            }
        }
    }
    return arr;
}

function swap(arr, i, j) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
}
