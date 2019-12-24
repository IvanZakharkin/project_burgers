//duration: возвращает длительность файла в секундах
//volume: устанавливает или возвращает уровень звука от 0.0 до 1.0
//currentTime: возвращает текущее время воспроизведения

//play(): начинает воспроизведение
//pause(): приостанавливает воспроизведение

//pause: событие срабатывает, когда воспроизведение мультимедиа приостанавливается, и оно переводится в состояние "paused"
//play: событие срабатывает, когда начинается воспроизведение файла
//volumechange: срабатывает при изменении уровня звука мультимедиа

//seeking: срабатывает, когда пользователь начинает перемещать курсор по шкале воспроизведения для перемещения к новому месту аудио- или видеофайла
//seeked: срабатывает, когда пользователь завершил перемещение к новому месту на шкале воспроизведения
;(function() {
const video = document.querySelector("#player");
const videoSlider = $(".video__playback-slider");
const play = $(".video__duration-img");
const playBig = $(".video__player-img");

$(".video__duration-play").on("click", function(e) {
    video.play();

});
$(".video__duration-pause").on("click", function(e) {
    video.pause();

});

$(".video__player").on("click", () => {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
})

let interval;

video.addEventListener("play", function(e) {

    let durationSec = video.duration;
    console.log(typeof interval);
    if (video.paused === false) {
        clearInterval(interval);
      }

    play.addClass("paused");
    playBig.css("display", "none");
    
    interval = setInterval(() => {
        const completedSec = video.currentTime;
        console.log(video.currentTime);
        const completedPercent = (completedSec / durationSec) * 100;
        
        videoSlider.css({
          left: `${completedPercent}%`
        });
    }, 1000)
})
video.addEventListener("pause", function(e) {
    play.removeClass("paused");
    playBig.css("display", "block");

    if (typeof interval !== "undefined") {
        clearInterval(interval);
      }

})


$(".video__playback").on("click", (e) => {
    if (e.target === videoSlider.get(0)) return;
    const bar = $(e.currentTarget);
    const newButtonPosition = e.pageX - bar.offset().left;
    const duration = bar.width();
    const buttonPosPer = newButtonPosition/duration * 100;
    const newPlayerTimeSec = (video.duration / 100) * buttonPosPer;


    videoSlider.css({
        left: `${buttonPosPer}%`
    });

    video.currentTime = newPlayerTimeSec;    
});


videoSlider.on("mousedown", function(e) {
    $(this).addClass("slider-active");   
});

$(document).on("mousemove", (e) => {
    if (!videoSlider.hasClass("slider-active")) return;
    const bar = $(".video__playback");
    const newButtonPosition = e.pageX - bar.offset().left;
    
    const duration = bar.width();
    let buttonPosPer = newButtonPosition/duration * 100;
    if (buttonPosPer > 100) buttonPosPer = 100;
    if (buttonPosPer < 0) buttonPosPer = 0;
    const newPlayerTimeSec = (video.duration / 100) * buttonPosPer;


    $(".video__playback-slider").css({
        left: `${buttonPosPer}%`
    });

    video.currentTime = newPlayerTimeSec;    
});

$(document).on("mouseup", function(e) {
    videoSlider.removeClass("slider-active");   
});




//SOUND

const soundControl = $("#micLevel");
soundControl.get(0).min = 0;
soundControl.get(0).max = 10;


soundControl.val(soundControl.get(0).max);


$(".video__sound-img").on("click", e => {
    if (video.volume === 0){
        video.volume = soundLevel;
        soundControl.val(soundLevel * 10);
        $(".video__sound-img").removeClass("mute");
        
    }else{
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.val(0);
        $(".video__sound-img").addClass("mute");
    } 
})


soundControl.on("click", e => {
    video.volume = soundControl.val()/10;
})

})()