import { getInteriorSeats, setInterior } from "./database.js"
const interiorSeats = getInteriorSeats()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const InteriorSeats = () => {
    let html = "<h2>Interior</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior</option>'

    const arrayOfOptions = interiorSeats.map( (interiorSeat) => {
            return `<option value="${interiorSeat.id}">${interiorSeat.interior}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
