//Problem No.2:  pandaCost

function pandaCost(singeraQuantity, shamuchaQuantiy, jilapiQuantity) {
    const singeraPrice = 7;
    const shamuchaPrice = 10;
    const jilapiPrice = 15;



    if ((singeraQuantity < 0) || (shamuchaQuantiy < 0) || (jilapiQuantity < 0)) {


        return 'Please enter a positive number '


    } else if ((singeraQuantity == 0) && (shamuchaQuantiy == 0) && (jilapiQuantity == 0)) {
        return 'please enter value'

    } else if ((typeof singeraQuantity == 'string') || (typeof shamuchaQuantiy == 'string') || (typeof jilapiQuantity == 'string'))

    {
        return 'Please enter number';

    }


    const totalSingraPrice = singeraPrice * singeraQuantity;
    const totalShamuchaPrice = shamuchaPrice * shamuchaQuantiy;
    const totaljilapiPrice = jilapiPrice * jilapiQuantity;

    totalPandaCost = totalSingraPrice + totalShamuchaPrice + totaljilapiPrice;

    return totalPandaCost;




}

const totalCost = pandaCost(2, 2, 2);
console.log(totalCost)