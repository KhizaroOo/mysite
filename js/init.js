jQuery(document).ready(function () {

	"use strict";

	Render_Sidebar();
	Render_MobileMenu();
	Render_Footer();


	khizooo_tm_modalbox();
	khizooo_tm_trigger_menu();
	khizooo_tm_service_popup();
	khizooo_tm_modalbox_news();
	khizooo_tm_modalbox_portfolio();
	khizooo_tm_portfolio();
	khizooo_tm_cursor();
	khizooo_tm_imgtosvg();
	khizooo_tm_popup();
	khizooo_tm_data_images();
	khizooo_tm_contact_form();
	khizooo_tm_owl_carousel();
	khizooo_tm_scrollable();
	khizooo_tm_jarallax();
	khizooo_tm_mycounter();
	myAccordion();
	khizooo_tm_totop();
	khizooo_tm_totop_fade();
	khizooo_tm_down();
	khizooo_tm_resizer();
	khizooo_tm_canvas_effect();

	jQuery(window).on('load', function () {
		khizooo_tm_my_load();
	});
	jQuery(window).on('scroll', function () {
		dood_tm_progress_line();
	});
	jQuery(window).on('resize', function () {
		khizooo_tm_jarallax();
	});


});

// ====> FUNCTIONS

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
                    <li><a href="javascript:void(0)" class="btn-header btn--stripe btn--radius m-artooo-color">Artooo</a></li>
                    <li><a href="javascript:void(0)" class="btn-header btn--stripe btn--radius m-infooo-color">Infooo</a></li>
                    <li><a href="javascript:void(0)" class="btn-header btn--stripe btn--radius m-toolooo-color">Toolooo</a></li>
                    <li><a href="javascript:void(0)" class="btn-header btn--stripe btn--radius m-freeooo-color">Freeooo</a></li>
                    <li><a href="javascript:void(0)" class="btn-header btn--stripe btn--radius m-devooo-color">Devooo</a></li>
                    <li><button onclick="openSupportModal(this)" class="btn-header btn--stripe btn--radius m-default-color">Support 🩷</button></li>
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

// MOBILE MENU
function Render_MobileMenu(){
    "use strict";
    var mobileMenuHTML = `
        <div class="khizooo_tm_mobile_menu">
            <div class="mobile_menu_inner">
                <div class="mobile_in">
                    <div class="logo" data-type="avatar">
                        <div class="avatar" data-img-url="images/Monsters/khizooo.png" style="background-image: url(images/Monsters/khizooo.png);"></div>
                        <div class="image"><img src="images/Monsters/khizooo.png" alt=""></div>
                        <div class="text"><h3>khizooo</h3></div>
                    </div>
                    <div class="trigger">
                        <div class="hamburger hamburger--slider">
                            <div class="hamburger-box">
                                <div class="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <div class="dropdown_inner">
                    <ul class="anchor_nav">
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-default-color">Portfolio</a></li>
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-artooo-color">Artooo</a></li>
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-infooo-color">Infooo</a></li>
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-toolooo-color">Toolooo</a></li>
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-freeooo-color">Freeooo</a></li>
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-devooo-color">Devooo</a></li>
                        <li><a href="abc" class="btn-header btn--stripe btn--radius w-100 m-default-color">Support 🩷</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    jQuery('.khizooo_tm_all_wrap').prepend(mobileMenuHTML);
}

// FOOTER
function Render_Footer(){
    "use strict";
    var footerHTML = `
        <div class="khizooo_tm_section mb-4" id="socials">
            <div class="khizooo_tm_services p-2">
                <div class="container">
                    <div class="khizooo_tm_main_title text-center mb-4">
                        <h3 class="wow fadeInUp" data-wow-duration="1s">Connect with ME</h3>
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                            Reach out, collaborate, network, chat, hire, discuss ideas, or just say hello anytime.
                        </p>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="d-flex flex-wrap justify-content-center align-items-center gap-3">
                            <a href="https://www.facebook.com/khizoooartist" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/khizooo_art" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/khizar-imtiaz" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://twitter.com/khizaroo" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://youtube.com/@khizooo" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.tiktok.com/@khizooo_butt" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-tiktok"></i>
                            </a>
                            <a href="https://www.pinterest.com/KhizoOo_" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                            <a href="https://opensea.io/KhizoOo_" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-ethereum"></i>
                            </a>
                            <a href="https://wa.me/923007683396?text=KhizoOo%20%3C3" target="_blank" class="btn btn--stripe btn--radius">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    jQuery('.khizooo_tm_mainpart').append(footerHTML);
}


