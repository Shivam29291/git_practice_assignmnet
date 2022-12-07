function cheakprime(num){
let count=0;
for(let i= 1;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count>=2){
return true;
}
return false;
}
let ans =cheakprime(13);
if(ans==true){
console.log("Prime")
}else{
console.log("Not Prime")
}