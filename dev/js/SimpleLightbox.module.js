import * as polyfills from "./polyfill.module.js";

function Lightbox(_d) {
	// Polyfills
	(() => {
		polyfills.NodeRemove();
		polyfills.ObjectAssign();
	})();

	_d = Object.assign({
		headline: "",
		content: "",
		close: "",
		noScrolling: true,
		closeOnClickOut: true,
		lbClassPrefix: "hffLightbox",
		html: `<div class="$lbClass"><div class="$lbClass-wrapper"><div class="$lbClass-header"><div class="$lbClass-header-headline">$headline</div><div class="$lbClass-close">$close</div></div><div class="$lbClass-content"><div class="$lbClass-content-scroller">$content</div></div></div></div>`,
		fnOnInit: function () {
		},
		fnOnClose: function () {
		}
	}, _d);

	let _c = {
		$lb: null,
		$lbClone: null,
		$close: null
	};

	function close() {
		if (_c.$lbClone) {
			_c.$lbClone.remove();
			if (_d.noScrolling) document.body.style.overflow = "auto";
			_d.fnOnClose();
		}
	}

	function createElementFromHTML(htmlString) {
		let div = document.createElement('div');
		div.innerHTML = htmlString.trim();
		return div.firstChild;
	}

	function createLightbox() {
		close();
		if (!_c.$lb) {
			let html = _d.html,
				replaceMap = {
					"$lbClass": _d.lbClassPrefix,
					"$headline": _d.headline,
					"$content": _d.content,
					"$close": _d.close
				},
				re = new RegExp("\\" + Object.keys(replaceMap).join("|\\"), "gi");
			html = html.replace(re, matched => replaceMap[matched]);
			_c.$lb = createElementFromHTML(html);
		}
		_c.$lbClone = _c.$lb.cloneNode(true);
		_c.$close = _c.$lbClone.querySelector("." + _d.lbClassPrefix + "-close");
		_c.$close.addEventListener("click", close);
		if (_d.closeOnClickOut) {
			_c.$lbClone.addEventListener("click", e => {
				if (e.target.isEqualNode(_c.$lbClone)) close();
			});
		}
		document.body.appendChild(_c.$lbClone);
		if (_d.noScrolling) document.body.style.overflow = "hidden";
		_d.fnOnInit(_c.$lb);
	}

	this.close = function () {
		close();
	};

	this.open = function (o) {
		if (o || null) {
			_d = Object.assign(_d, o);
			_c.$lb = null;
		}
		createLightbox();
	};
};


export {Lightbox};




