function functionshow(){
    console.log("button enabled")
    var a=10;
    var b=15;
    var sum=a+b;
    console.log(sum+"sum");

    const c=21;

    if(c%2==0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
    for( var i=0;i<10; i++){
        console.log(i)  
    }
    var ary=["bike","car","plane","ship",99]
    console.log(ary);
    console.log(ary[0,3]);

    var person={
        Name:"muhammed saheel",
        age : 20,
        place:"malappuram",
    } 
    console.log(person);
    console.log(person.Name);

    var person=[{
        Name:"muhammed saheel",
        age : 20,
        place:"malappuram",
    },
    { Name:"muhammed shakkeeb",
      age :21,
      place:"palakkad" 
    }] 
    console.log(person);
    console.log(person[1].Name);
}

function enable(){
      var input=document.getElementById("inp").value
      document.getElementById("show").innerHTML=input
      
      if(input=="I love you"){
        alert("I love you too")
      }
}

function chng(col){
    document.getElementById("display").style.background=col
}