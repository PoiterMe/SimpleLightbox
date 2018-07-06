# SimpleLightbox

A mimalistic, simplistic, fully responsive Lightbox-Plugin. 
There is no Resizing with JavaScript, all done with pure CSS.
The Javascript is only for generating and controlling the behavior

## Demo 
http://felib.justpm.de/github/SimpleLightbox/

## Features
* Header, Content
	* Header with Headline and Close-Button
	* Content with scrolling
*  ~ 2kb bundled each (js, css)
* many options

### Options:
```javascript
// DEFAULT OPTIONS
let defaultOptions = {
	headline: "",
	// content html (document.getElementById("lightBoxContent").outerHTML)
	content: "",
	// text for close button
	close: "",
	// prevent document scrolling if the lightbox is open
	noScrolling : true,
	// close by clicking out of the lightbox
	closeOnClickOut : true,
	// Prefix, Element Namespace, must be changed in css either
	lbClassPrefix: "hffLightbox",
	/*
	Template with the following placeholder
	$lbClass, $headline, $close, $content, $footer
	*/
	html: `<div class="$lbClass">
			<div class="$lbClass-wrapper">
				<div class="$lbClass-header">
					<div class="$lbClass-header-headline">$headline</div>
					<div class="$lbClass-close">$close</div>
				</div>
				<div class="$lbClass-content">
					<div class="$lbClass-content-scroller">$content</div>
				</div>
				<div class="$lbClass-footer">$footer</div>
			</div>
		</div>`,
	// callback fnOnInit fires on initializing
	fnOnInit: function () {},
	// callback fnOnInit fires on closing
	fnOnClose: function () {}
}
```

### Usage:
```html
<div id="content">
	<h1>Test</h1>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis deleniti dicta ea error, facilis ipsa labore nam obcaecati, perferendis perspiciatis quisquam, quos reiciendis sit unde ut voluptas. Consequuntur, natus.</p>
</div>
```

```javascript
(function () {
	var lbImg = new Lightbox({
		headline: "Image Lightbox",
		content: "<img src='src/img/bg.jpg' style='width: 100%; height: auto; max-width: 500px'>",
		closeOnClickOut : false
	});

	var lbContent = new Lightbox({
		headline: "Content Lightbox",
		content: document.getElementById("content").outerHTML
	});

	var lbOpenImg = document.querySelector(".js-lb_img"),
		lbOpenContent = document.querySelector(".js-lb_content");

	if (lbOpenImg) lbOpenImg.addEventListener("click", lbImg.open);
	if (lbOpenContent) lbOpenContent.addEventListener("click", lbContent.open);
})();

```

