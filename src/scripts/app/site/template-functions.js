import { addAction } from 'core/acts-funcs.js';

addAction('switchCode', function ({ $el, arg }) {
  $el.siblings().removeClass('active');
  $el.add($el.siblings('.' + arg)).addClass('active');
});
// setTimeout(() => {
//   $('.nav-list').on('click', 'li', function () {
//     $('.nav-list li.active').removeClass('active');
//     $(this).addClass('active');
//   });
// }, 500);
setTimeout(() => {
  var hoursContainer = document.querySelector('.hours');
  var minutesContainer = document.querySelector('.minutes');
  var secondsContainer = document.querySelector('.seconds');
  var last = new Date(0);
  last.setUTCHours(-1);

  function updateTime() {
    var now = new Date();

    var lastHours = last.getHours().toString();
    var nowHours = now.getHours().toString();
    if (lastHours !== nowHours) {
      updateContainer(hoursContainer, nowHours);
    }

    var lastMinutes = last.getMinutes().toString();
    var nowMinutes = now.getMinutes().toString();
    if (lastMinutes !== nowMinutes) {
      updateContainer(minutesContainer, nowMinutes);
    }

    var lastSeconds = last.getSeconds().toString();
    var nowSeconds = now.getSeconds().toString();
    if (lastSeconds !== nowSeconds) {
      updateContainer(secondsContainer, nowSeconds);
    }

    last = now;
  }

  function updateContainer(container, newTime) {
    var time = newTime.split('');

    if (time.length === 1) {
      time.unshift('0');
    }

    var first = container.firstElementChild;
    if (first.lastElementChild.textContent !== time[0]) {
      updateNumber(first, time[0]);
    }

    var last = container.lastElementChild;
    if (last.lastElementChild.textContent !== time[1]) {
      updateNumber(last, time[1]);
    }
  }

  function updateNumber(element, number) {
    //element.lastElementChild.textContent = number
    var second = element.lastElementChild.cloneNode(true);
    second.textContent = number;

    element.appendChild(second);
    element.classList.add('move');

    setTimeout(function () {
      element.classList.remove('move');
    }, 990);
    setTimeout(function () {
      element.removeChild(element.firstElementChild);
    }, 990);
  }

  setInterval(updateTime, 100);
}, 1000);
