/* Functions for computing bank note distribution when buyer recieves their change,
i.e this computes the multiplicity of each bank note the machine needs to produce after purchase */


function hundred(value) {
    let mod = value % 100
    if (rands.includes(mod)) {
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R" + mod + "\n";
    } else if (mod > 50 && mod < 100) {
        fifty(mod)
    } else if (mod > 20 && mod < 50) {
        twenty(mod)
    } else if (mod > 10 && mod < 20) {
        ten(mod)
    } else if (mod > 5 && mod < 10) {
        five(mod)
    } else {
        two(mod)
    };
    purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R100" + "\n";
};

function fifty(value) {
    let mod = value % 50;
    if (rands.includes(mod)) {
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R" + mod + "\n";
    } else if (mod > 20 && mod < 50) {
        twenty(mod)
    } else if (mod > 10 && mod < 20) {
        ten(mod)
    } else if (mod > 5 && mod < 10) {
        five(mod)
    }
    else {
        two(mod)
    };
    purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R50" + "\n";
};

function twenty(value) {
    let mod = value % 20;
    let divide = parseInt(value/20);
    if (rands.includes(mod)) {
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R" + mod + "\n";
    } else if (mod > 10 && mod < 20) {
        ten(mod)
    } else if (mod > 5 && mod < 10) {
        five(mod)
    }
    else {
        two(mod)
    };
    purchaseDetailsText.innerText = purchaseDetailsText.innerText + divide +" x R20" + "\n";
}; 

function ten(value) {
    let mod = value % 10;
    if (rands.includes(mod)) {
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R" + mod + "\n";
    } else if (mod > 5 && mod < 10) {
        five(mod)
    }
    else {
        two(mod)
    };
    purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R10" + "\n";
};

function five(value) {
    let mod = value % 5;
    if (rands.includes(mod)) {
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R" + mod + "\n";
    } else {
        two(mod)
    };
    purchaseDetailsText.innerText = purchaseDetailsText.innerText + "1 x R5" + "\n";
};

function two(value) {
    let mod = value % 2;
    const divide = parseInt(value / 2)
    if (mod != 0){
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + divide + " x R2\n1 x R" + mod + "\n";
    } else if( divide==2 ){
        purchaseDetailsText.innerText = purchaseDetailsText.innerText + "2 x R2\n";
    }
};