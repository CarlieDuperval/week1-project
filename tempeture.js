const fahrenheit = 23;


function convertFarenheitToCelcius(fTemp){
    const result = (fTemp - 32) * 5/9 
    return result
}

const newValue = convertFarenheitToCelcius(fahrenheit)
console.log(newValue)