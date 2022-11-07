import React from "react";
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js'
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js'
import {getQuickSortAnimations} from "../SortingAlgorithms/QuickSort.js";
import {getHeapSortAnimations } from "../SortingAlgorithms/HeapSort.js";
import './SortingVisualizer.css'
import Timer from "./Timer"


class SortingVisualizer extends React.Component
{
    constructor(props) //Constructor to set up default values of the component
    {
        super(props)
        this.state = {
            array: []
        };
    }
    

    componentDidMount() { //Called when the component first mounts.
        this.resetArray();
    }

    randomInteger(a, b) { //Generates Random integer between a to b
        return Math.floor(Math.random() * (b - a + 1));
    }

    resetArray() {          //Called when the generate new array button is clicked
        const array = [];
        for(let i = 0; i < 130; i++) {
            array.push(this.randomInteger(5, 550)); //Allows duplicate values as Math.random() generates pseudorandom values
        }
    this.setState({array}); //Sets the state of the array after the array is populated
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barOneHeight}px`;
                    barTwoStyle.height = `${barTwoHeight}px`;
                }, i * 5);
            }
        }
    } 

    mergeSort() 
    {
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 5);
            }
        }
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barOneHeight}px`;
                    barTwoStyle.height = `${barTwoHeight}px`;
                }, i * 5);
            }
        }
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            }
            else
            {
                setTimeout(() => {
                    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barOneHeight}px`;
                    barTwoStyle.height = `${barTwoHeight}px`;
                }, i * 5);
            }
        }
    }
    render() { //returns Component JSX to App.js
        const {array} =  this.state;
        return (
            <div className="container">
                {array.map((value, idx) => ( 
                    <div 
                    className="array-bar" 
                    key = {idx} 
                    style = {{height: `${value}px`}}>
                    </div>
                ))}
            <button onClick={() => this.resetArray()}>Generate new Array</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <Timer></Timer>
            </div>
        )
    }
}

export default SortingVisualizer