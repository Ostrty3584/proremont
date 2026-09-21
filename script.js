const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");


const areaInput = document.getElementById("area");
const priceInput = document.getElementById("price");

const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");
const servicesToggle = document.getElementById("servicesToggle");
const servicesList = document.getElementById("servicesList");

servicesToggle.addEventListener("click", function(){
        const isExpanded = servicesToggle.getAttribute("aria-expanded") === "true";

        servicesList.hidden = isExpanded;
        servicesToggle.setAttribute("aria-expanded", String(!isExpanded));
        servicesToggle.textContent = isExpanded ? "Pokaż usługi" : "Ukryj usługi";
});

calculateButton.addEventListener("click", function(){

        const name = nameInput.value;
        const area = Number(areaInput.value);
        const price = Number(priceInput.value);

        const total =  area * price;

        result.textContent = "Dziękujemy " + name + ". Otrzymaliśmy Twoje zapytanie.";
});