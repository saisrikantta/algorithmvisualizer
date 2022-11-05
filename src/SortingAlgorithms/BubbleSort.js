export function getBubbleSortAnimations(array) 
{
    const animations = [];
    var n = array.length;
    for(let i = 0; i < n  - 1; i++)
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if(array[j] > array[j + 1])
            {
                animations.push([j, j + 1, array[j + 1], array[j]]);
                let temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
            else
            {
                animations.push([j, j + 1, array[j], array[j + 1]]);
            }
        }
    }
    return animations;
}