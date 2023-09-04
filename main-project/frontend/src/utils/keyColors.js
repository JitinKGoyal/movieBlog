
export const chooseColor = () => {
    const keyColors = [
        "#C13461", // Dark Pink
        "#9E0F4E", // Dark Magenta
        "#85093D", // Dark Maroon
        "#5F072B", // Dark Burgundy
        // "#47041D", // Dark Ruby
        // "#3A0316", // Dark Raspberry
        // "#2E0210", // Dark Cranberry
        // "#26020B", // Dark Plum
        // "#1E0107", // Dark Bordeaux
        // "#150004"  // Dark Cherry
    ]

    const choosenIndex = Math.floor(Math.random() * keyColors.length);
    return keyColors[choosenIndex];
}