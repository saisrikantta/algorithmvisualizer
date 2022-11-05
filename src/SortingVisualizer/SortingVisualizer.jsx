import React from "react";
import './SortingVisualizer.css'

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

    }

    mergeSort() {

    }

    bubbleSort() {

    }

    heapSort() {
        
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
            </div>
        )
    }

}

export default SortingVisualizer