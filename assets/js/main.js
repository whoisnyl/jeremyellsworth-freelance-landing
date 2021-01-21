// ================= SLIDERS

$(".logos-slider__lists").slick({
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 15,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 12,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 10,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".success-stories__user-message").slick({
  infinite: true,
  slidesToShow: 1,
  fade: true,
  slidesToScroll1: 1,
  speed: 500,
  arrows: false,
});

$(".success-stories__user-logo").slick({
  infinite: true,
  slidesToShow: 1,
  fade: true,
  slidesToScroll1: 1,
  arrows: false,
  speed: 1500,
});

// ================= TEXT ECLIPSE

$(window).on("load", function () {
  if ($(".text-ellipsis").length) {
    $(".text-ellipsis").each(function () {
      var elem = $(this);
      var text = elem.text();
      var limit = elem.data("limit");
      var link = elem.data("link");

      if (text.length > limit) {
        var cut = limit - text.length;
        elem.html(
          text.slice(0, cut) + '... <a href="' + link + '">Read More</a>'
        );

        elem.find("a").on("click", function (e) {
          e.preventDefault();
          elem.html(text);
        });
      }
    });
  }
});

// ================= HEADER

$(".header_navigation-link").on("click", function (e) {
  e.preventDefault();
  var target = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(target).offset().top - $("header").outerHeight(true),
    },
    500
  );
});

$(".header_burger-menu").on("click", function () {
  $(this).toggleClass("open");
  $("body").toggleClass("overflow");
  $(".header_navigation").toggleClass("open");
});

// ================= ABOUT ME

// section id
var sections = $(".my-career_list");
var sectionsMobile = $(".my-career--mobile li");
var one = "started-my-design-career";
var two = "built-the-1-vbulletin-theme-shop";
var three = "won-my-first-contest-on-99designs";
var four = "featured-on-99designs";
var five = "joined-a-digital-agency";
var six = "back-to-freelancing-full-time";

// switch nav
function switchNav(index) {
  sections.each(function () {
    if ($(this).data("section") == index.replace("#", "")) {
      $(this).parents("li").addClass("active");
    } else {
      $(this).parents("li").removeClass("active");
    }
  });
}

function switchNavMobile(index) {
  sectionsMobile.each(function () {
    if ($(this).data("section") == index.replace("#", "")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

if ($(window).width() >= 768) {
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    var scrollWithHeader = scroll + $("header").outerHeight(true);
    var target = $(".about-me").offset().top;

    // start following
    if (scrollWithHeader > target) {
      $(".about-me_navigation").css("top", scrollWithHeader - target);
      if (
        scrollWithHeader > $("#" + two).offset().top &&
        scrollWithHeader < $("#" + three).offset().top
      ) {
        switchNav(two);
      } else if (
        scrollWithHeader > $("#" + three).offset().top &&
        scrollWithHeader < $("#" + four).offset().top
      ) {
        switchNav(three);
      } else if (
        scrollWithHeader > $("#" + four).offset().top &&
        scrollWithHeader < $("#" + five).offset().top
      ) {
        switchNav(four);
      } else if (
        scrollWithHeader > $("#" + five).offset().top &&
        scrollWithHeader < $("#" + six).offset().top
      ) {
        switchNav(five);
      } else if (scrollWithHeader > $("#" + six).offset().top) {
        switchNav(six);
        $(".about-me_navigation").css({
          top: "initial",
          bottom: 0,
        });
      } else if (scrollWithHeader < $("#" + two).offset().top) {
        switchNav(one);
      }
    } else {
      $(".about-me_navigation").css("top", 0);
    }
  });
} else {
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    var scrollWithHeaderMobile = scroll + $("header").outerHeight(true);
    var target =
      $(".about-me_navigation").offset().top +
      $(".about-me_navigation").outerHeight(true);

    if (scrollWithHeaderMobile > target) {
      $(".my-career--mobile").addClass("show");
      if (
        scrollWithHeaderMobile > $("#" + two).offset().top &&
        scrollWithHeaderMobile < $("#" + three).offset().top
      ) {
        switchNavMobile(two);
      } else if (
        scrollWithHeaderMobile > $("#" + three).offset().top &&
        scrollWithHeaderMobile < $("#" + four).offset().top
      ) {
        switchNavMobile(three);
      } else if (
        scrollWithHeaderMobile > $("#" + four).offset().top &&
        scrollWithHeaderMobile < $("#" + five).offset().top
      ) {
        switchNavMobile(four);
      } else if (
        scrollWithHeaderMobile > $("#" + five).offset().top &&
        scrollWithHeaderMobile < $("#" + six).offset().top
      ) {
        switchNavMobile(five);
      } else if (scrollWithHeaderMobile > $("#" + six).offset().top) {
        switchNavMobile(six);
        $(".about-me_navigation").css({
          top: "initial",
          bottom: 0,
        });
      } else if (scrollWithHeaderMobile < $("#" + two).offset().top) {
        switchNavMobile(one);
      }

      // stick to bottom
      if (
        scroll >=
        $(".about-me").offset().top +
          $(".about-me").outerHeight(true) -
          window.innerHeight
      ) {
        $(".my-career--mobile").addClass("stop-to-bottom");
      } else {
        $(".my-career--mobile").removeClass("stop-to-bottom");
      }
    } else {
      $(".my-career--mobile").removeClass("show");
    }
  });
}

$(".my-career li").on("click", function () {
  var content = $("#" + $(this).find("p").data("section"));
  $("html, body").animate(
    {
      scrollTop: content.offset().top,
    },
    500
  );
});

$(".my-career--mobile li").on("click", function () {
  var content = $("#" + $(this).data("section"));
  $("html, body").animate(
    {
      scrollTop: content.offset().top,
    },
    500
  );
});

// ================= SUCCESS STORIES

$(".success-stories__control-arrow-right").on("click", function () {
  $(".success-stories__user-message, .success-stories__user-logo").slick(
    "slickNext"
  );
});

$(".success-stories__control-arrow-left").on("click", function () {
  $(".success-stories__user-message, .success-stories__user-logo").slick(
    "slickPrev"
  );
});

$(".success-stories__control-dots_item").on("click", function () {
  $(".success-stories__user-message, .success-stories__user-logo").slick(
    "slickGoTo",
    $(this).data("index")
  );
  $(this)
    .addClass("success-stories__control-dots_item--active")
    .siblings()
    .removeClass("success-stories__control-dots_item--active");
});

$(".success-stories__user-message").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    $(".success-stories__control-dots_item").each(function () {
      if ($(this).data("index") == currentSlide) {
        $(this).addClass("success-stories__control-dots_item--active");
      } else {
        $(this).removeClass("success-stories__control-dots_item--active");
      }
    });

    $(".success-stories__user-logo").slick("slickGoTo", currentSlide);
  }
);

$(".success-stories__user-logo").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    $(".success-stories__control-dots_item").each(function () {
      if ($(this).data("index") == currentSlide) {
        $(this).addClass("success-stories__control-dots_item--active");
      } else {
        $(this).removeClass("success-stories__control-dots_item--active");
      }
    });

    $(".success-stories__user-message").slick("slickGoTo", currentSlide);
  }
);
