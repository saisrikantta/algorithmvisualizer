export const mergeSort = array =>
{
    if(array.length === 1)
    {
        return array;
    }
    const mid = floor(array.length/2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    let sorted = [];
    let i = 0, j = 0;
    while(i < left.length && j < right.length)
    {
        if(left[i] < right[j])
        {
            sorted.push(left[i++]);
        }
        else if(right[j] < left[i])
        {
            sorted.push(right[j++]);
        }
    }
    while(i < left.length)
    {
        sorted.push(left[i++]);
    }
    while(j < right.length)
    {
        sorted.push(right[j++]);
    }
    return sorted;
};