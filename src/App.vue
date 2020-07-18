<template>
    <div id="app">
        <div id="dplayer"></div>

		<!-- 浮层 -->
		<div id="liveNoStart" class="live-layer no-start"></div>
		<div id="liveHasEnd" class="live-layer no-start"></div>
		
    </div>
</template>

<script>

  export default {
    name: 'app',
    mounted() {
        var liveBeginTime = '2020-04-02 19:00:00' // 直播开始时间
        // var liveBeginTime = '2020-04-02 13:00:00' // 直播开始时间
        //var liveTime = 2805; // 视频时长(单位秒)
        var liveUrl = 'https://live-wcloud-cdn.ysp.cctv.cn/tlivecloud-cdn.ysp.cctv.cn/001/2000204603.m3u8' // 直播地址
        var livePic = "https://cdn1.bioon.com/images/zhibo-c.png?v=1" // 直播封面图

        var liveBegin = msTime.getNowTimestamp() > msTime.dateToTimestamp(liveBeginTime) ? true : false; // 直播是否开始
        var seekTime = msTime.getNowTimestamp() - msTime.dateToTimestamp(liveBeginTime) // 当前时间与直播开始时间的差值


    //var isLive = seekTime > liveTime ? false : true; // 是否为直播



    var dp = new DPlayer({
        container: document.getElementById('dplayer'),
        live: true,
        theme: '#2f92ee',
        lang: 'zh-cn',
        video: {
            url: liveUrl,
            pic: livePic,
            type: 'hls'
        },
        pluginOptions: {
            hls: {
                // hls config
            },
        },
    });

    // if (!isLive) {
    //     $('#liveHasEnd').show()
    //     $('#dplayer > .dplayer-controller > .dplayer-icons').css({'display': 'none'})
    //     $('#dplayer > .dplayer-controller').append('<div class="live-tip">直播已结束</div>')
    // }

    // 微信兼容
        jQuery('video').attr({
            'x5-video-player-type': 'h5',
            'x5-video-orientation': 'h5',
            'x5-video-player-fullscreen': true,
            'playsinline': true,
            'webkit-playsinline': true
        })
        // 视频加载完成重新获取高度值
        setTimeout(function() {
            jQuery('#liveNoStart').css({height: $('#dplayer').height()+'px'})
            jQuery('#liveHasEnd').css({height: $('#dplayer').height()+'px'})
        }, 200)

        if (liveBegin) { // 直播开始, 并跳转到差值时间， 如果差值超过视频总时长，则不跳
            jQuery('#liveNoStart').hide()
            dp.play()
            document.addEventListener(
                'WeixinJSBridgeReady', dp.play(),false
            )
            // setTimeout(function() {
            //     var seekTimeOpe = msTime.getNowTimestamp() - msTime.dateToTimestamp(liveBeginTime)
            //     if (seekTimeOpe > 0 && liveTime > seekTimeOpe) {
            //         dp.seek(seekTimeOpe)
            //     }
            // },500)
        } else { // 直播未开始，隐藏控制器
            jQuery('#liveNoStart').show()
            jQuery('#dplayer > .dplayer-controller > .dplayer-icons').css({'display': 'none'})
            // $('#dplayer > .dplayer-controller').append('<div class="live-tip">直播开始时间:'+liveBeginTime+'</div>')
            if (-seekTime > 24 * 60 * 60) {
                jQuery('#dplayer > .dplayer-controller').append('<div class="live-tip">直播开始时间:'+liveBeginTime+'</div>')
            } else {
                jQuery('#dplayer > .dplayer-controller').append('<div class="live-tip">直播倒计时: <span id="countDownText">'+msTime.countDown(-seekTime)+'</span></div>')
                setInterval (function () {
                    if (seekTime++ >= 0) {
                        window.location.href=window.location.href
                    } else {
                        jQuery('#countDownText').text(msTime.countDown(-seekTime))
                    }
                }, 1000);
            }

        }

    }
  }
</script>

<style>
    #app {
        font-family:  "Microsoft YaHei", "微软雅黑", Arial,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        font-size: 12px;
        font-weight: normal;
        min-width: 1000px;
        position: relative;
    }
</style>
