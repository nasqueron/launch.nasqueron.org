jQuery(function($){
    'use strict';

    // -------------------------------------------------------------
    //   Basic Navigation
    // -------------------------------------------------------------
    (function () {
        var frame  = $('#cards');
        var wrap   = frame.parent();

        // Call Sly on frame
        frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: wrap.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: wrap.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
        });
    }());

});
