const images=document.querySelectorAll('.images img');
images.forEach(img=>{
   
    img.addEventListener('click',(e)=>{
        if(e.target.tagName=='IMG'){
             img.remove();
        } 
        console.log(e.target.tagName);
      
    })}
)