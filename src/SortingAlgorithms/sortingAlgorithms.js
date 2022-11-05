export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    const auxillaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
    return animations;
}

export function mergeSortHelper(array, start, end, auxillaryArray, animations) {
    if(start === end) return;
    var mid = start + (end - start) / 2;
    mergeSortHelper(array, start, mid, auxillaryArray, animations);
    mergeSortHelper(array, mid + 1, end, auxillaryArray, animations);
    merge(array, start, mid, end, auxillaryArray, animations);
}

export function merge(nums, start, mid, end, auxillaryArray, animations) 
{
    let k = start;
    let i = start;
    let j = mid + 1;
    while(i <= mid && j <= end)
    {
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxillaryArray[i] < auxillaryArray[j])
        {
            animations.push([k, auxillaryArray[i]]);
            nums[k++] = auxillaryArray[i++];
        }
        else
        {
            animations.push([k, auxillaryArray[j]]);
            nums[k++] = auxillaryArray[j++];
        }
    }
    while (i <= mid) 
    {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxillaryArray[i]]);
        nums[k++] = auxillaryArray[i++];
    }
    while(j <= end) 
    {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxillaryArray[j]]);
        nums[k++] = auxillaryArray[j++];
    }
}

