button2.addEventListener("click", displaybox2);const closebox = document.getElementsByClassName("closebox");var i;for (i=0; i<closebox.length; i++){	closebox[i].addEventListener("click", function() {		this.parentElement.className="closed";		}});