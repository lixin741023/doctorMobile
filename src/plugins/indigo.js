! function(n) {
	var e = n.document;
	t = e.documentElement;
	i = 768;
	d = i / 100;
	o = "orientationchange" in n ? "orientationchange" : "resize";
	a = function() {
		var n = t.clientWidth || 320;
		n > 1280 && (n = 1280);
		n < 768 && (n=768);//*/
		t.style.fontSize = n / d + "px";
	};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1));
}(window);

