/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
import './styles.css';

// Your JavaScript code here
const inputConverter = document.getElementById('input-converter');
const convertBtn = document.getElementById('convert-btn');
const meterFeetUi = document.getElementById('meter-feet-ui');
const literGallonUi = document.getElementById('liter-gallon-ui');
const kiloPoundUi = document.getElementById('kilo-pound-ui');

function meterFeetCalculation(num) {
    const meterToFeet = num * 3.281;
    const feetToMeter = num / 3.281;

    meterFeetUi.textContent = `${num} meters = ${meterToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeter.toFixed(3)} meters`

}

function literGallonCalculation(num) {
    const literToGallon = num * .264;
    const gallonToLiter = num / .264; 

    literGallonUi.textContent = `${num} liters = ${literToGallon.toFixed(3)} gallons | ${num} gallons = ${gallonToLiter.toFixed(3)} liters`
}

function kiloPoundCalculation(num) {
    const kiloToPound = num * 2.204;
    const poundToKilo = num / 2.204;

    kiloPoundUi.textContent = `${num} kilos = ${kiloToPound.toFixed(3)} pounds | ${num} pounds = ${poundToKilo.toFixed(3)} kilos`
}

convertBtn.addEventListener('click', () => {
    const inputValue = inputConverter.value;
    
    meterFeetCalculation(inputValue);
    literGallonCalculation(inputValue);
    kiloPoundCalculation(inputValue);
    
})
