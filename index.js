// let celcius = null;

// function findTemperatureFar (Ftemp){
//     const fahrenheit = (Ftemp * 9/5) + 32
//     return fahrenheit

// }

// function findKtemperature(Ktemp){
//     const kelvin = (Ktemp+ 274.15)
//     return kelvin

// }
// const tempFar =findTemperatureFar(celcius = 4)
// const tempK = findKtemperature(celcius =6)
// console.log('This is ',tempFar, 'in farhenheit')
// console.log('This is ',tempK, 'in kelvin')
// console.log(celcius, 'is', celcius, 'celcius')


//let celcius1 = 0;

function tempConverter(temp){
    const fahrenheit = (temp * 9/5) + 32
    const kelvin = (temp+ 274.15)
    const tempObject = {
        celcius : temp,
        fahrenheit : fahrenheit,
        kelvin : kelvin
    }
    return tempObject
}

console.log(tempConverter(45).fahrenheit)
console.log(tempConverter(12).kelvin)
console.log(tempConverter(10).celcius)


