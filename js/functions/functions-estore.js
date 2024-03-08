const calculateFinalPrice = basePrice => {
    let finalPrice = basePrice;

    if (basePrice >= 1000) finalPrice = basePrice - basePrice*10/100;
    else if (basePrice >= 500) finalPrice = basePrice - basePrice*5/100;
    
    return finalPrice;
}

console.log(`El precio final del producto es ${calculateFinalPrice(1400)}`);