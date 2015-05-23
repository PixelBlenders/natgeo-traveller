function content_update() {
    
    var e = (81 - parseInt(main_li.children("a").css("line-height"), 10)) / 2 - 1,
        t = e + 2;
    main_li.children("a").css({
        "padding-top": e + "px",
        "padding-bottom": t + "px"
    })
}

var header = jQuery(".main_header"),
    header_h = header.height(),
    headerWrapper = jQuery(".header_wrapper"),
    menu = header.find("ul.menu"),
    main_li = menu.children("li"),
    html = jQuery("html"),
    body = jQuery("body"),
    footer = jQuery(".main_footer"),
    window_h = jQuery(window).height(),
    window_w = jQuery(window).width(),
    main_wrapper = jQuery(".main_wrapper"),
    main_wrapper_min = window_h - header_h - footer.height() - parseInt(jQuery(".site_wrapper").css("padding-top"), 10) - parseInt(jQuery(".site_wrapper").css("padding-bottom"), 10),
    
    fs_min = 0,
    map_h = 0,
    setTop = 0;
 jQuery(window).resize(function() {
    window_h = jQuery(window).height(), window_w = jQuery(window).width(), header_h = header.height(), content_update(), jQuery(".fw_background").size() > 0 && fullscrn_bg()
}), jQuery(window).load(function() {
    content_update()
});