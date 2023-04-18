function fun1() {
    const range=document.getElementById("r1")
    const div1=document.getElementById("one")
    const body1=document.body

    if(range.value>80){
        body1.style.backgroundColor="red"
    }
    else if(range.value>50){
        body1.style.backgroundColor="green"
    }
    else if(range.value>30){
        body1.style.backgroundColor="pink"
    }
    else if(range.value==0){
        body1.style.backgroundColor="black"
        alert("олех лох")
    }
    else body1.style.backgroundColor="blue"
     
    
}
 