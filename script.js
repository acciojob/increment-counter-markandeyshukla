let input=document.getElementById("incrementBtn");
let counter=document.getElementById("counter")
input.value=0;
input.addEventListener("click",()=>{
	alert(input.value);
	input.value++;
	counter.textContent = input.value;
});
