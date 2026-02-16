window.BASE_PATH = "/";

// ===============================
// DOM READY (NO jQuery here ❗)
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // SAFE jQuery usage
    // ===============================
    jQuery(function ($) {
      console.log("jQuery loaded safely 😌");

		"use strict";

		khizooo_tm_trigger_menu();
		khizooo_tm_cursor();
		khizooo_tm_imgtosvg();
		khizooo_tm_data_images();
		khizooo_tm_contact_form();

		khizooo_tm_scrollable();
		khizooo_tm_jarallax();
		khizooo_tm_mycounter();
		myAccordion();
		khizooo_tm_totop();
		khizooo_tm_totop_fade();
		khizooo_tm_down();
		khizooo_tm_resizer();
		khizooo_tm_canvas_effect();

		RenderDevsparkList();

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

  });


// DEVTSPARK LIST RENDER
function RenderDevsparkList() {
		const listEl = document.getElementById('devspark_list');
		if (!listEl) return;
        getDevsparkData().then(data => {
            listEl.innerHTML = '';
            data.forEach((cat, idx) => {
                const desc = cat.text || '';
                const li = document.createElement('li');
				li.innerHTML = `
					<div class="list_inner p-5" data-category-idx="${idx}">
						<div class="in"><h2 class="title devooo mb-2">${cat.category}</h2><p class="text mb-0">${desc}</p></div>
					</div>
				`;
				const inner = li.querySelector('.list_inner');
				inner.addEventListener('click', function(e) {
					e.stopPropagation();
					// Remove highlight from all
					document.querySelectorAll('#devspark_list .list_inner').forEach(el => el.classList.remove('active-devspark'));
					// Add highlight to clicked
					this.classList.add('active-devspark');
					generateSubCategories(idx);
				});
				listEl.appendChild(li);
            });
        });
}

// DEVTSPARK MODAL/OFFCANVAS
function generateSubCategories(categoryIdx) {
	console.log(categoryIdx);
	getDevsparkData().then(data => {
		const cat = data[categoryIdx];
		console.log('Devspark Modal Data:', cat);
		let html = '';
		if (!cat) {
			html = '<p class="text-danger">Category data not found.</p>';
		} else if (cat.subCategory && Array.isArray(cat.subCategory) && cat.subCategory.length > 0) {
			cat.subCategory.forEach(sub => {
				if (sub.title) {
					html += `<h4 class='mb-3'>${sub.title}`;
					if(sub.link) html += ` <a href='${sub.link}' target='_blank' class='ms-2 small text-primary'><i class='fa fa-link'></i></a>`;
					html += `</h4>`;
				}
				if(sub.list && Array.isArray(sub.list) && sub.list.length > 0) {
					html += "<dl class='mb-4'>";
					sub.list.forEach(item => {
						html += `<dt>${item.title}`;
						if(item.link) html += ` <a href='${item.link}' target='_blank' class='ms-1 small text-primary'><i class='fa fa-link'></i></a>`;
						html += `</dt>`;
						html += `<dd class='mb-2'>${item.description || ''}</dd>`;
					});
					html += '</dl>';
				}
			});
		} else {
			html = '<p class="text-muted">No data available for this category.</p>';
		}

		const labelEl = document.getElementById('offcanvasRightLabel');
		if (labelEl && cat && cat.category) {
			labelEl.textContent = cat.category;
		}
		const detailEl = document.getElementById('subcategory-detail');
		if (detailEl) {
			detailEl.innerHTML = '';
			detailEl.innerHTML = html;
		} else {
			console.error('subcategory-detail element not found');
		}
		const offcanvasEl = document.getElementById('DevsparkModal');
		if (offcanvasEl) {
			try {
				const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
				offcanvas.show();
					// Remove highlight when modal is hidden
					offcanvasEl.addEventListener('hidden.bs.offcanvas', function handler() {
						document.querySelectorAll('#devspark_list .list_inner').forEach(el => el.classList.remove('active-devspark'));
						offcanvasEl.removeEventListener('hidden.bs.offcanvas', handler);
					});
			} catch (e) {
				console.error('Offcanvas error:', e);
			}
		} else {
			console.error('DevsparkModal element not found');
		}
	}).catch(err => {
		console.error('Error loading devspark data:', err);
		const detailEl = document.getElementById('subcategory-detail');
		if (detailEl) {
			detailEl.innerHTML = '<p class="text-danger">Failed to load category data.</p>';
		}
	});
}

// Helper: Get devspark data with localStorage cache
function getDevsparkData() {
	const LS_KEY = 'devspark_data_json';
	const LS_TTL = 24 * 60 * 60 * 1000; // 1 day
	const now = Date.now();
	let cached = null;
	try {
		cached = JSON.parse(localStorage.getItem(LS_KEY));
	} catch {}
	if (cached && cached.data && cached.ts && (now - cached.ts < LS_TTL)) {
		return Promise.resolve(cached.data);
	}

	return fetch('https://raw.githubusercontent.com/KhizaroOo/mysite/refs/heads/main/json/devspark/data.json')
		.then(r => r.ok ? r.json() : Promise.reject())
		.catch(() => fetch('https://raw.githubusercontent.com/KhizaroOo/mysite/refs/heads/main/json/devspark/data.json').then(r => r.json()))
		.then(data => {
			localStorage.setItem(LS_KEY, JSON.stringify({data, ts: now}));
			return data;
		});
}


