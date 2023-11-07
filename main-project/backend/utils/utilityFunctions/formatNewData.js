const removeDuplicateJsons = (data) => {
    let newArray = [];
    data.forEach((movie, i) => {
        let exist = newArray.find(e => e.title === movie.title)
        exist && console.log('loading...', i, exist?.title);
        !exist && newArray.push(movie)
    })

    console.log(newArray.length)
    return newArray
}


function convertKeysToCamelCase(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => convertKeysToCamelCase(item));
    }

    return Object.keys(obj).reduce((acc, key) => {
        const camelCaseKey = key.replace(/_([a-z])/g, (match, group) => group.toUpperCase());
        acc[camelCaseKey] = convertKeysToCamelCase(obj[key]);
        return acc;
    }, {});
}


const moveKeysToTop = (obj) => {

    if (obj.reception?.imdbRating)
        obj.imdbRating = obj.reception.imdbRating
    if (obj.reception?.rottenTomatoRating)
        obj.rottenTomatoRating = obj.reception.rottenTomatoRating

    return obj
}

module.exports = { removeDuplicateJsons, convertKeysToCamelCase, moveKeysToTop }