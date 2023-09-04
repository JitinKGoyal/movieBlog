export const capitalize = (text = '') => {
    const withSpaces = text.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Capitalize the first letter of each word.
    return withSpaces.replace(/\b\w/g, char => char.toUpperCase());
}