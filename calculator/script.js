function enablenum(val){
    document.getElementById("screen").value+=val

}
function clr(){
      document.getElementById("screen").value=""
}
function equalButton(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}