const purchasePrice = document.querySelector("#purchaseprice");
const stockQuantity = document.querySelector("#stockquantity");
const currentPrice = document.querySelector("#currentprice");

const checkButton = document.querySelector("#check");

const outputDiv = document.querySelector(".output");




checkButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Check Button is Clicked");

    const purchasePriceNum = Number(purchasePrice.value);
    const stockQuantityNum = Number(stockQuantity.value);
    const currentPriceNum = Number(currentPrice.value);



    if (purchasePriceNum == 0 || currentPriceNum == 0) {

        return alert("Enter Valid Input");
    }




    if (currentPriceNum > purchasePriceNum) {

        const profit = (currentPriceNum - purchasePriceNum) * stockQuantityNum;
        const profitPercent = ((currentPriceNum - purchasePriceNum) * 100 / purchasePriceNum);

        outputDiv.innerHTML = `<div class="result-div" style="width:100%"><h1>Your Profit is ${profitPercent}% and that is rupees ${profit}</h1></div>`;

        if (profitPercent > 50) {
            document.body.style.backgroundColor = "green";
        }

    } else {
        const loss = (purchasePriceNum - currentPriceNum) * stockQuantityNum;
        document.body.style.backgroundColor = "red";
        const lossPercentage = ((purchasePriceNum - currentPriceNum) * 100 / purchasePriceNum);

        outputDiv.innerHTML = `<div class="result-div" style="width:100%"><h1>Ohh you have a Loss of ${lossPercentage}% and that is rupees ${loss}</h1></div>`;


        if (lossPercentage > 50) {
            document.body.style.backgroundColor = "orange";
        }
    }
})