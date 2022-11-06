export function getHeapSortAnimations(array) {
    var animations = [];
    if(array.length <= 1) {
        return array;
    }
    HeapSort(array, animations);
    return animations;
}

export function maxHeapify(array, i, n, animations)
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
    animations.push([i, greatest]);
    animations.push([i, greatest]);
    if(greatest !== i)
    {
        animations.push([i, greatest, array[greatest], array[i]]);
        var temp = array[greatest];
        array[greatest] = array[i];
        array[i] = temp;
        maxHeapify(array, greatest, n, animations);
    }
    else
    {
        animations.push([i, greatest, array[i], array[greatest]]);
    }
}

export function buildHeap(array, animations)
{
    var n = array.length;
    var index = n / 2 - 1;
    for(let i = index; i >= 0; i--)
    {
        maxHeapify(array, i, n, animations);
    }
}

export function HeapSort(array, animations)
{
    var n = array.length;
    if(n === 1)
    {
        return;
    }
    buildHeap(array, animations);
    for(var i = 0; i < n - 1; i++)
    {
        animations.push([0, n - i - 1]);
        animations.push([0, n - i - 1]);
        animations.push([0, n - i - 1, array[n - i - 1], array[0]]);
        var temp = array[n - i - 1];
        array[n - i - 1] = array[0];
        array[0] = temp;
        maxHeapify(array, 0, n - i - 1, animations);
    }
}