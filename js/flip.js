function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
		if(element.style.transform == "rotateX(90deg)") {
			element.style.transform = "rotateX(0deg)";
		}
		else {
			element.style.transform = "rotateX(90deg)";
		}
	}
};