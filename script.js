// complete the given function

function palindrome(str){

	let strJoin = str.split('').join('');

	let len = strJoin.length-1;

	const answer = (strJoin, len) => {
		let revStr = "";

		for(let i = len; i >= 0; i--){
			revStr += strJoin[i];
		}

		if(revStr === strJoin){
			return true;
		}else {
			return false;
		}
	}

	return answer;
	
}
module.exports = palindrome
