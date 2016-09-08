$(document).ready(function () {
    var header = $('.b-head'),
        headerHeight = header.outerHeight();
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > headerHeight) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementsByClassName(id)[0];
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('b-countdown-clock', deadline);

(function() {
  var menuBtn = document.getElementsByClassName('item-anchor')[0],
      menuDropdownBtn = document.getElementsByClassName('dropdown-btn');

  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var isActive = this.classList.contains('active'),
        leftNavMenu = document.getElementsByClassName('b-left-menu')[0],
        blockHoverBg = document.getElementsByClassName('b-h-bg')[0];

    if(isActive === true) {
      this.classList.remove('active');
      leftNavMenu.classList.remove('active');
      blockHoverBg.classList.remove('active');
      $('body').css({
        'overflow': 'auto'
      });
    } else {
      this.classList.add('active');
      leftNavMenu.classList.add('active');
      blockHoverBg.classList.add('active');
      $('body').css({
        'overflow': 'hidden'
      });
    }
  });

  for (var i = 0; i < menuDropdownBtn.length; i++) {
    menuDropdownBtn[i].addEventListener('click', function(event) {
      event.preventDefault();

       var parentElem = this.parentElement,
          isActive = parentElem.classList.contains('active');

      if(isActive === true) {
        parentElem.classList.remove('active');
      } else {
        parentElem.classList.add('active');
      }
    });
  }



})();