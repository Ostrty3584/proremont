const areaInput = document.getElementById("area");

const priceInput = document.getElementById("price");

const calculateButton = document.getElementById("calculateButton");

const result = document.getElementById("result");

calculateButton.addEventListener("click", function(){


        const area = Number(areaInput.value);
        const price = Number(priceInput.value);

        const total =  area * price;

        result.textContent = "Szacunkowy koszt remontu: " + total + " zł";
});