// This works; attempting a different solution below.
const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < arr.length; i++) {
        for (let item of args) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};
//Below doesn't work, don't know why.
// const removeFromArray = function (arr, ...args) {
//     return arr.filter((item) => {
//         for (const arg of args) {
//             item !== arg;
//         }
//     })
// }

// Do not edit below this line
module.exports = removeFromArray;
