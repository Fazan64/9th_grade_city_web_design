function menuIn() {
	
	document.getElementById("MainInnerWrapper").setAttribute('style',
		'transform: RotateX(-30deg);-webkit-transform: RotateX(-30deg);'
	);
	
	document.getElementById("MainWrapper").style.top = '145px';
	
	document.getElementById("Menu").style.top = '0px';
	document.getElementById("Gradient").style.opacity = 1;
	
}

function menuOut() {

	document.getElementById("MainInnerWrapper").setAttribute('style',
		'transform: RotateX(0deg);-webkit-transform: RotateX(0deg);'
	);
	
	document.getElementById("MainWrapper").style.top = '0px';
	
	document.getElementById("Menu").style.top = '-145px';
	document.getElementById("Gradient").style.opacity = 0;
}

window.onload = function () {
	//fade all pics in miniGalls
	var galls = document.getElementsByClassName("MiniGall");
	for ( var i = 0; i < galls.length; i++) {
	
		var gall = galls[i];
		var children = gall.children;
		
		for (j = 0; j < children.length; j++) {
			var child = children[j];
			child.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), ' + child.style.backgroundImage;
		}
	}
	
	//fill the gallery
	
	var imageholders = document.getElementsByClassName("imageholder");
	for ( var i = 0; i < imageholders.length; i++) {
		
		var imageholder = imageholders[i];
		
		imageholder.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url("' + imageholder.innerHTML +'")'; 
		
	}
}

function FormClear() {
	var inputs = document.getElementsByTagName("input");
	for ( var i = 0; i < inputs.length; i++) {
		
		var input = inputs[i];
		input.value ="";
		
	}
}