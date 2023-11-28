const data = JSON.parse(dataInfo);
console.log(data);
data.forEach((element) => {
  console.log(element.activity);
});
const content = document.querySelector(".content");
data.forEach((element) => {
  const box = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = element.type;
  const activity = document.createElement("h4");
  activity.textContent = element.activity;
  activity.classList.add("activity");
  const price = document.createElement("p");
  price.textContent = `${element.price} $`;
  box.appendChild(title);
  box.appendChild(activity);
  box.appendChild(price);
  box.classList.add("box");
  content.appendChild(box);
});
