const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

ingredients.forEach((element) => {
  const adition = document.createElement(`li`);
  adition.textContent = element;
  list.classList.add("item");
  list.append(adition);
});
console.log(ingredients);
