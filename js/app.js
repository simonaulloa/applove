/*
 * Archivo principal de funcionalidad de JS
	lo que hizo la blanca - veamos si kxamos U-U
*/

(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-work"));
	var modal = document.getElementById("box-work-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();

	

/*
funcion autoinvocada

(function miAlert(){
	....
})()

Es equivalente a:

function miAlert(){
	...
};

miAlert(); */		

/*
funcion autoinvocada
(function miAlert(){
	....
})()
Es equivalente a:
function miAlert(){
	...
};
miAlert(); 

		innerHTML = "";
			, close, img;
					
			modal.classList.remove("hide");
			
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
				
	});*/