// ====> FUNCTIONS

// SUPPORT MODAL (Neutral Theme)
function openSupportModal() {
    "use strict";
    jQuery('#supportModal').remove();
    var content = `
    <div class="modal fade" id="supportModal" tabindex="-1" aria-labelledby="supportModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style="background: #EEEEEE; border: 2px solid #3a3a3a; border-radius: 18px; color: #222; box-shadow: 0 8px 32px rgba(0,0,0,0.12);">
          <div class="modal-header" style="border-bottom: 2px solid #3a3a3a; background: #FFFFFF; border-top-left-radius: 16px; border-top-right-radius: 16px;">
            <h5 class="modal-title" id="supportModalLabel" style="color: #3a3a3a; font-weight: 700;">Support My Work 🩷</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="padding: 2rem;">
            <p class="mb-3" style="color: #555;">Your support helps me create more art and code! Donate via crypto below.</p>
            <div class="support_donations">
              <div class="donation_item mb-3 p-3" style="background:#FFFFFF; border:2px solid #3a3a3a; border-radius:12px; color:#222;">
                <h6 style="color:#3a3a3a; font-weight:600;margin-bottom: 10px;">Bitcoin (BTC)</h6>
                <div class="input-group mb-2">
                  <input type="text" class="form-control" value="14jRkGQ9r4JnvA2L6Z6SKrD31zvMhQrTfw" readonly style="background:transparent; color:#222; border:1px solid #3a3a3a;font-size: 11px;">
                  <button class="btn btn-outline-primary copy-btn" data-wallet="14jRkGQ9r4JnvA2L6Z6SKrD31zvMhQrTfw" style="border:1px solid #3a3a3a; color:#3a3a3a; background:#FFFFFF;font-size: 11px;">Copy</button>
                </div>
              </div>
              <div class="donation_item mb-3 p-3" style="background:#FFFFFF; border:2px solid #3a3a3a; border-radius:12px; color:#222;">
                <h6 style="color:#3a3a3a; font-weight:600;margin-bottom: 10px;">Ethereum (ETH)</h6>
                <div class="input-group mb-2">
                  <input type="text" class="form-control" value="0x221fcfad5af2d4fb2fd848ab9e048f824a564b98" readonly style="background:transparent; color:#222; border:1px solid #3a3a3a;font-size: 11px;">
                  <button class="btn btn-outline-primary copy-btn" data-wallet="0x221fcfad5af2d4fb2fd848ab9e048f824a564b98" style="border:1px solid #3a3a3a; color:#3a3a3a; background:#FFFFFF;font-size: 11px;">Copy</button>
                </div>
              </div>
              <div class="donation_item mb-3 p-3" style="background:#FFFFFF; border:2px solid #3a3a3a; border-radius:12px; color:#222;">
                <h6 style="color:#3a3a3a; font-weight:600;margin-bottom: 10px;">Solana (SOL)</h6>
                <div class="input-group mb-2">
                  <input type="text" class="form-control" value="3hr8uf3pEnaVczY8CQBVugWZHUR4YZAxmgdDHhoLSPJ7" readonly style="background:transparent; color:#222; border:1px solid #3a3a3a;font-size: 11px;">
                  <button class="btn btn-outline-primary copy-btn" data-wallet="3hr8uf3pEnaVczY8CQBVugWZHUR4YZAxmgdDHhoLSPJ7" style="border:1px solid #3a3a3a; color:#3a3a3a; background:#FFFFFF;font-size: 11px;">Copy</button>
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <p style="color:#555;">Thank you for your generosity! Every bit helps. 💖</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    jQuery('body').append(content);
    var modal = new bootstrap.Modal(document.getElementById('supportModal'));
    modal.show();
    jQuery('.copy-btn').on('click', function() {
        var wallet = jQuery(this).data('wallet');
        navigator.clipboard.writeText(wallet).then(function() {
            alert('Address copied to clipboard!');
        }, function(err) {
            alert('Could not copy address');
        });
    });
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

// MY LOAD
function khizooo_tm_my_load(){
	"use strict";
	setTimeout(hideWhiteScreenLoader, 1000);
}

function hideWhiteScreenLoader() {
	const loader = document.getElementById('white-screen-loader');
	if (loader) {
		loader.style.transition = 'opacity 0.5s';
		loader.style.opacity = '0';
		setTimeout(() => {
			if (loader.parentNode) loader.parentNode.removeChild(loader);
		}, 500);
	}
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

// DATA IMAGES
function khizooo_tm_data_images(){
	
	"use strict";
	
	var data = jQuery('*[data-img-url]');
	
	data.each(function(){
		var element = jQuery(this);
		var url = element.data('img-url');
		// If not absolute, prepend BASE_PATH
		if (url && !/^https?:\/\//.test(url) && !url.startsWith(window.BASE_PATH)) {
			url = window.BASE_PATH + url.replace(/^\//, '');
		}
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