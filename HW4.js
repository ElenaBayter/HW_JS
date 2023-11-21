// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
const inputEl = document.getElementById("from");
const spanEl = document.querySelector(".span");
document.addEventListener("input", () => {
  spanEl.textContent = inputEl.value;
});
// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
const btn = document.querySelector(".messageBtn");
const messageEl = document.querySelector(".message");
btn.addEventListener("click", () => {
  messageEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const formEl = document.querySelector("form");
const inputs = document.querySelectorAll(".form-control");
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    highlightInput(input);
  });

  input.addEventListener("input", () => {
    checkInput(input);
  });
});
function highlightInput(input) {
  input.classList.add("error");
}

function removeHighlight(input) {
  input.classList.remove("error");
}
function checkInput(input) {
  if (input.value === "") {
    highlightInput(input);
  } else {
    removeHighlight(input);
  }
}
formEl.addEventListener("submit", (e) => {
  let formIsValid = true;

  inputs.forEach((input) => {
    checkInput(input);

    if (input.value === "") {
      formIsValid = false;
    }
  });

  if (!formIsValid) {
    e.preventDefault();
    console.log("error");
  } else {
    console.log("done");
  }
});

// // SECOND OPTION
// const formEl = document.querySelector("form");
// const firstInput = document.querySelector(".form-control");
// const secondInput = document.querySelectorAll(".form-control")[1];
// firstInput.addEventListener("focus", () => {
//   firstInput.classList.add("error");
// });
// firstInput.addEventListener("input", () => {
//   if (firstInput.value !== "") {
//     firstInput.classList.remove("error");
//   } else {
//     firstInput.classList.add("error");
//   }
// });
// secondInput.addEventListener("focus", () => {
//   secondInput.classList.add("error");
// });
// secondInput.addEventListener("change", () => {
//   if (secondInput.value !== "") {
//     secondInput.classList.remove("error");
//   } else {
//     secondInput.classList.add("error");
//   }
// });
// formEl.addEventListener("submit", (e) => {
//   if (firstInput.value !== "" && secondInput.value !== "") {
//     console.log("done");
//   } else {
//     e.preventDefault();
//     console.log("error");
//     if (firstInput.value === "") {
//       firstInput.classList.add("error");
//     }
//     if (secondInput.value === "") {
//       secondInput.classList.add("error");
//     }
//   }
// });
