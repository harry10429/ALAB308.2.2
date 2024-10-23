const radius = 5;
// const unit = 'm';
// const radiusInUnit= `${5}${unit}`;
const PI = 3.1415;
let area = PI * radius * radius;
const PlantArea = 0.8;
let NumInitial = 20;
const growthrate = 2;

let area80Percent = area * 0.8;
let area50Percent = area * 0.5;



let numWeek = 3;
let areaOfPlant = 0.8 * NumInitial * numWeek * growthrate;

if (areaOfPlant > area) {
    console.log("Area of Plant can't exceed the area of garden");
} else {
    if (areaOfPlant > area80Percent) {
        console.log("Pruned")

    } else if (areaOfPlant >= area50Percent) {
        console.log("Monitored");
    } else {
        console.log("Planted");

    }
}
function sqrt(a) {
    var x,
        x1 = a / 2;

    do {
        x = x1;
        x1 = (x + (a / x)) / 2;
    } while (x !== x1);
    return x;
}

let PlantInitial2 = 100;
let weektry = 10;
let largerAreaOfPlant = PlantInitial2 * weektry * PlantArea * growthrate;

let expandedGarden = largerAreaOfPlant / 0.8;
console.log("The expanded Garden Area should be at least: " + expandedGarden);

let leastexpandedRadius = sqrt(expandedGarden / PI);

console.log("The expanded radius of Garden should be at least: " + leastexpandedRadius);



try {
    if (PlantInitial2 * PlantArea > area) {
        throw "Oversize Plant area";
    } else if (areaOfPlant > area80Percent) {
        console.log("Pruned")

    } else if (areaOfPlant >= area50Percent) {
        console.log("Monitored");
    } else {
        console.log("Planted");

    }

}
catch (err) {
    console.log("Area of Plant can't exceed the area of garden!")
}

