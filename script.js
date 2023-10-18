"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()
const superLink = document.getElementById("super_link");
console.log(superLink);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()
const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((element) => (element.textContent = "ссылка"));

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

const cardBody = document.querySelector(".card-body");
const links = cardBody.querySelectorAll(".card-link");
console.log(links);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()
const elemAtribute = document.querySelector('[data-number="50"]');
console.log(elemAtribute);

// 5. Выведите содержимое тега title в консоль.
// []()
const title = document.querySelector("title");
console.log(title);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);
// 7. Создайте тег 'p', запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const newPar = document.createElement("p");
newPar.textContent = "Привет";
const cardDiv = document.querySelector(".card");
cardDiv.prepend(newPar);

// 8. Удалите тег h6 на странице.
const h6 = document.querySelector("h6");
h6.remove();
