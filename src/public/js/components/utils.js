function applyToAllSiblings(node, callback) {
    node.parentNode.childNodes.forEach(child => {
        if (child != node) {
            callback(child);
        }
    });
}

function applyToAllElementSiblings(node, callback) {
    applyToAllSiblings(node, sibling => {
        if (sibling.nodeType == Node.ELEMENT_NODE) {
            callback(sibling);
        }
    })
}

export function addClass(element, ...clazz) {
    element.classList.add(...clazz);
}

export function removeClass(element, ...clazz) {
    element.classList.remove(...clazz);
}

export function addSiblingsClass(element, ...clazz) {
    applyToAllElementSiblings(element, sibling => sibling.classList.add(...clazz));
}

export function removeSiblingsClass(element, ...clazz) {
    applyToAllElementSiblings(element, sibling => sibling.classList.remove(...clazz));
}

export function getComputedStyle(element, name) {
    return window.getComputedStyle(element).getPropertyValue(name);
}