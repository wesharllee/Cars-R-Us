import { getWheels, setWheel } from "./database.js"
const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(changeEvent.target.value))
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select wheels</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheelType}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
