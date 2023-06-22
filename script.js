// KWAZI ZUNGU
// Vending Machine Simulator

//MODEL
// For initial variables, arrays, objects, etc.
let currentBalance = 50;


const currentBalanceText = document.getElementById("currentBalance");
const purchaseDetailsText = document.getElementById("purchaseDetails");
let balanceDetails = document.getElementById("balanceDetails");
let cart = document.getElementById("cart");


let items = [
    {itemName: "Softdrink", itemPrice: "15", itemImage: "colddrink.webp", itemCounter: 0, itemCartLabel: null},
    {itemName: "Sandwich", itemPrice: "25", itemImage: "sandwich.jpg", itemCounter: 0, itemCartLabel: null},
    {itemName: "Cupcake", itemPrice: "10", itemImage: "cupcake.jpg", itemCounter: 0, itemCartLabel: null},
    {itemName: "Chocolate Bar", itemPrice: "17", itemImage: "6001065034027.jpg", itemCounter: 0, itemCartLabel: null}
];

const rands = [1, 2, 5, 10, 20, 50, 100, 200]; //Valid ZAR bank notes

// VIEW 
//For loading into cart
function loadCart(item){
    if( item.itemCounter == 0){
        item.itemCounter += 1; //helps keep track of how much of each element is in cart
        let itemDiv = document.createElement("div");
        let itemImageView = document.createElement("img");
        let itemLabel = document.createElement("div");

        itemDiv.className = "cartItem";
        itemImageView.src = item.itemImage;
        itemLabel.innerText = item.itemCounter + " x " + item.itemName;
        itemLabel.className = "itemLabel";
        item.itemCartLabel = itemLabel; // for unique identification of item by the counter

        itemDiv.appendChild(itemImageView);
        itemDiv.appendChild(itemLabel);
        cart.appendChild(itemDiv);
    } else{
        item.itemCounter += 1;
        item.itemCartLabel.innerText = item.itemCounter + " x " + item.itemName; 
    };
};

// CONTROLS
//
function buyItem(item){ //Accepts an object from items array
    if ( currentBalance >= item.itemPrice ){
        currentBalance -= item.itemPrice;
        currentBalanceText.innerText = currentBalance;
        purchaseDetailsText.innerText = "You bought a "+item.itemName+"\nYour change:\n";

        if(currentBalance>2 && currentBalance<5){
            two(currentBalance);
        } else if(currentBalance>5 && currentBalance<10){
            five(currentBalance);
        } else if(currentBalance>10 && currentBalance<20){
            ten(currentBalance);
        } else if(currentBalance>20 && currentBalance<50){
            twenty(currentBalance);
        } else if(currentBalance>50 && currentBalance<100){
            fifty(currentBalance);
        } else if(currentBalance>100 && currentBalance<200){
            hundred(currentBalance);
        } else if(rands.includes(currentBalance)){ // If change is a valid ZAR bank note
            purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R"+currentBalance;
        } else if( currentBalance == 0 ){
            purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R0";
        };

        // Load selected item onto cart 
        loadCart(item);

    } else{ //This will create the getCash button
        if(document.body.contains(document.getElementById("getCashButton"))){ //This if-statement helps in avoiding duplicate 'getCash' buttons
            purchaseDetailsText.innerText = "Not enough funds for purchase.\nPress 'Get Cash' to win any ZAR bank note.";
        } else {
            purchaseDetailsText.innerText = "Not enough funds for purchase.\nPress 'Get Cash' to win any ZAR bank note.";
            let getCashButton = document.createElement("button");
            getCashButton.id = "getCashButton";
            getCashButton.innerText = "Get Cash";
            getCashButton.onclick = getCash;
            balanceDetails.appendChild(getCashButton);
        };
    };
};

function getCash(){ // Randomly adds a bank note from rands array
    const randomNote = Math.floor(Math.random()*rands.length);
    currentBalance += rands[randomNote];
    currentBalanceText.innerText = currentBalance;
    purchaseDetailsText.innerText = "You won R"+rands[randomNote]+"\nNew Balance: R"+currentBalance;

    //getCash Button is removed after cash is recieved
    document.getElementById("getCashButton").remove();
};