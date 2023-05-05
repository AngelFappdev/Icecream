document.addEventListener("DOMContentLoaded",() =>{

    const num_s = document.getElementById("num_s");
    const Toppings = document.getElementById("Toppings");
    const sprinkles = document.getElementById("sprinkles");
    const hot_fudge = document.getElementById("hot_fudge");
    const whipped_cream = document.getElementById("whipped_cream");
    const cherry = document.getElementById("cherry");
    const cup = document.getElementById("cup");
    const cone = document.getElementById("cone");

    const button = document.getElementById("button");
    const price = document.getElementById("price");
    const total = document.getElementById("total");
    const tax = document.getElementById("tax");
    

    function updateToppings(){
        Toppings.style.display = cup.checked ? 'block' : 'none';
    }

    cone.addEventListener("change", updateToppings);
    cup.addEventListener("change", updateToppings);

    button.addEventListener( "click", ()=>{
        const results = getCostsData(
            Number(num_s.value),
            cup.checked,
            sprinkles.checked,
            hot_fudge.checked,
            whipped_cream.checked,
            cherry.checked,
        );
        price.innerHTML = dollars(results.price)
        tax.innerHTML = dollars(results.tax)
        total.innerHTML = dollars(results.total)
    })
})