const uds = 3;
const haitianGourde = 108;

function convertUstoGourde (usdConverter, rateConverter){
    const converted = usdConverter * rateConverter
    return converted;

}

const newValue = convertUstoGourde(uds, haitianGourde)
console.log("There are " , uds, "UsD in", newValue + " Gourdes")