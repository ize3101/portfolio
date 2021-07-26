$(document).ready(function(){

    function gauge(g_name, g_id, g_color, g_num) {

        let count = -90;
        let canvas = g_id;
        let line_box = g_name[0];
        let con_width = line_box.clientWidth;
        let con_height = line_box.clientHeight;

        canvas.setAttribute('width', con_width)
        canvas.setAttribute('height', con_height)

        let ctx = canvas.getContext("2d");

        let pi = (Math.PI / 180);

        let inter = setInterval(function(){
            ctx.beginPath();
            ctx.arc(con_width/2, con_height/2, con_width/2 - 11, pi*-90, pi*count++, false);

            ctx.lineWidth=20;
            ctx.lineCap="round";
            ctx.strokeStyle=g_color;


            ctx.stroke();
            if(count > g_num) {
                clearInterval(inter)
            }
        }, 1)

    }
    let chk = true;

    $(window).scroll(function(){
        let w_s_top = $(window).scrollTop();
        let S_s_top = $('.skill').offset().top;
        let P_s_top = $('.portfolio').offset().top;
        console.log(w_s_top)

        // about me
        let a_c_length = $('.a_con').length;
        let a_c_no = 0;
        if(w_s_top >= 450) {
            setInterval(function(){
                $('.a_con').eq(a_c_no % a_c_length).css({
                    transform: 'translateY(0)',
                    transition: 'all 0.5s',
                    opacity: 1
                })
                a_c_no++;
            }, 100)
            $('.profile').css({
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.5s',
                opacity: 1
                
            })
        }


        // skill
        if(w_s_top >= 1400) {
            if(chk){
                chk = false;
                gauge(document.getElementsByClassName('ps_g'), document.getElementById('canvas'), '#5C2A9D', 225);
                gauge(document.getElementsByClassName('al_g'), document.getElementById('canvas2'), '#FA7D09', 200);
                gauge(document.getElementsByClassName('html_g'), document.getElementById('canvas3'), '#FC5404', 225);
                gauge(document.getElementsByClassName('css_g'), document.getElementById('canvas4'), '#185ADB', 225);
                gauge(document.getElementsByClassName('js_g'), document.getElementById('canvas5'), '#FFD800', 200);
                gauge(document.getElementsByClassName('jquery_g'), document.getElementById('canvas6'), '#381460', 220);
            }
        }

        
        // portfolio
        let p_p_length = $('.pp_pan').length;
        let p_p_no = 0;
        if(w_s_top >= P_s_top - 800) {
            setInterval(function(){
                $('.pp_pan').eq(p_p_no % p_p_length).css({
                    transition: 'all 0.5s',
                    opacity: 1
                })
                p_p_no++;
            }, 100)
        }


        // contact
        if(w_s_top >= 3100) {
            $('.bar').css({
                transform: 'translate(-50%, 0)',
                transition: 'all 0.5s',
                opacity: 1
            })
        }
    })

    $('.main').mousemove(function(event){
        let winX = $(window).width() / 2;
        let winY = $(window).height() / 2;

        let mouseX =  event.pageX
        let mouseY =  event.pageY

        let c_width = Math.abs(mouseX - winX) *2;
        let c_height = Math.abs(mouseY - winY)*2;
        let c_total = (c_width + c_height)
    

        $('.circle').css({
            width: c_total,
            height: c_total
        })

    });

    let turn = true;
    if(turn == true) {
        $('.a_cover').animate({
            width: '101%',
        }, 1000)

        setTimeout(function(){
            $('.a_cover').css({
                left: "101%",
                transform: "translateY(-50%) rotateY(180deg)",
                transformOrigin: "left",
            }).animate({width: '0'},1000)
            
            $('.n_cover').animate({
                width: '101%',
            }, 500)
        }, 1000);

        setTimeout(function(){
            $('.n_cover').css({
                left: "101%",
                transform: "translateY(-50%) rotateY(180deg)",
                transformOrigin: "left",
            }).animate({width: '0'}, 700)
            
        }, 1500)

        turn == false;
    }


    $('.pp_more').click(function(){
        $(this).parent('.pp_contents').next('.pp_con_modal').css({
            display: 'block'
        });

        
        $('.pp_con_modal').hover(function(){
            if(this.style.display == 'block'){

                let p_pc = $('.p_pc_img').height();
                $(this).find('.p_pc_img').animate({top:( -1 * p_pc) + 421 + 'px'}, 10000, 'linear')
                
                let p_m = $('.p_m_img').height();
                $(this).find('.p_m_img').animate({top:( -1 * p_m) + 266 + 'px'}, 10000, 'linear')

                let n_pc = $('.n_pc_img').height();
                $(this).find('.n_pc_img').animate({top:( -1 * n_pc) + 421 + 'px'}, 10000, 'linear')
                
                let n_t = $('.n_t_img').height();
                $(this).find('.n_t_img').animate({top:( -1 * n_t) + 406 + 'px'}, 10000, 'linear')

                let n_m = $('.n_m_img').height();
                $(this).find('.n_m_img').animate({top:( -1 * n_m) + 266 + 'px'}, 10000, 'linear')
    
            }
        },function(){
            if(this.style.display == 'none'){
                $(this).find('.p_pc_img').stop().css({top:0}, 0)
                $(this).find('.p_m_img').stop().css({top:0}, 0)
                $(this).find('.n_pc_img').stop().css({top:0}, 0)
                $(this).find('.n_t_img').stop().css({top:0}, 0)
                $(this).find('.n_m_img').stop().css({top:0}, 0)
            }
        });
    
        
    });

    $('.pp_con_modal').click(function(){
        $('.pp_con_modal').css({
            display: 'none'
        });
    });
    $('.inner_modal').click(function(){
        event.stopPropagation();
    });


    $('.app, info_pan').hover(function(){
        let app_index = $(this).index();
        console.log(app_index)

        $('.info').eq(app_index).css({
            opacity: 1,
            transition: 'all 0.5s',
            transform: 'translate(-50%, 0%)'
        })
    }, function(){
        
        $('.info').css({
            opacity: 0,
            transition: 'all 0s',
            transform: 'translate(-50%, 70%)'
        })
    })

    
    
    
});