



$(document).ready(function () {

  next1();
  next2();
  next3();
  next4();
  next5();
 
})
function back1() {
    $(".b1").animate({ left: '150px' }, 795, function () {
        next1();
    });
}
function back2() {
    $(".b2").animate({ left: '160px' }, 795, function () {
        next2();
    });
}
function back3() {
    $(".b3").animate({ left: '170px' }, 790, function () {
        next3();
    });
}
function back4() {
    $(".b4").animate({ left: '180px' }, 785, function () {
        next4();
    });
}
function back5() {
    $(".b5").animate({ left: '190px' }, 780, function () {
        next5();
    });
}

// $("#one").click(function () {
function next1() {
    $(".b1").animate({ left: '250px' }, 1000, function () {
        back1();
    });
}
function next2() {
    $(".b2").animate({ left: '240px' }, 1090, function () {
        back2();
    });
}
function next3() {
    $(".b3").animate({ left: '230px' }, 1095, function () {
        back3();
    });
}
function next4() {
    $(".b4").animate({ left: '220px' }, 1100, function () {
        back4();
    });
}
function next5() {
    $(".b5").animate({ left: '210px' }, 1105, function () {
        back5();
    });
}










