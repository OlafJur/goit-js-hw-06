const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const itemList = document.querySelector("#ingredients");

const itemsMap = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  return newItem;
});

itemList.append(...itemsMap);
