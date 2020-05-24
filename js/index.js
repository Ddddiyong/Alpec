
$(function(){
    $('.vis-depth3 > li').click(function(){
        // 클래스 제거(상태 초기화)
        $('.vis-depth3 > li').removeClass('selected');
    
        // 클래스 추가
        $(this).addClass('selected');
    
        // a태그 하이퍼링크 기본 이벤트 해제
        return false;
    });

    


    $('.depth2').hide();
    $('.vis-depth2').hide();

    $('.mid_depth > li').hover(
        function(){
            $('.depth2').stop().show();
            $('#header_nav').css('background','#fff');
            $('.mid_depth > li > a').css('color','black');
            $('.right_depth > li > a').css('color','black');
            $('.right_depth > li').css('border','1px solid black');
            $('.right_depth > li').css('border-radius','20px');
            $('.right_depth > li:first').css('border','none');
            $('.btn_Ham').css('color','black');
            
        },
        function(){
            $('.depth2').stop().hide();
            $('#header_nav').css('background','none');
            $('.mid_depth > li > a').css('color','#fff');
            $('.right_depth > li').css('border','1px solid white');
            $('.right_depth > li > a').css('color','white');
            $('.right_depth > li').css('border-radius','20px');
            $('.right_depth > li:first').css('border','none');
        }
    );
    $('.vis-depth1 > li').click(function(){
            $(this).children('.vis-depth2').stop().slideToggle();
        }
    );

    $('.aside1').click(function(){
        $('.bigImg1').fadeIn();
        $('.bigImg2').hide();
        $('.bigImg3').hide();
        $('.bigImg4').hide();
    })
    $('.aside2').click(function(){
        $('.bigImg1').hide();
        $('.bigImg2').fadeIn();
        $('.bigImg3').hide();
        $('.bigImg4').hide();
    })
    $('.aside3').click(function(){
        $('.bigImg1').hide();
        $('.bigImg2').hide();
        $('.bigImg3').fadeIn();
        $('.bigImg4').hide();
    })
    $('.aside4').click(function(){
        $('.bigImg1').hide();
        $('.bigImg2').hide();
        $('.bigImg3').hide();
        $('.bigImg4').fadeIn();
    })

    $('.box1').click(function(){
        $('.bigImg1').fadeIn();
        $('.bigImg2').hide();
        $('.bigImg3').hide();
        $('.bigImg4').hide();
    })
    $('.box2').click(function(){
        $('.bigImg1').hide();
        $('.bigImg2').fadeIn();
        $('.bigImg3').hide();
        $('.bigImg4').hide();
    })
    $('.box3').click(function(){
        $('.bigImg1').hide();
        $('.bigImg2').hide();
        $('.bigImg3').fadeIn();
        $('.bigImg4').hide();
    })
    $('.box4').click(function(){
        $('.bigImg1').hide();
        $('.bigImg2').hide();
        $('.bigImg3').hide();
        $('.bigImg4').fadeIn();
    })

})

