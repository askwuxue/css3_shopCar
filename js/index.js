$(function(){
    $('#container').fullpage({
        /* 1 初始化 各屏颜色 
        2 默认对齐方式为垂直居中,修改为顶部对齐
        3 设置导航条。默认是不显示
        4 回调函数 滚动到某一屏的回调函数  */
        sectionsColor: ['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060'],
        verticalCentered: false,
        navigation: true,
        /* index 是序号 从1开始 */
        afterLoad: function(link, index) {      
            $('.section').eq(index.index).addClass('now');
        },
        afterRender: function() {
            /* jquery插件的封装方法 $.fn.fullpage = functioin() {}
            插件中没有moveSectionDown */
            // 点击切换到下一页
            $('.more').on('click', function() {
                $.fn.fullpage.moveSectionDown();
            });
            // 当第四屏动画结束后执行 监听动画结束
            $('.screen04 .cart').on('transitionend', function () {
                $('.screen04 .address').show().find('img:last').fadeIn(2000);
                $('.screen04 .text').addClass('now');
            })
        },
        // 当页面离开某一页触发的事件 滚动前的回调函数 onLeave
        /* index 离开的页面序号 nextIndex 要到的页面序号 direction 滚动的方向 up down */
        onLeave: function(index, nextIndex, direction) {
            // 离开第二屏到第三屏
            if (index.index + 1 === 2 && nextIndex.index + 1 === 3) {
                $('.section').eq(index.index).addClass('leaved');
                // 离开第三屏到第四屏的时候
            } else if (index.index + 1 === 3 && nextIndex.index + 1 === 4) {
                $('.section').eq(index.index).addClass('leaved');
                // 离开第五屏到第六屏的时候
            } else if (index.index + 1 === 5 && nextIndex.index + 1 === 6) {
                $('.section').eq(index.index).addClass('leaved');
                $('.screen06 .box').addClass('show');
                // 离开第六屏进入第七屏
            } else if (index.index + 1 === 6 && nextIndex.index + 1 === 7) {
                $('.screen07 .star').addClass('now');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function(i, item) {
                    $(this).css('transition-delay', i * 0.5 + 's');
                    // $(this).delay(i * 0.5 * 1000).fadeIn();
                });


            }
           
        },    
        // 页面切换的时间，默认是700毫秒
        scrollingSpeed: 1000

    })
});