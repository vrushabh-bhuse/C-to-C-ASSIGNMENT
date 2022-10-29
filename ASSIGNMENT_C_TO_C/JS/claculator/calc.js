function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=Formatted(num);
	}	
}
function Formatted(num){
	if(num=="-"){
		return "";
	}
	var n = (num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	 return (num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
				document.getElementById("calc-history-box").innerText='';

			}
		}
		else{


			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					console.log(history);
					console.log(result);

					printOutput(result);
					if(document.getElementById("calc-history-box").innerText.toString() != ''){
						var text = document.getElementById("calc-history-box").innerText;
						console.log(text);
						text = text + "\n" + history + ' = ' +result;
						document.getElementById("calc-history-box").innerText = text;
					}					
					else{
						document.getElementById("calc-history-box").innerText=history + ' = ' +result;
					}

					printHistory("");
					
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
console.log(number);
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			console.log(this.id);
			output=output+this.id;
			console.log(output);
			printOutput(output);

		}
	});
}

function fun(){
	// alert('hi');
	if(document.getElementById("output").innerHTML != ''){
		document.getElementById("output").innerHTML = '';

	}
  } 