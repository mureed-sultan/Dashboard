import { addAction } from "core/acts-funcs.js";

addAction("switchCode", function ({ $el, arg }) {
  $el.siblings().removeClass("active");
  $el.add($el.siblings("." + arg)).addClass("active");
});
// setTimeout(() => {
//   $(".nav-list").on("click", "li", function () {
//     $(".nav-list li.active").removeClass("active");
//     $(this).addClass("active");
//   });
// }, 500);
