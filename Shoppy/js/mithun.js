$(document).ready(function(){
$('.deals-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    slideBy: 3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});




$(document).ready(function(){
    $('.new-arrival-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        slideBy: 2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4.5
            }
        }
    })
    });


    $(document).ready(function(){
        $('.shop-by-brand-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            slideBy: 1,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
        });