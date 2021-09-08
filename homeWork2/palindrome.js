let strLength = string.length;
let string = prompt('Enter string: ');
let value = palindrome(string);

function palindrome(string) {
    for (let i = 0; i < strLength / 2; i++) {
        if (string[i] !== string[strLength - 1 - i]) {
            alert('Not a palindrome');
        }
    }
    alert('Palindrome');
}