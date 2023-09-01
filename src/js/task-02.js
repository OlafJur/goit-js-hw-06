const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const newItem = document.createElement("li");
  const itemList = document.querySelector("#ingredients");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  itemList.appendChild(newItem);
});
