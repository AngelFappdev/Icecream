function getCostsData( num_s, cup, sprinkles, hot_fudge, whipped_cream, cherry,) {
    // An additional scoop of ice cream is $1.25 if cup clicked + 1 add 1.25

    rate = 0.045;
    let price = 1 + (1.25 * num_s);
    // cup = 2.25 * num_s
    if (cup) {
        price += sprinkles ? 0.50 : 0;
        price += hot_fudge ? 1.25 : 0;
        price += whipped_cream ? 0.25 : 0;
        price += cherry ? 0.25 : 0;
    }
    // Result Variable 

    const tax = price * rate
    const total = price + tax

    return {
        price: price,
        tax: tax,
        total: total
    }
}
function dollars(amount) {
    return `$${amount.toFixed(2)}`
}
//TEST
result = getCostsData(2, true, true, true, true, true)
console.log(dollars(result.price))
console.log(dollars(result.tax))
console.log(dollars(result.total))

console.log(result)