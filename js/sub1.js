$(function () {
    $('.vis-depth3 > li').click(function () {
        // 클래스 제거(상태 초기화)
        $('.vis-depth3 > li').removeClass('selected');

        // 클래스 추가
        $(this).addClass('selected');

        // a태그 하이퍼링크 기본 이벤트 해제
        return false;
    });



    $('.depth2').hide();
    // $('.vis-depth2').hide();
    // $('#visual3').hide();
    // $('.vis-slider2').hide();
    // $('#visual4').hide();
    // $('#visual5').hide();

    $('.mid_depth > li').hover(
        function () {
            $('.depth2').stop().show();
            $('#header_nav').css('background', '#fff');
            $('.mid_depth > li > a').css('color', 'black');
            $('.right_depth > li > a').css('color', 'black');
            $('.right_depth > li').css('border', '1px solid black');
            $('.right_depth > li').css('border-radius', '20px');
            $('.right_depth > li:first').css('border', 'none');
            $('.btn_Ham').css('color', 'black');

        },
        function () {
            $('.depth2').stop().hide();
            $('#header_nav').css('background', 'none');
            $('.mid_depth > li > a').css('color', '#000');
            $('.right_depth > li').css('border', '1px solid white');
            $('.right_depth > li > a').css('color', 'white');
            $('.right_depth > li').css('border-radius', '20px');
            $('.right_depth > li:first').css('border', 'none');
        }
    );
    // $('.vis-depth1 > li').on('click',function () {
    //     $('.vis-depth2').stop().slideUp();
    //     $(this).children('.vis-depth2').stop().slideToggle();
    // });
    // $('.vis-depth2').mouseout(function () {
    //     $(this).children('.vis-depth2').stop().slideUp();
    //     console.log('out')
    // });

    $('.vis-depth2').css('display', 'none');
    $('.vis-depth1 > li').on('click', function(){
    $('.vis-depth2').stop().slideUp(200);
    $(this).find('.vis-depth2').stop().slideToggle(200);
    })
    
    // mouseout대신 mouseleave 
    $('.vis-depth1 > li').on('mouseleave', function(){
        $(this).find('.vis-depth2').stop().slideUp(200);
    })
    
    $('.vis-depth2').on('mouseover', function(){
        $(this).stop().slideDown(200);
    })

    //depth3 목록 클릭시 화면 전환
    // $('#visMenu1').click(function(){
    //     $('#visual2').slideDown();
    //     $('.vis-slider').slideDown();
    //     $('#visual3').hide();
    //     $('.vis-slider2').hide();
    // });
    // $('#visMenu2').click(function(){
    //     $('#visual2').hide();
    //     $('.vis-slider').hide();
    //     $('#visual3').slideDown();
    //     $('.vis-slider2').slideDown();
    // });
    // $('#visMenu3').click(function(){
    //     $('#visual2').hide();
    //     $('.vis-slider2').hide();
    // });

    // 탭 영역 이미지 콘텐츠 데이터
    var img_obj = [
        {
            vis_showImg : "img/sub_03_01_01_big1.jpg"
        },
        {
            vis_showImg : "img/sub_03_02_big1.jpg"
        },
        {
            vis_showImg : "img/sub_03_03_big1.jpg"
        }
    ];

    var img_sub = [
        {
            prodImg1 : "img/sub_03_01_01_big1.jpg",
            prodImg2 : "img/sub_03_01_01_big2.jpg",
            prodImg3 : "img/sub_03_01_01_big3.jpg",
            prodImg4 : "img/sub_03_01_01_big4.jpg",
            prodImg5 : "img/sub_03_01_02_big1.jpg",
            prodImg6 : "img/sub_03_01_02_big2.jpg",
            prodImg7 : "img/sub_03_01_02_big3.jpg",
            prodImg8 : "img/sub_03_01_02_big4.jpg",
            prodImg9 : "img/sub_03_01_03_big1.jpg",
            prodImg10 : "img/sub_03_01_03_big2.jpg",
            prodImg11 : "img/sub_03_01_03_big3.jpg",
            prodImg12 : "img/sub_03_01_03_big4.jpg"
        },
        {
            prodImg13 : "img/sub_03_02_big1.jpg",
            prodImg14 : "img/sub_03_02_big2.jpg",
            prodImg15 : "img/sub_03_02_big3.jpg",
        },
        {
            prodImg16 : "img/sub_03_03_big1.jpg",
            prodImg17 : "img/sub_03_03_big2.jpg"
        }
    ]   

    //이미지 슬라이드 교체
    $('.prod1').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg1)
        console.log('tab2', img_sub[0].prodImg1);
    });
    
    $('.prod2').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg2)
        console.log('tab2', img_sub[0].prodImg2);
    });
    $('.prod3').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg3)
        console.log('tab2', img_sub[0].prodImg3);
    });
    $('.prod4').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg4)
        console.log('tab2', img_sub[0].prodImg4);
    });
    $('.prod5').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg5)
        console.log('tab2', img_sub[0].prodImg5);
    });
    $('.prod6').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg6)
        console.log('tab2', img_sub[0].prodImg6);
    });
    $('.prod7').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg7)
        console.log('tab2', img_sub[0].prodImg7);
    });
    $('.prod8').on('click',function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg8)
        console.log('tab2', img_sub[0].prodImg8);
    });






    $('#visMenu1').click(function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_obj[0].vis_showImg)
        console.log('tab', img_obj[0].vis_showImg);

        $('.rightImg').click(function(){
            $('.slider').fadeOut();
            $('.slider2').fadeIn();
        })
        $('.leftImg').click(function(){
            $('.slider').fadeIn();
            $('.slider2').fadeOut();
        })

        $('.prod1').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg1)
        });
        $('.prod2').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg2)
        });
        $('.prod3').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg3)
        });
        $('.prod4').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg4)
        });
        $('.prod5').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg5)
        });
        $('.prod6').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg6)
        });
        $('.prod7').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg7)
        });
        $('.prod8').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[0].prodImg8)
        });

        $('.prod1').attr("src", img_sub[0].prodImg1)
        $('.prod2').attr("src", img_sub[0].prodImg2)
        $('.prod3').attr("src", img_sub[0].prodImg3)
        $('.prod4').attr("src", img_sub[0].prodImg4)
        $('.prod5').attr("src", img_sub[0].prodImg5)
        $('.prod6').attr("src", img_sub[0].prodImg6)
        $('.prod7').attr("src", img_sub[0].prodImg7)
        $('.prod8').attr("src", img_sub[0].prodImg8)

        $('.prod3').show();
        $('.prod4').show();
    })

    $('#visMenu2').click(function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_obj[1].vis_showImg)
        console.log('tab', img_obj[1].vis_showImg);

        $('.prod1').attr("src", img_sub[1].prodImg13)
        $('.prod2').attr("src", img_sub[1].prodImg14)
        $('.prod3').attr("src", img_sub[1].prodImg15)
        $('.prod3').show();
        $('.prod4').hide();

        $('.rightImg').click(function(){
            $('.slider2').hide();
        })
        $('.leftImg').click(function(){
            $('.slider2').hide();
        })

        $('.prod1').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[1].prodImg13)
        });
        $('.prod2').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[1].prodImg14)
        });
        $('.prod3').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[1].prodImg15)
        });
    })

    $('#visMenu3').click(function(){
        $('#visual2 >.vis-showImg > img').attr("src", img_obj[2].vis_showImg)
        console.log('tab', img_obj[2].vis_showImg);

        $('.prod1').attr("src", img_sub[2].prodImg16)
        $('.prod2').attr("src", img_sub[2].prodImg17)
        $('.prod3').hide();
        $('.prod4').hide();

        $('.rightImg').click(function(){
            $('.slider2').hide();
        })
        $('.leftImg').click(function(){
            $('.slider2').hide();
        })
        $('.prod1').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[2].prodImg16)
        });
        $('.prod2').on('click',function(){
            $('#visual2 >.vis-showImg > img').attr("src", img_sub[2].prodImg17)
        });
    })
})


// $(document).ready(function(){
//     $('.slider').bxSlider({
//         // minSlides-최소 이미지 갯수 / maxSlides- 최대 이미지 갯수
//         minSlides: 3,
//         maxSlides: 3,
//         // 이미지 사이즈와 공간 떨어뜨리기
//         slideWidth: 400,
//         slideMargin: 20,
//         // 추가 옵션
//         auto: false, //자동재생(true 키고, false 끄고)
//         mode: "horizontal", // 효과종류(fade, vertical, horizontal)
//     });

//     $('.slider2').bxSlider({
//         // minSlides-최소 이미지 갯수 / maxSlides- 최대 이미지 갯수
//         minSlides: 3,
//         maxSlides: 3,
//         // 이미지 사이즈와 공간 떨어뜨리기
//         slideWidth: 400,
//         slideMargin: 20,
//         // 추가 옵션
//         auto: true, //자동재생(true 키고, false 끄고)
//         mode: "horizontal", // 효과종류(fade, vertical, horizontal)
//     });
//});