export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    QuickSort(array, 0, array.length - 1, animations);
    return animations;
}

export function QuickSort(array, low, high, animations)
{  
    if(low <= high)
    {
        return;
    }
    var pivot = partition(array, low, high, animations);
    QuickSort(array, low, pivot - 1, animations);
    QuickSort(array, pivot + 1, high, animations);
}

export function partition(array, low, high, animations)
{
    var pivot = arr[low];
    var count = 0;
    for(var i = 0; i <= high; i++)
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
    swap(array[pivotIndex], array[low]);
    var i = low, j = high;
    while(i < pivotIndex && j > pivotIndex)
    {
        while(i < pivotIndex && array[i] < array[pivotIndex])
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
        swap(array[i++], array[j--]);
    }
    return pivotIndex;
}