import { findAllElementSiblings } from "../modules/utils.mjs";

(() => {
    const fromOpacity = "1";
    const toOpacity = "0.3";
    document.querySelectorAll(".list-item").forEach(listItem => {

        listItem.addEventListener("mouseenter", event => {
            findAllElementSiblings(event.target).forEach(sibling => {
                sibling.style.opacity = toOpacity;
            })
        })

        listItem.addEventListener("mouseout", event => {
            findAllElementSiblings(event.target).forEach(sibling => {
                sibling.style.opacity = fromOpacity;
            })
        })
    })
})()