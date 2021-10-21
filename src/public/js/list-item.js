import { addClass, addClassOnSiblings, removeClassOnSiblings, removeClass } from "./components/utils.js";


(() => {

    const hoverSiblingClass = "list-item-hover-in-siblings";
    const hoverInClass = "list-item-hover-in";
    const hoverOutClass = "list-item-hover-out";
    const mousedownClass = "list-item-mouse-down";

    var clicked = 0;

    document.querySelectorAll(".list-item").forEach(listItem => {
        

        /* click */

        listItem.addEventListener("mousedown", event => {
            addClass(event.target, mousedownClass);
            
            // if mousedown inside but mouseup outside
            document.addEventListener("mouseup", documentEvent => {
                if (!documentEvent.composedPath().includes(event.target)) {
                    removeClass(event.target, mousedownClass);
                }
                clicked++;
                $('#clicked')
                    .css('opacity', 1)
                    .html(`Nothing happened, because it is not ready yet. counter=${clicked}`);
                setTimeout(() => {

                })
            }, { once: true })
        })

        listItem.addEventListener("mouseup", event => {
            removeClass(event.target, mousedownClass);
        })

        /* hover */

        listItem.addEventListener("mouseenter", event => {
            addClass(event.target, hoverInClass);
            removeClass(event.target, hoverOutClass);
            addClassOnSiblings(event.target, hoverSiblingClass, 'pointer-events-none');
        })

        listItem.addEventListener("mouseout", event => {
            removeClass(event.target, hoverInClass);
            addClass(event.target, hoverOutClass);
            removeClassOnSiblings(event.target, hoverSiblingClass, 'pointer-events-none');
        })

        // disable other list item effects when one is playing
        listItem.addEventListener("animationstart", event => {
            addClassOnSiblings(event.target, 'pointer-events-none');
        })

        listItem.addEventListener("animationend", event => {
            removeClassOnSiblings(event.target, 'pointer-events-none');
        })
    })

    // open cv when clicked
    document.querySelector(".list-item-cv").addEventListener('click', event => {
        window.open('assets/cv.pdf', '_blank');
    })
})()