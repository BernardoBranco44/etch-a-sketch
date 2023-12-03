const container = document.querySelector(".container")
const button = document.querySelector(".change-btn")

button.addEventListener("click", () => changeGrid())

function changeGrid() {
    console.log("click")
    let gridSize = prompt("Number of squares per side", "Max of 100")
    if (gridSize < 101) {
        container.textContent = ""
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement("div");
            container.appendChild(div)
            div.style.width = `${100/gridSize}%`
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "white"
            })
            div.addEventListener("mouseleave", () => {
        
            })
        }
    } else {
        changeGrid()
    }
}

// for (let i = 0; i < 256; i++) {
//     const div = document.createElement("div");
//     container.appendChild(div)
//     div.style.width = `${100/16}%`
//     div.addEventListener("mouseenter", () => {
//         div.style.backgroundColor = "white"
//     })
//     div.addEventListener("mouseleave", () => {

//     })
// }