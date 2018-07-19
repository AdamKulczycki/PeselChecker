let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
let sex = document.getElementById('sex');
let information = document.getElementById('information');

function witchCentury (MonthNumber){
	let numberOfMonth = Number(MonthNumber);
	if(  92 >= numberOfMonth && numberOfMonth >=81){
		let ret = "18" + (numberOfMonth-80);
		return ret;
	}
	else if( 12 >= numberOfMonth && numberOfMonth >= 1){
		return "19" + numberOfMonth;
	}
	else if( 32 >= numberOfMonth && numberOfMonth >= 21){
		let ret = "20" + (numberOfMonth-20);
		return ret;
	}
	else if( 52 >= numberOfMonth && numberOfMonth >= 41){
		let ret = "21" + (numberOfMonth-40);
		return ret;
	}
	else if( 72 >= numberOfMonth && numberOfMonth >= 61){
		let ret = "22" + (numberOfMonth-60);
		return ret;
	}
	else{
		console.log("ochuj");
	}
}
function controlSum(StringNumber){
	let sum = Number(StringNumber[0])*9 + 
	Number(StringNumber[1])*7 +
	Number(StringNumber[2])*3 +
	Number(StringNumber[3])*1 +
	Number(StringNumber[4])*9 +
	Number(StringNumber[5])*7 +
	Number(StringNumber[6])*3 +
	Number(StringNumber[7])*1 +
	Number(StringNumber[8])*9 +
	Number(StringNumber[9])*7;
	if( sum % 10 === Number(StringNumber[10])){
		return true;
	}
	else{
		return false;
	}
}
function click(){
	let input = document.getElementById('input').value;
	let regex=/^[0-9]{11}$/g;
	if(!input.match(regex) || !controlSum(input)){
		information.style.display = "inline";
		day.innerText = "";
		month.innerText = "";
		year.innerText = "";
		sex.innerText = "";
	}
	else{
		day.innerText = input[4] + input[5];
		let centuryAndMonth = witchCentury(input.slice(2,4));
		month.innerText = centuryAndMonth.slice(2,4);;
		year.innerText = centuryAndMonth.slice(0,2) + input[0] + input[1];
		if(input[9] % 2 === 1){
			sex.innerText = "Male";
		}
		else{
			sex.innerText = "Female";
		}
		information.style.display = "none";
	}
}

let button = document.getElementById('button');
button.addEventListener("click", click )