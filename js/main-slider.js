// $(document).ready(() => {
//     function createDots() {
//         $(".section").each(function(){
//            const dot = $("<li>", {
//                 attr: {
//                     class: 'navigation__item'
//                 },
//                 html: '<a href="#menu" class="navigation__link"></a>'
//             });
//             $(".navigation__list").append(dot);
//         }
    
//         )};
//     createDots();
    
    
    
//     function moveSlide (container, numSlide) {
//         items = $(".section", container),
//         activeItem = items.filter(".active"),
//         nextItem = items.eq(numSlide),
//         indexActiveItem = nextItem.index()
//         navigationItems = $(".navigation__item"),
//         navigationActiveitem = navigationItems.eq(numSlide);
    
//         if(nextItem.length) {
//             container.animate({
//                 top: -100 * indexActiveItem + "vh"
//             }, 200, function () {
//                 activeItem.removeClass("active");
//                 nextItem.addClass("active");
//                 navigationItems.removeClass("navigation__item_active");
//                 navigationActiveitem.addClass("navigation__item_active");
//             })
//         } 
//     }
    
//     $(window).on("wheel", function(e){
//     const 
//         container = $(".maincontent"),
//         items = $(".section", container),
//         activeItem = items.filter(".active"),
//         nextItem = activeItem.next(),
//         prevItem = activeItem.prev(),
//         nextItemIndex = nextItem.index(),
//         prevItemIndex = prevItem.index();
//         console.log(prevItem);
//         console.log(prevItemIndex );
//         if(e.originalEvent.deltaY > 0) {
//             moveSlide(container, nextItemIndex);
//         } else {
//             moveSlide(container, prevItemIndex);
//         }   
//     });
    
//     $(".navigation__item").on("click", function (e) {
//         e.preventDefault();
    
//         const 
//             $this = $(this),
//             numSlide = $this.index();
//             sectionSlider = $(".maincontent");
    
    
//         $this.siblings().removeClass("navigation__item_active");
//         $this.addClass("navigation__item_active");
//         moveSlide(sectionSlider, numSlide);
    
//     })
// })
function createDots() {
    $(".section").each(function(){
        const $this = $(this);
        const dot = $("<li>", {
            attr: {
                class: 'navigation__item'
            },
            html: `<a href="#menu" class="navigation__link"  data-scroll-to = #${$this.attr("id")}></a>`
        });
        $(".navigation__list").append(dot);
    }
    
)};
createDots();
$(".navigation__item").eq(0).addClass("navigation__item_active");



const 
    container = $(".maincontent"),
    sections = $(".section", container);
    navigationItems = $(".navigation__item");
    let inScroll = false;

const performTransition = sectionNum => {
    if(inScroll === true) return;
    inScroll = true;
    const position = sectionNum * -100;

    sections.eq(sectionNum).addClass("active").siblings().removeClass("active");
    navigationItems.eq(sectionNum).addClass("navigation__item_active").siblings().removeClass("navigation__item_active");

    container.css({
        transform: `translateY(${position}%)`
    })
};

container.on("transitionend", () => {
    inScroll = false;
})

const scrollToSection = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
    }
    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
}


$(window).on("wheel", function(e){
    if(e.originalEvent.deltaY > 0) {
        scrollToSection("next")
    } else {
        scrollToSection("prev")
    }   
});

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

    if (userTypingInInputs) return;

    switch (e.keyCode) {
      case 40:
        scrollToSection("next");
        break;

      case 38:
        scrollToSection("prev");
        break;
    }

});




$("[data-scroll-to]").on("click", e=> {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const sectionName = $this.attr("data-scroll-to");
    const numSection = sections.filter(`${sectionName}`).index();

    performTransition(numSection);
})

const md = new MobileDetect(window.navigator.userAgent);

if(md.mobile()) {
    $("body").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            let scrollDirection = direction === "up" ? "next" : "prev";
            scrollToSection(scrollDirection);
            console.log(direction)
        }
      });
}

if(md.mobile()) {
    $(".burgers").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            let scrollTo = direction === "left" ? "next" : "prev";
            moveToDirection(scrollTo);
        }
      });
}