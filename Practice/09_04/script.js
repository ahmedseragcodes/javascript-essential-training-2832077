/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


//Setup

const container = document.querySelector(".container");

const allCells = document.querySelectorAll(".cell");

const body = document.querySelector("body");

//Container Hovering 

container.addEventListener("mouseover", ()=>{

    container.style.border="1em solid yellow";
})

container.addEventListener("mouseleave", ()=>{
    container.style.border="none";
})

//Cell Hovering and Clicking

allCells.forEach((cell)=>{

    cell.addEventListener("mouseover", (e)=>{
        cell.style.border="1em solid yellow";
    })

    cell.addEventListener("mouseleave", (e)=>{
        cell.style.border="none";
    })

    cell.addEventListener("click", (e)=>{
        cell.style.backgroundColor="green";
    })
})

//Whole page key to change colors 

document.addEventListener("keydown", (event)=>{
    if (event.code === "Space"){
        
        if (body.style.backgroundColor === "white"){
            body.style.backgroundColor = "aqua";
        } else {
            body.style.backgroundColor = "white";
        }
        
    }
})