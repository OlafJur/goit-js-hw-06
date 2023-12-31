const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
images.forEach((image) => {
  const galleryList = document.querySelector(".gallery");
  galleryList.insertAdjacentHTML(
    "afterbegin",
    `<img src="${image.url}" alt="${image.alt}" width="400px" height="250px">`
  );
  galleryList.style.display = "flex";
  galleryList.style.padding = "5px";
  galleryList.style.gap = "10px";
  galleryList.style.border = "5px solid red";
  galleryList.style.borderRadius = "10px";
});
