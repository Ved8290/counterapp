const sum=document.getElementById("add");
const sub=document.getElementById("sub");
const value=document.getElementById("value");
const reset=document.getElementById("reset");

sub.addEventListener("click", () => {
    const counter = Number(value.innerText);
      value.innerText = counter - 1;
    
  });

  sum.addEventListener("click", () => {
    const counter = Number(value.innerText);
      value.innerText = counter +1;
  });

  reset.addEventListener("click",()=>{
    value.innerText= 0 ;
  }
  )