// SUPPORT MODAL
function openSupportModal(){
    "use strict";
    var content = `
        <div class="khizooo_tm_modalbox_support">
            <div class="khizooo_tm_main_title text-center mb-4">
                <h3>Support My Work 🩷</h3>
                <p>Your support helps me create more art and code! Donate via crypto below.</p>
            </div>
            <div class="support_donations">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="donation_item mb-3 p-3 border rounded">
                            <h5><i class="fab fa-bitcoin text-warning"></i> Bitcoin (BTC)</h5>
                            <p class="mb-2">Wallet: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>
                            <button class="btn btn-sm btn-outline-primary copy-btn" onclick="copyToClipboard('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh')">Copy Address</button>
                        </div>
                        <div class="donation_item mb-3 p-3 border rounded">
                            <h5><i class="fab fa-ethereum text-primary"></i> Ethereum (ETH)</h5>
                            <p class="mb-2">Wallet: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
                            <button class="btn btn-sm btn-outline-primary copy-btn" onclick="copyToClipboard('0x742d35Cc6634C0532925a3b844Bc454e4438f44e')">Copy Address</button>
                        </div>
                        <div class="donation_item mb-3 p-3 border rounded">
                            <h5><i class="fab fa-solana text-purple"></i> Solana (SOL)</h5>
                            <p class="mb-2">Wallet: 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU</p>
                            <button class="btn btn-sm btn-outline-primary copy-btn" onclick="copyToClipboard('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU')">Copy Address</button>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <p>Thank you for your generosity! Every bit helps. 💖</p>
                </div>
            </div>
        </div>
    `;
    jQuery('body').append(content);
    jQuery('.khizooo_tm_modalbox_support').addClass('opened show');
}

// COPY TO CLIPBOARD FUNCTION
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert('Address copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

// MODALBOX
function khizooo_tm_modalbox(){
	"use strict";
	
	jQuery('.khizooo_tm_all_wrap').prepend('<div class="khizooo_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// TRIGGER MENU
function khizooo_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.trigger .hamburger');
	var mobileMenu		= jQuery('.khizooo_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.khizooo_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// SERVICE POPUP
function khizooo_tm_service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.khizooo_tm_modalbox');
	var button			= jQuery('.khizooo_tm_services .khizooo_tm_full_link');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent	= element.closest('.khizooo_tm_services .service_list ul li');
		var elImage	= parent.find('.popup_service_image').attr('src');
		var title	= parent.find('.title').text();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
		khizooo_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title"><h3>'+title+'</h3></div>');
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// MODALBOX NEWS
function khizooo_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox		= jQuery('.khizooo_tm_modalbox');
	var button			= jQuery('.khizooo_tm_news .khizooo_tm_full_link,.khizooo_tm_news .news_list .title a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= element.closest('.list_inner').find('.image .main').data('img-url');
		var meta		= parent.find('.meta').html();
		var title		= parent.find('.details .title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><div class="meta">'+meta+'</div><div class="title"><h3>'+title+'</h3></div></div>');
		khizooo_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// MODALBOX PORTFOLIO
function khizooo_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox	= jQuery('.khizooo_tm_modalbox');
	var button		= jQuery('.khizooo_tm_portfolio .portfolio_popup');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent		= element.closest('li');
		var image		= parent.find('.image .main').data('img-url');
		var details 	= parent.find('.hidden_content').html();
		var info 		= parent.find('.details').html();
		
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(details);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">'+info+'</div>');	
		khizooo_tm_data_images();
		return false;
	});
}

// PORTFOLIO FILTER
function khizooo_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var filter		 = jQuery('.khizooo_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var element		= jQuery(this);
				var selector 	= element.attr('data-filter');
				var list		= element.closest('.khizooo_tm_portfolio').find('.portfolio_list').children('ul');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});	
		}
	}
}

// MY LOAD
function khizooo_tm_my_load(){
	
	"use strict";
	
}

// CURSOR
function khizooo_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// IMAGE TO SVG
function khizooo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// POPUP
function khizooo_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 100,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// DATA IMAGES
function khizooo_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// CONTACT FORM
function khizooo_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// OWL CAROUSEL
function khizooo_tm_owl_carousel(){

	"use strict";
	
	var carousel = jQuery('.khizooo_tm_testimonials .owl-carousel');

	carousel.owlCarousel({
		loop: true,
		items: 1,
		lazyLoad: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: false,
		nav: false,
		navSpeed: false,
	});
	
	var carousel2 = jQuery('.khizooo_tm_partners .owl-carousel');

	carousel2.owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:4},
			1200:{items:4},
			1600:{items:4},
			1920:{items:4}
		}
	});
	khizooo_tm_imgtosvg();
}

// MENU SCROLL
function khizooo_tm_scrollable(){
	
	"use strict";
	
	var avatarHeight	= jQuery('.khizooo_tm_sidebar .logo .avatar').outerHeight()/2;
	var logoType		= jQuery('.khizooo_tm_sidebar .logo').data('type');
	var H				= jQuery(window).height();
	var W				= jQuery(window).width();
	var scrollable		= jQuery('.khizooo_tm_sidebar .menu.scrollable');
	var verMenu			= jQuery('.khizooo_tm_sidebar .menu');
	var logoHeight 		= 0;
	var copyrightHeight	= 0;
	
	if(W <= 1600){
		copyrightHeight = jQuery('.khizooo_tm_sidebar .copyright').outerHeight()+25;
	}else{
		copyrightHeight = jQuery('.khizooo_tm_sidebar .copyright').outerHeight()+40;
	}
	if(logoType === 'avatar'){
		logoHeight = jQuery('.khizooo_tm_sidebar .logo').height()+avatarHeight;
	}else{
		logoHeight = jQuery('.khizooo_tm_sidebar .logo').height();
	}
	verMenu.css({height:H-logoHeight-copyrightHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-copyrightHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// JARALLAX
function khizooo_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
		});
	});
}

function recallJarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax('destroy').jarallax({
			speed: customSpeed,
		});
	});
	
}

// COUNTER
function khizooo_tm_mycounter(){
	
	"use strict";
	
	jQuery('.tm_counter').removeClass('stop');
	
	jQuery('.tm_counter').each(function() {

	var el		= jQuery(this);
		el.waypoint({
			handler: function(){

				if(!el.hasClass('stop')){
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},	
					});
				}
			},offset:'95%'	
		});
	});
}

// ACCORDION
function myAccordion(){
	"use strict";
	
	var button		= jQuery('.accordion_wrap .accordion_header');
	
	button.on('click',function(){
		var element = jQuery(this);
		var li		= element.closest('.accordion');
		if(li.hasClass('active')){
			li.removeClass('active').find('.accordion_content').slideUp();
		}else{
			li.siblings('.active').removeClass('active').find('.accordion_content').slideUp();
			li.addClass('active').find('.accordion_content').slideDown();
		}
		
		return false;
		
	});
	
}

// TOTOP
function khizooo_tm_totop(){
  
	"use strict";
	
	var text = $('.progressbar .text');
	text.css({bottom: 105 + text.width()});
	$(".progressbar a").on('click', function(e) {
		e.preventDefault();    
		$("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

// PROGRESS LINE
function dood_tm_progress_line(){
	
	"use strict";
	
	var line			= jQuery('.progressbar .line');
	var documentHeight 	= jQuery(document).height();
	var windowHeight 	= jQuery(window).height();
	var winScroll 		= jQuery(window).scrollTop();
	var value 			= (winScroll/(documentHeight-windowHeight))*100;
	var position 		= value;

	line.css('height',position+"%");
}

// TO TOP FADE
function khizooo_tm_totop_fade(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var progress	 	= jQuery('.progressbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			progress.addClass('animate');
		}else{
			progress.removeClass('animate');
		}
	});
}

// ANCHOR
try{
	jQuery('.anchor_nav').onePageNav();
}	
catch{

}

// DOWN
function khizooo_tm_down(){
	
	"use strict";
		
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 800);
		}
		
		return false;
	});
}

// RESIZER
function khizooo_tm_resizer(){
	
	"use strict";
	
	var button	= jQuery('.khizooo_tm_resizer a');
	
	button.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('opened')){
			element.addClass('opened');
			jQuery('body').addClass('resize');
		}else{
			element.removeClass('opened');
			jQuery('body').removeClass('resize');
		}
		setTimeout(function(){recallJarallax();},350);
		return false;
	});
}




// BACKGROUND CANVAS
function khizooo_tm_canvas_effect() {
    "use strict";

    var $container = jQuery('.canvas_effects');

    if ($container.length) {
        var maxx = window.innerWidth;
        var maxy = window.innerHeight;
        var halfx = maxx / 2;
        var halfy = maxy / 2;

        // Create canvas inside the container
        var canvas = document.createElement("canvas");
        $container[0].appendChild(canvas);

        canvas.width = maxx;
        canvas.height = maxy;

        var context = canvas.getContext("2d");

        // Dot count
        var dotCount = Math.floor(600 * 1.15);
        var dots = [];

        for (var i = 0; i < dotCount; i++) dots.push(new dot());

        function render() {
            context.clearRect(0, 0, maxx, maxy); // transparent bg
            for (var i = 0; i < dotCount; i++) {
                dots[i].draw();
                dots[i].move();
            }
            requestAnimationFrame(render);
        }

        function dot() {
            this.rad_x = 2 * Math.random() * halfx + 1;
            this.rad_y = 1.2 * Math.random() * halfy + 2;
            this.alpha = Math.random() * 660 + 1;
            this.speed = (Math.random() < 0.1 ? 1 : -1) * 0.05;
            this.size = Math.random() * 4 + 1;

            this.h = Math.floor(Math.random() * 360);
            this.s = Math.floor(70 + Math.random() * 30);
            this.l = Math.floor(50 + Math.random() * 30);
        }

        dot.prototype.draw = function () {
            var dx = halfx + this.rad_x * Math.cos(this.alpha * Math.PI / 180);
            var dy = halfy + this.rad_y * Math.sin(this.alpha * Math.PI / 180);

            context.fillStyle = `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
            context.fillRect(dx, dy, this.size, this.size);
        };

        dot.prototype.move = function () {
            this.alpha += this.speed;
            this.h = (this.h + 0.3) % 360;
        };

        render();

        // ❗ Resize support
        window.addEventListener("resize", () => {
            maxx = window.innerWidth;
            maxy = window.innerHeight;
            halfx = maxx / 2;
            halfy = maxy / 2;

            canvas.width = maxx;
            canvas.height = maxy;
        });
    }
}
