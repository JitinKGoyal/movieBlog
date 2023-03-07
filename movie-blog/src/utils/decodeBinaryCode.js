export const decodeBinaryImage = (binData) => {
    let decodedData = '';
    for (let i = 0; i < binData.length; i++) {
        decodedData += String.fromCharCode(binData[i]);
    }

    return decodedData
}