jQuery(document).ready(function () {

	"use strict";

	// Set BASE_PATH depending on environment
	window.BASE_PATH = (window.location.hostname === "khizarooo.github.io") ? "https://khizarooo.github.io/mysite/" : "file:///D:/khizooo/WEBSITE/static-website/mysite/";

	Render_Sidebar();
	Render_MobileMenu();
	Render_Footer();

	khizooo_tm_trigger_menu();
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

	RenderArtworksGrid();
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
                    <div class="in">
                      <h3 class="title devooo mb-2">${cat.category}</h3>
                      <p class="text mb-0">${desc}</p>
                    </div>
                  </div>
                `;
                li.querySelector('.list_inner').onclick = function() {
                  openDevsparkModal(idx);
                };
                listEl.appendChild(li);
            });
        });
}

// DEVTSPARK MODAL/OFFCANVAS
function openDevsparkModal(categoryIdx) {
	getDevsparkData().then(data => {
		const cat = data[categoryIdx];
		document.getElementById('offcanvasRightLabel').textContent = cat.category;
		let html = '';
		if (cat.subCategory && cat.subCategory.length > 0) {
			cat.subCategory.forEach(sub => {
				if (sub.title) {
					html += `<h4 class="mb-3">${sub.title}`;
					if(sub.link) html += ` <a href="${sub.link}" target="_blank" class="ms-2 small text-primary"><i class="fa fa-link"></i></a>`;
					html += `</h4>`;
				}
				if(sub.list && sub.list.length > 0) {
					html += '<dl class="mb-4">';
					sub.list.forEach(item => {
						html += `<dt>${item.title}`;
						if(item.link) html += ` <a href="${item.link}" target="_blank" class="ms-1 small text-primary"><i class="fa fa-link"></i></a>`;
						html += `</dt>`;
						html += `<dd class="mb-2">${item.description || ''}</dd>`;
					});
					html += '</dl>';
				}
			});
		} else {
			html = '<p class="text-muted">No data available for this category.</p>';
		}
		document.getElementById('subcategory-detail').innerHTML = html;
		const offcanvasEl = document.getElementById('DevsparkModal');
		const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
		offcanvas.show();
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
	// Try remote first, fallback to local
	return fetch('https://raw.githubusercontent.com/KhizaroOo/mysite/refs/heads/main/json/devspark/data.json')
		.then(r => r.ok ? r.json() : Promise.reject())
		.catch(() => fetch('json/devspark/data.json').then(r => r.json()))
		.then(data => {
			localStorage.setItem(LS_KEY, JSON.stringify({data, ts: now}));
			return data;
		});
}

// ARTWORKS GRID RENDER
function RenderArtworksGrid() {
	var grid = document.getElementById('art-grid');
	if (!grid) return;
	const artworks = [
		"1st-day-at-sea.jpg","2-worlds-whale.jpg","a-sea-fish-story.jpg","a-skull-rose-fusion.jpg","back-beauty.jpg","bearded-titan.jpg","beautiful-cats.jpg","beauty-in-eyes.jpg","big-bang-theory.jpg","big-slave.jpg","big-things.jpg","blind-hope.jpg","blocked-view.jpg","blooming-frog.jpg","blooming-genetics.jpg","blue-chef-remy.jpg","broken-hand.jpg","bubble-burst.jpg","butterfly.jpg","captured-mermaid.jpg","cat-and-coffee-mug.jpg","chaotic-vision.jpg","crocodile-&-whiskey.jpg","dead-land.jpg","dreamer.jpg","dreams-&-reality.jpg","echoes-of-the-forest-house.jpg","enchanted-lamp.jpg","enchanting-muse.jpg","eternal-blaze.jpg","expressions.jpg","eyes-that-speak.jpg","fall-of-a-model.jpg","fanon-the-angry-bird.jpg","flirting.jpg","Flower 05.jpg","flower-01.jpg","flower-02.jpg","flower-03.jpg","flower-04.jpg","flower-05.jpg","flowered-dreams.jpg","flying-key.jpg","fulgent-life.jpg","giraffe.jpg","girl-and-her-rose-crown.jpg","girl-with-no-eyes.jpg","girl-with-painted-face.jpg","glamour.jpg","good-morning.jpg","gothic-romance.jpg","great-sea-beast-terror.jpg","green-skirt-girl.jpg","guard-tower.jpg","hanging-kicks.jpg","hanging-kicls.jpg","haunted-book.jpg","haunted-cabin.jpg","haunted-red-fort-of-khziooo.jpg","heart-grenade.jpg","house-blender.jpg","huda.jpg","husband-punch.jpg","i-believe-i-can-fly.jpg","ice-cream.jpg","jack-and-sally-01.jpg","jack-and-sally-02.jpg","jenni.jpg","junior-professor.jpg","key-of-hearts.jpg","legendary-war-horse.jpg","life-within-the-jar.jpg","little-princess.jpg","lost-and-found.jpg","lost-in-thought.jpg","luna-pink-cat.jpg","magical-pencil.jpg","midnight-muse.jpg","monster.jpg","morning-rituals.jpg","mortaliy-flame.jpg","my-max.jpg","mysterious-brick-cave.jpg","mysterious-giantess.jpg","mystical-beauty.jpg","mystical-hand.jpg","naked-beauty.jpg","nature-excavation.jpg","ocean-light.jpg","octopus.jpg","peak-perfection.jpg","portal-to-the-past.jpg","positive-in-everything.jpg","prey.jpg","random-01.jpg","random-02.jpg","random-03.jpg","random-04.jpg","random-05.jpg","random-06.jpg","random-07.jpg","random-08.jpg","random-09.jpg","random-10.jpg","random-11.jpg","random-12.jpg","random-13.jpg","random-14.jpg","random-15.jpg","random-16.jpg","random-17.jpg","random-18.jpg","random-19.jpg","random-20.jpg","rapunzel.jpg","rare-intelligent-&-slave-creature.jpg","raw-beauty-01.jpg","raw-beauty-02.jpg","raw-beauty-03.jpg","raw-beauty-04.jpg","raw-beauty-05.jpg","raw-beauty-06.jpg","raw-beauty-07.jpg","raw-beauty-08.jpg","raw-beauty-09.jpg","raw-beauty-10.jpg","raw-beauty-11.jpg","raw-beauty-12.jpg","raw-beauty-13.jpg","raw-beauty-14.jpg","raw-beauty-15.jpg","rebirth.jpg","red-death.jpg","red-gandalf.jpg","red-rose.jpg","rose-enchanted.jpg","rose-head.jpg","rustic-rum-cup.jpg","sad-water.jpg","seeing-speaking-listening.jpg","shadow-watcher.jpg","shiny-blue-eyes-girl.jpg","silent-bonds.jpg","silent-scream.jpg","silent_screams.jpg","smiling-nightmare.jpg","smoker-lips.jpg","space-love.jpg","speaking-eyes.jpg","story-of-the-acropolis.jpg","stylish-rooster.jpg","tale-of-ella-two-faces.jpg","the-spot.jpg","tree-house-01.jpg","tree-house-02.jpg","tree-house-03.jpg","twisting-hand.jpg","unseen-whispers.jpg","unstoppable-strength.jpg","vintage-scooter.jpg","watchful-wanderer.jpg","whale-trip.jpg","wild-eyed-wanderer.jpg","wise-toad.jpg","young-girl-vs-dark-wind.jpg"
	];
	artworks.forEach(function(file) {
		const title = file.replace(/[-_]/g, ' ').replace(/\.jpg$/i, '').replace(/\b\w/g, l => l.toUpperCase());
		const div = document.createElement('div');
		div.className = 'Art-Piece';
		div.setAttribute('onclick', 'openArtModal(this)');
		div.innerHTML = `<img class="grid-item" src="images/artworks/${file}" alt="${title}" loading="lazy" decoding="async"><h6 class="mt-2 mb-2 text-center">${title}</h6>`;
		grid.appendChild(div);
	});
}

// ====> FUNCTIONS

// SIDEBAR
function Render_Sidebar(){
    "use strict";
	var sidebarHTML = `
		<div class="khizooo_tm_sidebar">
			<a href="${window.BASE_PATH}LandingPage.html">
				<div class="logo" data-type="avatar">
					<div class="avatar" data-img-url="${window.BASE_PATH}images/Monsters/khizooo.png" style="background-image: url('${window.BASE_PATH}images/Monsters/khizooo.png');"></div>
					<div class="image"><img src="${window.BASE_PATH}images/Monsters/khizooo.png" alt=""></div>
					<div class="text"><h3>khizooo</h3></div>
				</div>
			</a>
            <div class="menu scrollable" tabindex="5000" style="height: 643px; overflow: hidden; outline: none;">
                <ul class="anchor_nav">
                    <li><a href="${window.BASE_PATH}Portfolio.html" class="btn-header btn--stripe btn--radius m-default-color">Portfolio</a></li>
                    <li><a href="${window.BASE_PATH}Artworks.html" class="btn-header btn--stripe btn--radius m-artooo-color">Artooo</a></li>
                    <li><a href="${window.BASE_PATH}Infographics.html" class="btn-header btn--stripe btn--radius m-infooo-color">Infooo</a></li>
                    <li><a href="${window.BASE_PATH}Toolbox.html" class="btn-header btn--stripe btn--radius m-toolooo-color">Toolooo</a></li>
                    <li><a href="${window.BASE_PATH}Freebies.html" class="btn-header btn--stripe btn--radius m-freeooo-color">Freeooo</a></li>
                    <li><a href="${window.BASE_PATH}Devspark.html" class="btn-header btn--stripe btn--radius m-devooo-color">Devooo</a></li>
                    <li><button onclick="openSupportModal(this)" class="btn-header btn--stripe btn--radius m-default-color">Support 🩷</button></li>
                </ul>
            </div>
            <div class="copyright">
                <!-- <p class="text-center">Copyright © 2025 by <a class="line_effect" href="#">khizooo</a></p>
                <p class="text-center">All rights are reserved</p> -->
            </div>
			<div class="khizooo_tm_resizer">
				<a href="${window.BASE_PATH}index.html#"><i class="icon-right-dir-2"></i></a>
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
					<a href="${window.BASE_PATH}LandingPage.html">
						<div class="logo" data-type="avatar">
							<div class="avatar" data-img-url="${window.BASE_PATH}images/Monsters/khizooo.png" style="background-image: url('${window.BASE_PATH}images/Monsters/khizooo.png');"></div>
							<div class="image"><img src="${window.BASE_PATH}images/Monsters/khizooo.png" alt=""></div>
							<div class="text"><h3>khizooo</h3></div>
						</div>
					</a>
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
                        <li><a href="${window.BASE_PATH}Portfolio.html" class="btn-header btn--stripe btn--radius w-100 m-default-color">Portfolio</a></li>
                        <li><a href="${window.BASE_PATH}Artworks.html" class="btn-header btn--stripe btn--radius w-100 m-artooo-color">Artooo</a></li>
                        <li><a href="${window.BASE_PATH}Infographics.html" class="btn-header btn--stripe btn--radius w-100 m-infooo-color">Infooo</a></li>
                        <li><a href="${window.BASE_PATH}Toolbox.html" class="btn-header btn--stripe btn--radius w-100 m-toolooo-color">Toolooo</a></li>
                        <li><a href="${window.BASE_PATH}Freebies.html" class="btn-header btn--stripe btn--radius w-100 m-freeooo-color">Freeooo</a></li>
                        <li><a href="${window.BASE_PATH}Devspark.html" class="btn-header btn--stripe btn--radius w-100 m-devooo-color">Devooo</a></li>
                        <li><a href="#support" class="btn-header btn--stripe btn--radius w-100 m-default-color">Support 🩷</a></li>
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
        <div class="khizooo_tm_section" id="socials" style="background: #ffffff;">
            <div class="khizooo_tm_services p-5">
                <div class="container">
                    <div class="khizooo_tm_main_title text-center mb-4">
                        <h3 class="wow fadeInUp" data-wow-duration="1s">Connect with ME</h3>
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                            Reach out, collaborate, network, chat, hire, discuss ideas, or just say hello anytime.
                        </p>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-lg-5 justify-content-center">
                        <div class="all-social-connections text-center">
							<a href="https://www.instagram.com/khizooo_art" class="btn btn-social btn-sm btn-social-custom">Instagram</a>
							<a href="https://www.facebook.com/khizoooartist" class="btn btn-social btn-sm btn-social-custom">Facebook</a>
							<a href="https://www.pinterest.com/KhizoOo_" class="btn btn-social btn-sm btn-social-custom">Pinterest</a>
							<a href="https://www.tiktok.com/@khizooo_butt" class="btn btn-social btn-sm btn-social-custom">TikTok</a>
							<a href="https://www.snapchat.com/add/khizooo_1163?share_id=ZIvI4JY3joU&amp;locale=en-PK" class="btn btn-social btn-sm btn-social-custom">Snapchat</a>
							<a href="https://twitter.com/khizaroo" class="btn btn-social btn-sm btn-social-custom">X</a>
							<a href="https://www.linkedin.com/in/khizar=imtiaz" class="btn btn-social btn-sm btn-social-custom">LinkedIn</a>
							<a href="" class="btn btn-social btn-sm btn-social-custom">Threads</a>
							<a href="" class="btn btn-social btn-sm btn-social-custom">Behance</a>
							<a href="" class="btn btn-social btn-sm btn-social-custom">Reddit</a>
							<a href="" class="btn btn-social btn-sm btn-social-custom">DeviantArt</a>
							<a href="https://wa.me/923007683396?text=KhizoOo%20%3C3" class="btn btn-social btn-sm btn-social-custom">Whatsapp</a>
							<a href="https://join.skype.com/invite/b0k5jlb9HRmk" class="btn btn-social btn-sm btn-social-custom">Skype</a>
							<a href="https://youtube.com/@khizooo?sub_confirmation=1" class="btn btn-social btn-sm btn-social-custom">YouTube</a>
							<a href="https://t.me/KhizarImtiaz" class="btn btn-social btn-sm btn-social-custom">Telegram</a>
							<a href="https://github.com/KhizaroOo" class="btn btn-social btn-sm btn-social-custom">Github</a>
							<a href="https://discordapp.com/users/567964089989726231" class="btn btn-social btn-sm btn-social-custom">Discord</a>
							<a href="https://medium.com/@khizar.imtiaz" class="btn btn-social btn-sm btn-social-custom">Medium</a>
							<a href="https://codepen.io/Khizarooo" class="btn btn-social btn-sm btn-social-custom">Codepen</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    jQuery('.khizooo_tm_mainpart').append(footerHTML);
}


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
