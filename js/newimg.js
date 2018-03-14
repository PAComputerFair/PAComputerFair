

function over(){
  
  TweenMax.to("#newpop", 0.3, {rotation:360, scale:1.25, delay:0.15})
  
}



function out(){
 
  TweenMax.to("#newpop", 0.3, {rotation:0, scale:1, overwrite:"all"});
}
$(document).ready(function(){
  
  
  TweenMax.to(".lol",0,{x:-70,y:16});
  
})