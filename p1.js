//Problem No.1:   anatoVori

function anaToVori(ana) {
    if (ana <= 0 || typeof ana == 'string') {
        return 'Please enter a positive number or number(Give a number greater than zero)'
    } else if (ana > 0) {
        const Vori = ana * 0.0625;
        return Vori;
    }
}

const TotalVori = anaToVori(64);
console.log(TotalVori)


//Problem No.2:  pandaCost

function pandaCost(singeraQuantity, shamuchaQuantiy, jilapiQuantity) {
    const singeraPrice = 7;
    const shamuchaPrice = 10;
    const jilapiPrice = 15;



    if ((singeraQuantity < 0) || (shamuchaQuantiy < 0) || (jilapiQuantity < 0)) {


        return 'Please enter  positive number '


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


//Problem No.3:  picnicBudget


function picnicBudget(people) {




    if (people <= 0) {

        return 'Please enter positive number'

    } else if (typeof people == 'string') {

        return 'enter a number'

    } else if (people <= 100) {

        const costOff100People = people * 5000;
        return costOff100People;


    } else if (people <= 200) {


        const costOffPer100 = 100 * 5000;
        const remaineCost = people - 100;
        const costOff200People = remaineCost * 4000;

        const totalCostOf = costOffPer100 + costOff200People;
        return totalCostOf;

    } else {
        const costOffPer100 = 100 * 5000;
        const costOff200People = 100 * 4000;
        const remaineCost = people - 200;
        const costOffPer200People = remaineCost * 3000;
        const totalCostOf = costOffPer100 + costOff200People + costOffPer200People;
        return totalCostOf;
    }

}

const totalCost = picnicBudget(300);
console.log(totalCost);


//Problem No.4:  oddFriend

function oddFriend(friendsName) {

    if (friendsName.length === 0) {
        return 'Please enter the value in your array'
    }

    let element = 0;
    let storage = 0;


    for (let i = 0; i < friendsName.length; i++) {
        element = friendsName[i].length
        storage = friendsName[i];
        if (element % 2 != 0) {
            return storage;
        } else {
            continue;
        }

    }

}

const AllFriend = oddFriend(['abir', 'sarker', 'kanak', 'rahim', 'shiplu'])

console.log(AllFriend)