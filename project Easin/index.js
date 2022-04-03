// sticky header start
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("#header").style.boxShadow= "0px -5px 15px ";
  } else {
    document.querySelector("#header").style.boxShadow= "0px 0px";
  }
}
// sticky header end

//  counter start
let counts=setInterval(updated);
let upto=4000;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===5000)
    {
        clearInterval(counts);
    }
}
//  counter end