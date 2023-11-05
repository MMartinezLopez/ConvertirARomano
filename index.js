function convertToRoman() {
    let num=document.getElementById("numero").value;
    let rom="";
    const values=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    for (let i=0; i<values.length;i++){
      while (num>=values[i]){
        rom+=roman[i]
        num-=values[i]
      }
    }

    document.getElementById("response").innerHTML = rom;
  }

function convert(){
    if (document.getElementById("numero").value>=4000){
        document.getElementById("response").innerText="El numero debe ser menor a 4000"
    } else{
        convertToRoman()
    }
}