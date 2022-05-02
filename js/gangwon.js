(function($){
    
    //객체형식의 이벤트
    $('.main-btn').on({
        mouseenter:function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
        },
        focusin:function(){
            $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
        }
    });

    $('#nav').on({
        mouseleave:function(){
            $('.sub').stop().slideUp(300, function(){
                $('.main-btn').delay(300).removeClass('on');
            });
        }
    });

    /* ES5
    $('.main-btn').on({
        mouseenter:function(){

        },
        focusin:function(){

        }
    });

    ES6
    $('.main-btn').on({
        mouseenter(){

        },
        focusin(){

        }
    });
 */
    
   /* 접근성
    $('.main-btn').focusin(function(){
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);

        $('.main-btn').removeClass('on');
        $(this).addClass('on');
    });

    $('#nav').mouseleave(function(){
        $('.sub').stop().fadeOut(300, function(){
            $('.main-btn').delay(300).removeClass('on');
        });
    });
 */
    //메인슬라이드
    let cnt=0;

    //1.메인슬라이드함수
        function mainSlide(){
            $('.slide').css({zIndex:1}).animate({opacity:1},0);
            $('.slide').eq(cnt).css({zIndex:2});
            $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},1000);
        }
    //2.다음카운트함수
        function nextCount(){
            cnt++;
            cnt>2?cnt=0:cnt;
            mainSlide();
        }
    //3.자동타이머함수
    function autoTimer(){
        setInterval(nextCount, 3000);
    }
    autoTimer();

    //공지사함 & 갤러리 탭메뉴 클릭 이벤트
    /* 갤러리버튼
    $('.gallery-btn').click(function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');

    }); */

    $('.gallery-btn').on({
        click:function(){
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');

        }
    });

    /* 공지사항버튼
    $('.notice-btn').click(function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');

    }); */

    $('.notice-btn').on({
        click:function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');
        }
    });


/*     레이어팝업창
    $('.link-btn').click(function(){
        $('#modal').stop().fadeIn(1000);
    });

    $('.close-btn').click(function(){
        $('#modal').stop().fadeOut(300);
    }); */

    $('.link-btn').on({
        click:function(){
            $('#modal').stop().fadeIn(1000);
        }
    });

    $('.close-btn').on({
        click:function(){
            $('#modal').stop().fadeOut(300);
        }
    });


})(jQuery);