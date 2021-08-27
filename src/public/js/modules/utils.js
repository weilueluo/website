export function getStyle(element, property) {
    return window.getComputedStyle(element).getPropertyValue(property);
}

export function getCssValue(varName) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(varName);
}