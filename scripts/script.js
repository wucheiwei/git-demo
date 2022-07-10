// 程式碼寫在這裡！

function bmi(height, weight) {
    var w = parseInt(weight);
    var h = parseInt(height)/100;

    return(w/(h*h)).toFixed(2);
}

function calculateBMI() {
   var height =document.querySelector('#bodyHeight').value;
   var weight = document.querySelector('#bodyWeight').value;
   var result =document.querySelector('#resultText');
   var remind = document.querySelector('#remind');
   var reminding =bmi(height, weight)
if((height !="")&&(weight !="")){
result.innerHTML = bmi(height,weight);
    }else{
        alert("請輸入");
    }
 switch(true){
        case  (reminding<18.5):
        console.log (remind.innerHTML=("太輕了"))
        break;

        case(reminding>18.5)&&(reminding<24.9):
		console.log (remind.innerHTML=("正常"))
        break;

        case(reminding>24.9)&&(reminding<29.9):
        console.log(remind.innerHTML=("超重"))
        break;
        
        case(reminding>29.9)&&(reminding<39.9):
        console.log(remind.innerHTML=("肥胖"))
        break;
        
        case(reminding>40):
        console.log(remind.innerHTML=("嚴重肥胖"))
        break;
        
        
    }
}
function remind(reminding){
    
  
    }
