// complete the given function

function palindrome(str){

	

	let strJoin = str.split(' ').join('').toLowerCase();

	let isPalindrome = true;
	let i = 0, j = strJoin.length-1;

	while (i <= j && isPalindrome) {
		if(strJoin[i] !== strJoin[j]){
			isPalindrome = false;
		}
		i++;
		j--;
	}
	
	return isPalindrome;

	// console.log()
// let len = strJoin.length-1;

// const answer = (strJoin, len) => {

//   let reverseString = "";

//   // for(let i = strJoin.length - 1; i >= 0; i--){
//   //   reverseString += strJoin[i];
//   // }

//    for (let i = len; i >= 0; i--) {
//     // Append the current character to the reversed string.
//     reversedStr += strJoin[i];
//   }

//   return (strJoin === reverseString);
	
}
module.exports = palindrome
