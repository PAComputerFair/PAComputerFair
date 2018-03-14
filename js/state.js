$(document).ready(function(){
	
	var controller = new ScrollMagic.Controller();
	
	var ourScene = new ScrollMagic.Scene({
		triggerElement:"#when ",
		triggerHook:0.8,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#when','isActive')
	
	
	.addTo(controller);
		var ourScene2 = new ScrollMagic.Scene({
		triggerElement:"#when2 ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#when2','isActive')
	
	
	.addTo(controller);
		var ourScene3 = new ScrollMagic.Scene({
		triggerElement:"#one ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#one','isActive')
	
	
	.addTo(controller);
	
		var ourScene4 = new ScrollMagic.Scene({
		triggerElement:"#two ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#two','isActive')
	
	
	.addTo(controller);
		var ourScene5 = new ScrollMagic.Scene({
		triggerElement:"#three ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#three','isActive')
	
	
	.addTo(controller);
		var ourScene6 = new ScrollMagic.Scene({
		triggerElement:"#four ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#four','isActive')
	
	
	.addTo(controller);
		var ourScene6 = new ScrollMagic.Scene({
		triggerElement:"#five ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#five','isActive')
	
	
	.addTo(controller);
		var ourScene7 = new ScrollMagic.Scene({
		triggerElement:"#six ",
		triggerHook:0.6,
		reverse:false
	})
    /*	.addIndicators({
		name:'yeet',
		colorTrigger:'black',
		colorStart:'red',
		colorEnd:'pink'
		
	})*/
	.setClassToggle('#six','isActive')
	
	
	.addTo(controller);
});