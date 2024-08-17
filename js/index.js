var isDisplayOn = false;
window.addEventListener('resize', function(){
	const mp = matchMedia('(max-width: 840px)');
	if(!mp.matches){
		//if screen width > 800px
		document.getElementById('nav-list').setAttribute('style','display:block');
		isDisplayOn = true;
	} else{
		document.getElementById('nav-list').setAttribute('style','display:none');
		isDisplayOn = false;
	}
});
function clicked(e){
	console.log(e.target)
	if(!isDisplayOn){
		document.getElementById('nav-list').setAttribute('style','display:block');
		isDisplayOn = true;
	}else{
		document.getElementById('nav-list').setAttribute('style','display:none');
		isDisplayOn = false;
	}
	
}