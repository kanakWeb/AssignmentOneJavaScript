//Problem No.3:  picnicBudget

function picnicBudget(people) {




    if (people <= 0) {

        return 'Please enter positve number'

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