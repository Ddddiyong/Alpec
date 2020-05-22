
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
            $('.depth2').stop().slideDown();
            $('#header_nav').css('background','#fff');
        },
        function(){
            $('.depth2').stop().slideUp();
            $('#header_nav').css('background','none');
        }
    );
    $('.vis-depth1 > li').click(function(){
            $(this).children('.vis-depth2').stop().slideToggle();
        }
    );

    $(document).ready(function(){
        $(".rightImg").unbind();
        $(".rightImg").bind("click", function(){           
            $(".sliderInbox").stop();
            $(".sliderInbox").animate({left:-980}, 500);
        });
        $(".leftImg").unbind();
        $(".leftImg").bind("click", function(){
            $(".sliderInbox").stop();
            $(".sliderInbox").animate({left:0}, 500);
        });
    });

    
})

