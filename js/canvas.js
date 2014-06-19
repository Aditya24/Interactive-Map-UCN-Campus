function doFirst(){
	var can = document.getElementById('canvas');
	canvas = can.getContext('2d');

	var img = new Image();
	img.src = "images/ucn1.png";
	
	img.addEventListener("load", function(){
		canvas.drawImage(img, 0, 0)
	}, false);

}
window.addEventListener("load", doFirst(), false);

