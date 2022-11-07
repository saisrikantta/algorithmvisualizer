export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    QuickSort(array, 0, array.length - 1, animations);
    return animations;
}

export function QuickSort(array, low, high, animations)
{  
    if(low >= high)
    {
        return;
    }
    var pivotidx = partition(array, low, high, animations);
    QuickSort(array, low, pivotidx - 1, animations);
    QuickSort(array, pivotidx + 1, high, animations);
}

export function partition(array, low, high, animations)
{
    var pivot = array[low];
    var count = 0;
    for(let i = low + 1; i <= high; i++) //count no. of elements lesser than pivot
    {
        if(array[i] <= pivot)
        {
            count++;
        }
    }
    var pivotIndex = low + count;
    animations.push([pivotIndex, low]);
    animations.push([pivotIndex, low]);
    animations.push([pivotIndex, low, array[low], array[pivotIndex]]);
    var temp = array[pivotIndex];
    array[pivotIndex] = array[low];
    array[low] = temp;
    var i = low, j = high;
    while(i < pivotIndex && j > pivotIndex)
    {
        while(i < pivotIndex && array[i] <= array[pivotIndex])
        {
            i++;
        }
        while(j > pivotIndex && array[j] > array[pivotIndex])
        {
            j--;
        }
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([i, j, array[j], array[i]]);
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return pivotIndex;
}