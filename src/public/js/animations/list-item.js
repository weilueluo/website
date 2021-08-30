import { addClass, addSiblingsClass, removeSiblingsClass, removeClass } from "../components/utils.js";


(() => {

    const hoverSiblingClass = "list-item-hover-siblings";
    const hoverClass = "list-item-hover";
    const mousedownClass = "list-item-mouse-down";

    document.querySelectorAll(".list-item").forEach(listItem => {

        listItem.addEventListener("mousedown", event => {
            addClass(event.target, mousedownClass);
            
            // if mousedown inside but mouseup outside
            document.addEventListener("mouseup", documentEvent => {
                if (!documentEvent.composedPath().includes(event.target)) {
                    removeClass(event.target, mousedownClass);
                }
            }, { once: true })
        })

        listItem.addEventListener("mouseup", event => {
            removeClass(event.target, mousedownClass);
        })

        listItem.addEventListener("mouseenter", event => {
            addClass(event.target, hoverClass);
            addSiblingsClass(event.target, hoverSiblingClass);

            // const desc = document.createElement("div");
            // desc.innerHTML = "hey";
            // event.target.insertAdjacentElement("beforeend", desc);
        })

        listItem.addEventListener("mouseout", event => {
            removeClass(event.target, hoverClass);
            removeSiblingsClass(event.target, hoverSiblingClass);
        })
    })

})()