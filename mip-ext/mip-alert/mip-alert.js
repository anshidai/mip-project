/**
 * @file mip-alert 组件
 * @author
 */

define(function (require) {
    'use strict';

    var customElement = require('customElement').create();

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        // TODO
		var element = this.element;
		var text = element.getAttribute('alert-text') || '默认 alert 内容';
		element.addEventListener('click', function(){
			alert(text);
		});
		
    };

    return customElement;
});
