jQuery(document).ready(function () {

    "use strict";

    Render_Header();
    Render_Sidebar(); // Add this line to call the new function

    jQuery(window).on('load', function () {
        
    });
    jQuery(window).on('scroll', function () {

    });
    jQuery(window).on('resize', function () {
        
    });


});

// MODALBOX
function Render_Header(){
    "use strict";	
    jQuery('.khizooo_tm_all_wrap').prepend('<div class="khizooo_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// SIDEBAR
function Render_Sidebar(){
    "use strict";
    var sidebarHTML = `
        <div class="khizooo_tm_sidebar">
            <div class="logo" data-type="avatar">
                <!-- You can set your own avatar or image or text as a logo. data-type values are: "avatar", "image", "text" -->
                <div class="avatar" data-img-url="images/Monsters/khizooo.png" style="background-image: url(images/Monsters/khizooo.png);"></div>
                <div class="image"><img src="images/Monsters/khizooo.png" alt=""></div>
                <div class="text"><h3>khizooo</h3></div>
            </div>
            <div class="menu scrollable" tabindex="5000" style="height: 643px; overflow: hidden; outline: none;">
                <ul class="anchor_nav">
                    <li><a href="#" class="btn-header btn--stripe btn--radius m-default-color">Portfolio</a></li>
                    <li><a href="abc" class="btn-header btn--stripe btn--radius m-artooo-color">Artooo</a></li>
                    <li><a href="abc" class="btn-header btn--stripe btn--radius m-infooo-color">Infooo</a></li>
                    <li><a href="abc" class="btn-header btn--stripe btn--radius m-toolooo-color">Toolooo</a></li>
                    <li><a href="abc" class="btn-header btn--stripe btn--radius m-freeooo-color">Freeooo</a></li>
                    <li><a href="abc" class="btn-header btn--stripe btn--radius m-devooo-color">Devooo</a></li>
                    <li><a href="abc" class="btn-header btn--stripe btn--radius m-default-color">Support 🩷</a></li>
                </ul>
            </div>
            <div class="copyright">
                <!-- <p class="text-center">Copyright © 2025 by <a class="line_effect" href="#">khizooo</a></p>
                <p class="text-center">All rights are reserved</p> -->
            </div>
            <div class="khizooo_tm_resizer">
                <a href="./index.html#"><i class="icon-right-dir-2"></i></a>
            </div>
        </div>
    `;
    jQuery('.khizooo_tm_all_wrap').prepend(sidebarHTML);
}