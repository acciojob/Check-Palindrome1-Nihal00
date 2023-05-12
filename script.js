// complete the given function

function palindrome(str){

	let strJoin = str.split('').join('');

	let len = Math.floor(strJoin.length/2);

	for(let i = 0; i < len; i++){
		if(strJoin[i] !== strJoin[len-1-i]){
			return false;
		}
	}

	return true;
	
}
module.exports = palindrome
