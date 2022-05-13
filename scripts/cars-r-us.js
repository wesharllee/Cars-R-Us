import { Colors } from "./colors.js"
import { InteriorSeats } from "./interior-seats.js"
import { TechPackages } from "./technology-packages.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"


export const carsDisplay = () => {
    return `
        <h1 class="header">
        <div class="headertitle">Cars-R-Us</div>
        </h1>
        <article class="choices">
            <section class="options">
                ${Colors()}

            
            </section>
            <section class="options">
                ${InteriorSeats()}

            </section>
            <section class="options">
                ${TechPackages()}
            </section>
            <section class="options">
                ${Wheels()}

            
            </section>
        </article>
        
        <article class="customTitle">
        <h2>Customize Your Ride</h2>
        </article>

        <article class="button">
            <button id="orderButton">Create Custom Order</button>
        </article>
        
        <article class="customOrders">
            <h3>Order Details</h3>
            ${Orders()}
        </article>
    `
}