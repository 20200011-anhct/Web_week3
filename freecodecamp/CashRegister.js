//Unit 5: Cash Register
function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        { name: "ONE HUNDRED", value: 100 },
        { name: "TWENTY", value: 20 },
        { name: "TEN", value: 10 },
        { name: "FIVE", value: 5 },
        { name: "ONE", value: 1 },
        { name: "QUARTER", value: 0.25 },
        { name: "DIME", value: 0.1 },
        { name: "NICKEL", value: 0.05 },
        { name: "PENNY", value: 0.01 }
    ];


    let changeDue = cash - price;
    let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);
    if (totalCID === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    let change = [];
    for (let i = 0; i < currencyUnits.length; i++) {
        const currency = currencyUnits[i];
        let currencyAmount = 0;

        // Iterate through cash in drawer to find currency
        for (let j = 0; j < cid.length; j++) {
            if (cid[j][0] === currency.name) {
                currencyAmount = cid[j][1];
                break;
            }
        }

        let usedCurrency = 0;
        while (changeDue >= currency.value && currencyAmount > 0) {
            changeDue -= currency.value;
            changeDue = Math.round(changeDue * 100) / 100;
            currencyAmount -= currency.value;
            usedCurrency += currency.value;
        }

        if (usedCurrency > 0) {
            change.push([currency.name, usedCurrency]);
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);