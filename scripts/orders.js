import { getCustomOrders, addCustomOrder, getColors, getInteriorSeats, getTechPackages, getWheels } from "./database.js"

const add = (number1, number2, number3, number4) => {
    let result = number1 + number2 + number3 + number4
    return result
}

const buildOrderListItem = (order) => {
    if (order.id !== 0) {
        const colors = getColors()
        const interiorSeats = getInteriorSeats()
        const techPackages = getTechPackages()
        const wheels = getWheels()

        // Remember that the function you pass to find() must return true/false
        const foundColor = colors.find(
            (color) => {
                return color.id === order.colorId
            }
        )

        const foundInteriorSeat = interiorSeats.find(
            (interiorSeat) => {
                return interiorSeat.id === order.interiorId
            }
        )

        const foundTechPackage = techPackages.find(
            (techPackage) => {
                return techPackage.id === order.packageId
            }
        )

        const foundWheel = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )
        let totalCost = 0

        totalCost += add(foundColor.price, foundInteriorSeat.price, foundTechPackage.price, foundWheel.price)
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })


        return `<li>
        Order #${order.id} was placed on ${order.timeStamp} for a total cost of ${costString}
    </li>`
    }
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }

    }
)