(function () {
	'use strict';

	var katexMath = (function () {
		var items = document.getElementsByClassName("MathJax_Preview");
		for (var i = 0; i < items.length; i++) {
			katex.render(items[i].innerText, items[i]);
		}
	});

	(function () {
		var onReady = function onReady(fn) {
			if (document.addEventListener) {
				document.addEventListener("DOMContentLoaded", fn);
			} else {
				document.attachEvent("onreadystatechange", function () {
					if (document.readyState === "interactive") {
						fn();
					}
				});
			}
		};

		onReady(function () {
			if (typeof katex !== "undefined") {
				katexMath();
			}
		});
	})();

}());