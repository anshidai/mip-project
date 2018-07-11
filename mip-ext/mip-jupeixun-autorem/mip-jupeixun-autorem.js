/**
 * @file mip-jupeixun-autorem 组件
 * @author
 */

define(function (require) {
    'use strict';

    var customElement = require('customElement').create();
    var viewport = require('viewport');
    var util = require('util');

    viewport.on('resize', function(){
    	
    });


    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        // TODO
        var ele = this.element;
    	var wapWidth = viewport.getWidth();
    	var metaEl = document.createElement('meta');
    	metaEl.setAttribute('name', 'viewport');
    	ele.appendChild(metaEl);

    	console.log(wapWidth)
    };

    return customElement;
});
