let celcius = 2;

function findTemperatureFar (Ftemp){
    const fahrenheit = (Ftemp * 9/5) + 32
    return fahrenheit

}

function findKtemperature(Ktemp){
    const kelvin = (Ktemp+ 274.15)
    return kelvin

}
const tempFar =findTemperatureFar(celcius)
const tempK = findKtemperature(celcius)
console.log('This is ',tempFar, 'in farhenheit')
console.log('This is ',tempK, 'in kelvin')
console.log(celcius, 'is', celcius, 'celcius')