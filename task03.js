export function countGs(inputString) {

    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === 'G') {
            count++;
        }
    }
    return count;
}