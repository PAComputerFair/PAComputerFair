$(document).ready(function(){
    
    
  	var controller = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement:"#mainNav ",
		triggerHook:0.8,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#test','zoomin')
	
	
	.addTo(controller);
    	var ourScene2 = new ScrollMagic.Scene({
		triggerElement:"#mainNav ",
		triggerHook:0.8,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#test2','zoomin')
	
	
	.addTo(controller);
    	var ourScene3 = new ScrollMagic.Scene({
		triggerElement:"#mainNav ",
		triggerHook:0.8,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#test3','zoomin')
	
	
	.addTo(controller);
    
})
