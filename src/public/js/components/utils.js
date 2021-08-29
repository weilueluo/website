export function getStyle(element, property) {
    return window.getComputedStyle(element).getPropertyValue(property);
}

export function getCssValue(varName) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(varName);
}

export function findAllSiblings(node, nodeFilter = e => true) {
    const siblings = []
    node.parentNode.childNodes.forEach(child => {
        if (child != node && nodeFilter(child)) {
            siblings.push(child);
        }
    });
    return siblings;
}

export function findAllElementSiblings(element) {
    return findAllSiblings(element, e => e.nodeType == Node.ELEMENT_NODE);
}