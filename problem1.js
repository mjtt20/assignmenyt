// radiantoDegree

function radiantoDegree(value) {
    var pi = Math.PI;
    var degree = value * (180 / pi);
    return degree;
}

var radianValue = radiantoDegree(0.017453292519943295);
console.log(radianValue);

// degreetoRadian

function degreetoRadian(value) {
    var pi = Math.PI;
    var radian = value * (pi / 180);
    return radian;
}

var degreeValue = degreetoRadian(1);
console.log(degreeValue);

