// oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const perLiterOfDiesel = 114;
    const perLiterOfPetrol = 130;
    const perLiterOfoctane = 135;

    var diesel = perLiterOfDiesel * dieselQuantity;
    var petrol = perLiterOfPetrol * petrolQuantity;
    var octane = perLiterOfoctane * octaneQuantity;

    var total = diesel + petrol + octane;
    return total;
}
var value = oilPrice(1, 1, 1);
console.log(value);