const container = document.querySelector(".container")
const button = document.querySelector(".change-btn")

button.addEventListener("click", () => changeGrid())

function changeGrid() {
    let gridSize = prompt("Number of squares per side", "Max of 100")
    if (gridSize < 101) {
        container.textContent = ""
        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement("div");
            container.appendChild(div)
            div.style.width = `${100/gridSize}%`
            div.style.opacity = 0
            let op = 0
            div.addEventListener("mouseenter", () => {
                op += 0.1
                if (div.style.opacity == 0) {
                    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
                }
                if (div.style.opacity < 1) {
                    div.style.opacity = op
                }
            })
            div.addEventListener("mouseleave", () => {
        
            })
        }
    } else {
        changeGrid()
    }
}