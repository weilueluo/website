(() => {

    // consistent with css
    const listItemHeight = 3; // rem
    const listItemWidth = 15; // rem

    // behaviour var
    const sizeDropFactor = 0.75;
    const listItemHoverHeight = 15; // rem
    const listItemHoverWidth = 75; // rem

    // for each list item
    document.querySelectorAll(".list-item").forEach(listItem => {

        listItem.addEventListener("mousedown", listItemEvent => {
            listItemEvent.target.style.height = (listItemHoverHeight * sizeDropFactor) + "rem";
            listItemEvent.target.style.width = (listItemHoverWidth * sizeDropFactor) + "rem";

        })

        listItem.addEventListener("mouseup", event => {
            event.target.style.height = listItemHoverHeight + "rem";
            event.target.style.width = listItemHoverWidth + "rem";
        })

        listItem.addEventListener("mouseenter", event => {
            event.target.style.height = listItemHoverHeight + "rem";
            event.target.style.width = listItemHoverWidth + "rem";
        })

        listItem.addEventListener("mouseout", event => {
            event.target.style.height = listItemHeight + "rem";
            event.target.style.width = listItemWidth + "rem";
        })
    })

})()