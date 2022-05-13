import { getColors, setColor } from "./database.js"
const colors = getColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "color") {
            setColor(parseInt(changeEvent.target.value))
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Colors = () => {
    let html = "<h2>Colors</h2>"

    html += '<select id="color">'
    html += '<option value="0">Select a color</option>'

    const arrayOfOptions = colors.map( (color) => {
            return `<option value="${color.id}">${color.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



