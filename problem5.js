// publicBusFare

var passengers = 62;

function publicBusFare(value) {
    var reserverdBus = value - 50;
    var microBus = Math.abs(reserverdBus) - 11;
    var localBus = Math.abs(microBus) * 250;
    if (reserverdBus < 0) {
        return 'Everyone has succeeded in sitting at Reserverd Bus';
    }
    else if (microBus < 0){
        return 'Everyone has succeeded in sitting at Micro Bus';
    }
    else{
        return 'Expenses of all passengers on the Local bus is', localBus;
    }
        
}
var input = publicBusFare(passengers);
var output = input;
console.log(output);


