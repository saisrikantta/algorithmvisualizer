export function merge(nums, start, end) 
{
    var mid = start + (end - start) / 2, x = start;
    var length1 = mid - start + 1, length2 = end - mid;
    var array1 = [], array2 = [];
    const animations = []
    for(let i = 0; i < length1; i++)
    {
        array1.push(nums[x++]);
    }
    for(let j = 0; j < length2; j++)
    {
        array2.push(nums[x++]);
    }
    var i = 0, j = 0;
    x = start;
    while(i < length1 && j < length2)
    {
        if(array1[i] < array2[j])
        {
            nums[x++] = array1[i++];
        }
        if(array2[j] < array1[i])
        {
            nums[x++] = array1[j++];
        }
    }
    while(i < length1)
    {
        nums[x++] = array1[i];
        i++;
    }
    while(j < length2)
    {
        nums[x++] = array2[j];
        j++;
    }
}

export function mergeSort(array, l, r) {
    const animations = [];
    if(l >= r) return;
    var mid = l + (r - l) / 2;
    mergeSort(array, l, mid);
    mergeSort(array, mid + 1, r);
    merge(array, l, r);
}