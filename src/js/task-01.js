const body = document.body;
const categoriesList = body.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
const categoriesItemsLength = categoriesItems.length;
console.log(`Number of categories: ${categoriesItemsLength}`);

categoriesItems.forEach((categoriesItem) => {
  const categoriesTitle = categoriesItem.querySelector("h2");
  const categoriesElements = categoriesItem.querySelectorAll("li");
  const categoriesText = categoriesTitle.textContent;
  const categoriesElementsLength = categoriesElements.length;
  console.log(`Category: ${categoriesText}`);
  console.log(`Elements: ${categoriesElementsLength}`);
});
