let firstString = "Create a function that will take a String value as first parameter, Number value as second and String value as third. First parameter should be a sentence or set of sentences, second parameter should be a number of letter in each word in the sentence that should be replaced by the third parameter. That function should return updated sentence.";
let secondString = "If it satisfied show “OK” in console, if not, create new file with properties that not satisfied and reason why.";

function decode(firstString, num, st2) {
    let st1 = firstString.split(/(?:,| )+/);
    let st2 = secondString.split(/(?:,| )+/);
    let arr = [];
    let extArr = [];
    for (let a of st1) {
        let word1 = a.slice(num, a.length + 1);
        arr.push(word1);
    }
    for (let a of arr) {
        let word2 = st2.concat(a);
        extArr.push(word2);
        console.log(extArr);
    }
}
decode('Dont worry ;)')