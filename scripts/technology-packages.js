import { getTechPackages, setTech } from "./database.js"
const techPackages = getTechPackages()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTech(parseInt(changeEvent.target.value))
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption)  // "1" or "2"
        }
    }
)

export const TechPackages = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techPackages.map( (techPackage) => {
            return `<option value="${techPackage.id}">${techPackage.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}