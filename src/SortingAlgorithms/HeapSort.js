export function getHeapSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) {
        return animations;
    }
    HeapSort(array);
    return animations;
}

export function maxHeapify(array, i, n)
{
    var leftChild = 2 * i + 1;
    var rightChild = 2 * i + 2;
    var greatest = i;
    if(leftChild >= n && rightChild >= n)
    {
        return;
    }
    if(leftChild < n && array[leftChild] > array[greatest])
    {
        greatest = leftChild;
    }
    if(rightChild < n && array[rightChild] > array[greatest])
    {
        greatest = rightChild;
    }
    if(greatest != i)
    {
        var temp = array[greatest];
        array[greatest] = array[i];
        array[i] = temp;
        maxHeapify(array, greatest, n);
    }
}

export function buildHeap(array)
{
    var n = array.length;
    var index = n / 2 - 1;
    for(let i = index; i >= 0; i--)
    {
        maxHeapify(array, i, n);
    }
}

export function HeapSort(array)
{
    var n = array.length;
    if(n === 1)
    {
        return;
    }
    buildHeap(array);
    for(var i = 0; i < n - 1; i++)
    {
        var temp = array[n - i - 1];
        array[n - i - 1] = array[0];
        array[0] = temp;
        maxHeapify(array, 0, n - i - 1);
    }
}