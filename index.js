let data = 0;

let input = document.getElementById("input");
let toMetersFeet = document.getElementById("meter-foot-conv");
let toLitersGallons = document.getElementById("liter-gallon-conv");
let kiloPound = document.getElementById("kilo-pound-conv");


function UpdateData() {
    data = input.value;
    MeterFootConv();
    LiterGallonConv();
    KiloPoundConv();
}

function MeterFootConv() {
    let toMeters = (data * 0.3048).toFixed(3);
    let toFeet = (data * 3.2808).toFixed(3);
    toMetersFeet.textContent = `${data} meters = ${toFeet} feet | ${data} feet= ${toMeters} meters`;
}

function LiterGallonConv() {
    let toLiters = (data * 3.7854).toFixed(3);
    let toGallons = (data * 0.2641).toFixed(3);
    toLitersGallons.textContent = `${data} liters = ${toGallons} gallons | ${data} gallons = ${toLiters} liters`;
}

function KiloPoundConv() {
    let toKilos = (data * 0.4535).toFixed(3);
    let toPounds = (data * 2.2046).toFixed(3);
    kiloPound.textContent = `${data} kilos = ${toPounds} pounds | ${data} pounds = ${toKilos} kilos`;
}

MeterFootConv();
LiterGallonConv();
KiloPoundConv();