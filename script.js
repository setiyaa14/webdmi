$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        });
});

activeslideimg();

        function activeslideimg(activeSlide = 2) {
            const slides = document.querySelectorAll(".slide");

            slides[activeSlide].classList.add("active");

            for (const slide of slides) {
                slide.addEventListener("click", () => {
                    clearActiveClasses();

                    slide.classList.add("active");
                });
            }

            function clearActiveClasses() {
                slides.forEach((slide) => {
                    slide.classList.remove("active");
                })
            }


        }