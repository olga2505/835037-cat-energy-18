var form = document.querySelector(".form__program");

var name = form.querySelector("[name=cat-name]");
var weight = form.querySelector("[name=weight]");
var email = form.querySelector("[name=email]");
var tel = form.querySelector("[name=tel]");

// var submit = document.querySelector(".form__important");


form.addEventListener("submit", function (evt) {
  if (!name.value || !weight.value || !email.value || !tel.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все обязательные поля");
  } 
});

// submit.addEventListener("submit", function (evt) {
//   if (!name.value || !weight.value || !email.value || !tel.value) {
//         evt.preventDefault();
//         console.log("Нужно заполнить все обязательные поля");
//       }
//     });
