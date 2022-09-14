const inputInitialPrice = document.querySelector("#input-initial");
const inputQuantity = document.querySelector("#input-quantity");
const inputCurrentPrice = document.querySelector("#input-current");
const btnSubmit = document.querySelector("#btn-submit");
const message = document.querySelector("#output-message");

function clickHandler(){
    if(inputCurrentPrice.value === '' || inputInitialPrice.value === '' || inputQuantity.value ===''){
        message.innerText = "Please enter all the fields"
    }
    else if(Number(inputInitialPrice)<=0 || Number(inputQuantity)<=0 || Number(inputCurrentPrice)<=0){
        message.innerText = "All feilds should be atleast greater than zero";
    }
    else{
        calculateProfitOrLoss(Number(inputInitialPrice.value),Number(inputQuantity.value),Number(inputCurrentPrice.value))
    }
}

function calculateProfitOrLoss(initial,quantity,current){
    if(current > initial){
        var profit = (current - initial)*quantity;
        var profitPercent = ((current-initial)/initial)*100
        message.innerText = `You have earned the profit of ${profit} and profit percentage is ${profitPercent.toFixed(2)}%`
        document.body.style.backgroundColor ="#0FFF50";
    }
    else if(current < initial){
        var loss = (initial-current)*quantity;
        var lossPercent = ((initial-current)/initial)*100
        message.innerText = `You have incured the loss of ${loss} and loss percentage is ${lossPercent.toFixed(2)}%`
        document.body.style.backgroundColor ="#DC143C";
    }
    else{
        message.innerText = "No pain, No gain! No gain, No pain !!"
        document.body.style.backgroundColor="#f1f5f9"
    }
}

btnSubmit.addEventListener('click',clickHandler);


