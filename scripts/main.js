//remember to git commit every 1 hr or so of coding, its worth saving that stuff
// if you've finished a big piece of the program thats good to commit too
// make sure to always have useful git commit msgs

//git status
//git add [change name]
//git commit -m "msg"
//git push
//git clone
//git pull
//git
//cd..
//cd [folder name]


let savings = document.getElementById("savings");
let add = document.getElementById("add");
let years = document.getElementById("years");
let rate = document.getElementById("rate");

savings.value = "";
add.value = "";
years.value = "";
rate.value = "";


let calcBtn = document.getElementById("calcBtn");
let result = document.getElementById("result");



calcBtn.addEventListener("click", ()=>{
  if(savings.value=="") savings.value = "0";
  if(add.value=="") add.value = "0";
  if(years.value=="") years.value = "0";
  if(rate.value=="")rate.value = "0";
  
  
  let compoundInterest = parseFloat(savings.value);
  if(parseFloat(years.value)>500){
    result.innerHTML = "ERROR: years too high!";
  }else{
    for(let i = 0; i < parseFloat(years.value);i++){
      compoundInterest+=parseFloat(add.value);
      compoundInterest *= ((parseFloat(rate.value)/100)+1);
    }
  
  result.innerHTML = new Intl.NumberFormat('en-US',
   { style: 'currency', currency: 'USD' }).format(compoundInterest);
    
  }
});


