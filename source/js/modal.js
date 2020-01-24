var link = document.querySelector(".modal__link");
var modal = document.querySelector(".modal__order");

if (link) {
  document.addEventListener("click", function (evt) {
    var target = evt.target;

    if(target.classList.contains("modal__link")) {
      evt.preventDefault();
      modal.classList.add("modal-show");
    }
  });
}
