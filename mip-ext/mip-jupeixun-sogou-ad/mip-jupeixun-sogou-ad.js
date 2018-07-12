/**
 * @file mip-jupeixun-sogou-ad 组件
 * 搜狗广告
 * @author
 */

define(function (require) {
    //'use strict';

    var $ = require('zepto');
    var customElement = require('customElement').create();
    

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.createdCallback = function () {
        // TODO
        var ele = this.element;
        var adWidth = ele.getAttribute('ad_width');
        var adHeight = ele.getAttribute('ad_height');
        var adId = ele.getAttribute('ad_id');
        var adSrc = ele.getAttribute('ad_src');

        var scriptTag1 = document.createElement('script');
        scriptTag1.type = 'text/javascript';

        var adhtml = 'var sogou_ad_id=' + adId + ';';
        adhtml += 'var sogou_ad_content_height=' + adHeight + ';';
        scriptTag1.innerHTML = adhtml;

        var scriptTag2 = document.createElement('script');
        scriptTag2.type = 'text/javascript';
        scriptTag2.src = 'https://theta.sogoucdn.com/wap/js/wp.js';

        ele.appendChild(scriptTag1);
        ele.appendChild(scriptTag2);

        // var adhtml = 'var sogou_ad_id=' + adId + ';';
        // adhtml += 'var sogou_ad_content_height=' + adHeight + ';';
        // var scriptTag1 = document.createElement('script');
        // scriptTag1.innerHTML = adhtml;

        // var scriptTag2 = document.createElement('script');
        // scriptTag2.src = adSrc,

        // ele.appendChild(scriptTag1);
        // ele.appendChild(scriptTag2);
    };

    return customElement;
});
