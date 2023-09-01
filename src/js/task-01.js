const body = document.body;
const categoriesList = body.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((categoriesItem) => {
  const categoriesTitle = categoriesItem.querySelector("h2");
  const categoriesElements = categoriesItem.querySelectorAll("li");
  console.log(`Category: ${categoriesTitle.textContent}`);
  console.log(`Elements: ${categoriesElements.length}`);
});
