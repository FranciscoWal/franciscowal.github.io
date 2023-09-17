var btnPE=document.getElementById("btnPE");
var btnBlog=document.getElementById("btnBlog");



btnPE.addEventListener("click", ()=>{

    var h1=document.getElementById("h1");
    var h2=document.getElementById("h2");
    
        if(h1.className=="no"){
            h1.classList.add("si");
            h1.classList.remove("no");
        }
        if(h2.className=="si"){
            h2.classList.remove("si");
            h2.classList.add("no");


        }
});
btnBlog.addEventListener("click",()=>{
    if(h1.className=="si"){
        h1.classList.remove("si");
        h1.classList.add("no");

    }
    if(h2.className=="no"){
        h2.classList.add("si");
        h2.classList.remove("no");
        
    }
 
});


