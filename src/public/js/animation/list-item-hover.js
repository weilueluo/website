import { getCssValue, getStyle } from "../modules/utils.js"

$(() => {

    const fromOpacity = getStyle(document.querySelector(".list-item"), "opacity");
    const fromFilter = getStyle(document.querySelector("#background-image"), "filter");
    const toFilter = "grayscale(0%)";
    const toOpacity = "0.3";

    const $listItem = $(".list-item");
    const $backgroundImage = $("#background-image");

    $listItem.on("mouseenter", event => {
        const $target = $(event.target);

        $target.stop().siblings().stop().css({
            opacity: toOpacity
        });

        $backgroundImage.css({
            filter: toFilter,
            "-webkit-filter": toFilter
        })
    });

    $listItem.on("mouseout", event => {
        $(event.target).siblings().stop().css({
            opacity: fromOpacity
        });

        $backgroundImage.css({
            filter: fromFilter
        })
    });
})