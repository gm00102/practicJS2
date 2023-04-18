let i=0;
function fun1() {
    const range=document.getElementById("r1")
    const paragraph=document.getElementById("p")
    paragraph.innerHTML=range.value
    if(range.value>=80){
        alert("Куда разогнался")
        range.value=0
        paragraph.innerHTML="Не все так просто))"
        i+=1
    }
    if(i==3){
        alert("Это не возможно, можешь не стараться")
        i=0
    }  
}
