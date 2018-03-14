
    
    var images = ['images/imovie.png','images/premiere.png'];
    var caption = ['IMovie','Adobe Premiere'];
    var link = ['https://www.apple.com/imovie/','http://www.adobe.com/products/premiere.html'];
    
    function next(){
        var current = document.getElementById("change").getAttribute("src");
        var index=0;
        for(i=0;i<images.length;i++){
            if(current==images[i]){
                
                index=i;
            }
        }
        current=images[(index+1)%images.length];
        document.getElementById("change").src=current;
        document.getElementById("changecap").textContent=caption[(index+1)%images.length];
        document.getElementById("changelink").href=link[(index+1)%link.length];
    }
    
    function prev(){
        var current = document.getElementById("change").getAttribute("src");
        var index=0;
        for(i=0;i<images.length;i++){
            if(current==images[i]){
                
                index=i;
            }
        }
        
        if(index-1<0){
            current=images[images.length-1];
            document.getElementById("changecap").textContent=caption[caption.length-1];
             document.getElementById("changelink").href=link[link.length-1];
             document.getElementById("change").src=current;
            
        }else{
        current=images[(index-1)%images.length];
        document.getElementById("changecap").textContent=caption[(index-1)%caption.length];
        document.getElementById("changelink").href=link[(index-1)%link.length];
         document.getElementById("change").src=current;
        }
       
       
        
    }
    
    
    
    
