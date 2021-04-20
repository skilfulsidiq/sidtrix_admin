import axios from "axios"

// Action to get products list

export function addCart({
    commit,
    getters
}, payload) {
    let cart = getters.cart
    cart.push(payload)
    commit("setCart", cart)
}

export function removeCart({
    commit,
    getters
}, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}