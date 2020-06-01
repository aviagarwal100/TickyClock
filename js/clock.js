var clock,d,h,m,s,clr;


function clocky(){
    
    d=new Date()
    h=d.getHours()
    m=d.getMinutes()
    s=d.getSeconds()
    
    
    if(h<=9){
        
        h="0" + h
    }
    if(m<=9){
        
        m="0" + m 
    }
    
    if(s<=9){
        
        s="0" + s
    }
    clock=h+":"+m+":"+s
    clr="#" + h + m + s
    setTimeout(clocky,1000)
    document.getElementById("clock").innerHTML=clock;
    document.body.style.background=clr;
    
}
clocky();