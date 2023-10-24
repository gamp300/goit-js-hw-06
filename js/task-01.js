const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll(`h2`);
titles.forEach((category) => {
  console.log(`Category: ${category.innerText}`);
  console.log(`Elements: ${category.nextElementSibling.children.length}`);
});
