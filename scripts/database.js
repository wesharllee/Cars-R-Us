const database = {
    colors: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 1000 },
        { id: 3, color: "Firebrick Red", price: 1200 },
        { id: 4, color: "Spring Green", price: 1 }
    ],
    interiorSeats: [
        { id: 1, interior: "Beige Fabric", price: 250 },
        { id: 2, interior: "Charcoal Fabric", price: 350 },
        { id: 3, interior: "White Leather", price: 400 },
        { id: 4, interior: "Black Leather", price: 450 }
    ],
    techPackages: [
        { id: 1, package: "Basic Package", price: 150 },
        { id: 2, package: "Navigation Package", price: 250 },
        { id: 3, package: "Visibilty Package", price: 350 },
        { id: 4, package: "Ultra Package", price: 450 }
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 650 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 700 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 950 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 1000 }
    ],
    customOrders: [
        {
            id: 0,
            colorId: 1,
            interiorId: 1,
            packageId: 1,
            wheelId: 1,
            timeStamp: 1614659931693

        }
    ],
    orderBuilder: {}
}

export const getColors = () => {
    return database.colors.map(color => ({ ...color }))
}

export const getInteriorSeats = () => {
    return database.interiorSeats.map(interiorSeat => ({ ...interiorSeat }))
}

export const getTechPackages = () => {
    return database.techPackages.map(techPackage => ({ ...techPackage }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getCustomOrders = () => {
    return database.customOrders.map(customOrder => ({ ...customOrder }))
}

export const getCurrentOrder = () => {
    return database.orderBuilder
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.packageId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    if ("colorId" in database.orderBuilder &
        "interiorId" in database.orderBuilder &
        "packageId" in database.orderBuilder &
        "wheelId" in database.orderBuilder === true) {
        const newOrder = { ...database.orderBuilder }
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
        newOrder.timeStamp = Date.now()
        database.customOrders.push(newOrder)
        database.orderBuilder = {}
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}