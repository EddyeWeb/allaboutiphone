function gallery (img) {
	$("#bigPic img").attr("src", img);
	$("#bigPic, #black").fadeIn(500);
}

//ha a galéria bezárása gombra kattint
function closeGalery() {
	$("#bigPic img").attr("src", '');
	$("#bigPic, #black").fadeOut(500);
}