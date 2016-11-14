
/*Problem No 1 */
function solution1(){
var sum = 0;
var num= document.getElementById('val1').value;
for(var i = 0; i<num; i++) {
	if(i%3===0 || i%5===0){
		sum += i;
	} 
  }

	 document.getElementById('result1').innerHTML = sum;
	 return sum;
}
 document.getElementById('result1').innerHTML = solution1();




/* Problem No 2 */
function solution2(){

var limit = document.getElementById('val2').value;
var sum = 0;
var fib=[];
fib[0]=0;
fib[1]=1;
for(var i = 2;i<limit;i++) {
	fib[i] = fib[i-1] + fib[i-2];
		if (fib[i]<limit){
			if(fib[i]%2===0){
			sum += fib[i];
			}
		} 
	}
	

	document.getElementById('result2').innerHTML = sum;
	return sum;

}

	document.getElementById('result2').innerHTML = solution2();
