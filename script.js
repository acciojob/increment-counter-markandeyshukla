let input=document.getElementById("incrementBtn");
let counter=document.getElementById("counter")
count=0;
input.addEventListener("click",()=>{
	alert(count)
	count++;
	counter.textContent = count;
});
