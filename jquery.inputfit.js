/*global define:true */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.inputfit = function(options) {
        var settings = $.extend({
            minSize    : 10,
            maxSize    : false,
            resizeType : "font-size"
        }, options);

        this.each(function() {
            var $input = $(this);

            if ( !$input.is(':input') ) {
                return;
            }

            $input.off('keyup.infputfit keydown.inputfit');

            var maxSize = parseFloat(settings.maxSize || $input.css('font-size'), 10);
            var width   = $input.width();
            var clone   = $input.data('inputfit-clone');

            if (!clone) {
                clone = $('<div></div>', {
                    css : {
                        fontSize   : $input.css('font-size'),
                        fontFamily : $input.css('font-family'),
                        position   : 'absolute',
                        left       : '-9999px',
                        visibility : 'hidden'
                    }
                }).insertAfter($input);

                $input.data('inputfit-clone', clone);
            }

            $input.on('keydown.inputfit', function() {
                var $this = $(this);

                // Set 1ms timeout, otherwise value isn't yet updated on keydown event
                setTimeout(function(){
                    clone.html($this.val().replace(/ /g, '&nbsp;'));

                    if (settings.resizeType == "width") {
                        // 2 as an arbitrary number for a little extra padding so text doesn't get cut off
                        var inputWidth = clone.width() + 2;

                        if(settings.maxSize && inputWidth > maxSize) { inputWidth = maxSize; }
                        if(inputWidth < settings.minSize) { inputWidth = settings.minSize; }

                        $this.css('width', inputWidth);
                    } else {
                        var ratio = width / (clone.width() || 1),
                            currentFontSize = parseInt( $this.css('font-size'), 10 ),
                            fontSize = Math.floor(currentFontSize * ratio);

                        if (fontSize > maxSize) { fontSize = maxSize; }
                        if (fontSize < settings.minSize) { fontSize = settings.minSize; }

                        $this.css('font-size', fontSize);
                        clone.css('font-size', fontSize);
                    }
                }, 1);


            });
        });

        return this;
    };

}));
