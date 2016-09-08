window.onload=function () {
    var mySwiper = new Swiper('.swiper-container',{
        loop:true,
        speed:500,
        mode:'vertical',
        shortSwipes:true,
        onFirstInit: function(swiper){
            $("#container1 .word1").addClass("fadeInDown");
            $("#container1 .word2").addClass("fadeInLeft-page1");
        
            $("#container7 .page7-pic1").removeClass("flipInY-page7-1");
            $("#container7 .page7-pic2").removeClass("flipInY-page7-2");
            $("#container7 .page7-pic3").removeClass("flipInY-page7-3");
            $("#container7 .page7-pic4").removeClass("flipInY-page7-4");
            $("#container7 .page7-pic5").removeClass("flipInY-page7-5");
            $("#container7 .page7-word").removeClass("fadeIn-page7-1");
            $("#container7 .page7-picline1").removeClass("flipInY-line1");
            $("#container7 .page7-picline2").removeClass("flipInY-line2");
            $("#container7 .page7-picline3").removeClass("flipInY-line3");
            $("#container7 .page7-picline4").removeClass("flipInY-line4");
            $("#container7 .page7-picline5").removeClass("flipInY-line5");
        },
        onSlideChangeEnd: function(swiper){
            console.log(mySwiper.activeLoopIndex)
            if(mySwiper.activeLoopIndex==0){
                $("#container1 .word1").addClass("fadeInDown");
                $("#container1 .word2").addClass("fadeInLeft-page1");
            }else{
                $("#container1 .word1").removeClass("fadeInDown");
                $("#container1 .word2").removeClass("fadeInLeft-page1");
            }
            if(mySwiper.activeLoopIndex==1){
                $("#container2 .page2-pic1").addClass("fadeInLeftBottom");
                $("#container2 .page2-pic2").addClass("fadeInRightTop");
                $("#container2 .page2-pic2 .rec").addClass("fadeIn");
            }else{
                $("#container2 .page2-pic1").removeClass("fadeInLeftBottom");
                $("#container2 .page2-pic2").removeClass("fadeInRightTop");
                $("#container2 .page2-pic2 .rec").removeClass("fadeIn");
            }
            if(mySwiper.activeLoopIndex==2){
                $("#container3 .page3-pic1").addClass("bounceIn-1");
                $("#container3 .page3-pic2").addClass("bounceIn-2");
                $("#container3 .page3-word").addClass("rollIn");
            }else{
                $("#container3 .page3-pic1").removeClass("bounceIn-1");
                $("#container3 .page3-pic2").removeClass("bounceIn-2");
                $("#container3 .page3-word").removeClass("rollIn");
            }
            if(mySwiper.activeLoopIndex==3){
                $("#container4 .page4-pic1").addClass("fadeInLeft");
                $("#container4 .page4-pic2").addClass("fadeInRight");
                $("#container4 .page4-word").addClass("bounceInUp");
            }else{
                $("#container4 .page4-pic1").removeClass("fadeInLeft");
                $("#container4 .page4-pic2").removeClass("fadeInRight");
                $("#container4 .page4-word").removeClass("bounceInUp");
            }
            if(mySwiper.activeLoopIndex==4){
                $("#container5 .page5-pic1").addClass("rotateIn");
                $("#container5 .page5-pic2").addClass("fadeInLeft-page5");
                $("#container5 .page5-pic3").addClass("fadeInUp-page5");
                $("#container5 .page5-word1").addClass("fadeInDown-page5");
                $("#container5 .page5-word2").addClass("flipInY");
            }else{
                $("#container5 .page5-pic1").removeClass("rotateIn");
                $("#container5 .page5-pic2").removeClass("fadeInLeft-page5");
                $("#container5 .page5-pic3").removeClass("fadeInUp-page5");
                $("#container5 .page5-word1").removeClass("fadeInDown-page5");
                $("#container5 .page5-word2").removeClass("flipInY");
            }
            if(mySwiper.activeLoopIndex==5){
                $("#container6 .page6-pic1").addClass("fadeInDown-page6-1");
                $("#container6 .page6-pic2").addClass("rollInLeft");
                $("#container6 .page6-pic3").addClass("rollInRight");
                $("#container6 .page6-pic4").addClass("fadeInUp-page6-4");
                $("#container6 .page6-word1").addClass("fadeIn-page6-1");
                $("#container6 .page6-word2").addClass("fadeIn-page6-2");
            }else{
                $("#container6 .page6-pic1").removeClass("fadeInDown-page6-1");
                $("#container6 .page6-pic2").removeClass("rollInLeft");
                $("#container6 .page6-pic3").removeClass("rollInRight");
                $("#container6 .page6-pic4").removeClass("fadeInUp-page6-4");
                $("#container6 .page6-word1").removeClass("fadeIn-page6-1");
                $("#container6 .page6-word2").removeClass("fadeIn-page6-2");
            }
            if(mySwiper.activeLoopIndex==6){
                $("#container7 .page7-pic1").addClass("flipInY-page7-1");
                $("#container7 .page7-pic2").addClass("flipInY-page7-2");
                $("#container7 .page7-pic3").addClass("flipInY-page7-3");
                $("#container7 .page7-pic4").addClass("flipInY-page7-4");
                $("#container7 .page7-pic5").addClass("flipInY-page7-5");
                $("#container7 .page7-word").addClass("fadeIn-page7-1");
                $("#container7 .page7-picline1").addClass("flipInY-line1");
                $("#container7 .page7-picline2").addClass("flipInY-line2");
                $("#container7 .page7-picline3").addClass("flipInY-line3");
                $("#container7 .page7-picline4").addClass("flipInY-line4");
                $("#container7 .page7-picline5").addClass("flipInY-line5");
            }else{
                $("#container7 .page7-pic1").removeClass("flipInY-page7-1");
                $("#container7 .page7-pic2").removeClass("flipInY-page7-2");
                $("#container7 .page7-pic3").removeClass("flipInY-page7-3");
                $("#container7 .page7-pic4").removeClass("flipInY-page7-4");
                $("#container7 .page7-pic5").removeClass("flipInY-page7-5");
                $("#container7 .page7-word").removeClass("fadeIn-page7-1");
                $("#container7 .page7-picline1").removeClass("flipInY-line1");
                $("#container7 .page7-picline2").removeClass("flipInY-line2");
                $("#container7 .page7-picline3").removeClass("flipInY-line3");
                $("#container7 .page7-picline4").removeClass("flipInY-line4");
                $("#container7 .page7-picline5").removeClass("flipInY-line5");
            }
        }
    })
}
