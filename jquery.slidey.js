(function ($) {

    $.widget("ui.slidey", {
        options: {
            height: 330,
            width: 280
        },
        _create: function (options) {
            var self = this,
                o = self.options,
                el = self.element.get(0),  // <-- get underlying dom object which contains the panel
                h = $("h3:first", $(el)),  // <-- panel header
                a = $("a:first", h),       // <-- header anchor
                c = $("div:first", $(el)); // <-- panel content

            o._opened = false;
            $(el).addClass("ui-slidey");
            h.addClass("ui-helper-reset")
                .addClass("ui-widget-header")
                .addClass("ui-state-default")
                .addClass("ui-slidey-header")
                .css({ "position": "relative" })
                .append("<span class='ui-icon ui-icon-triangle-1-n'></span>");
            c.addClass("ui-widget-content")
                .addClass("ui-slidey-content")
                .css({
                    "height": o.height
                });
            h.click(function (e) {
                if (!o._opened) {
                    self.Open();
                } else {
                    self.Close();
                }
                e.stopPropagation();
                return false;
            });

            c.hide();
        },
        Open: function () {
            var self = this,
                o = self.options,
                el = self.element.get(0),  // <-- get underlying dom object which contains the panel
                h = $("h3:first", $(el)),  // <-- panel header
                a = $("a:first", h),       // <-- header anchor
                c = $("div:first", $(el)); // <-- panel content

            if (!o._opened) {
                $(el).animate({ "top": "-=" + o.height }, "normal");
                h.removeClass("ui-state-default").addClass("ui-state-active");
                $("span:first", h).removeClass("ui-icon ui-icon-triangle-1-n").addClass("ui-icon ui-icon-triangle-1-s");

                c.slideToggle("normal")
                o._opened = true;
            }
        },
        Close: function () {
            var self = this,
                o = self.options,
                el = self.element.get(0),  // <-- get underlying dom object which contains the panel
                h = $("h3:first", $(el)),  // <-- panel header
                a = $("a:first", h),       // <-- header anchor
                c = $("div:first", $(el)); // <-- panel content

            if (o._opened) {
                $(el).animate({ "top": "+=" + o.height }, "normal");
                h.removeClass("ui-state-active").addClass("ui-state-default");
                $("span:first", h).removeClass("ui-icon ui-icon-triangle-1-s").addClass("ui-icon ui-icon-triangle-1-n");

                c.slideToggle("normal")
                o._opened = false;
            }
        }

    });
})(jQuery);
