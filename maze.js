window.onload = function (){
	//execrise1
	let boundary1 = document.getElementById('boundary1');

	boundary1.addEventListener('mouseover',() => {
		boundary1.setAttribute('class', 'boundary youlose');
	});

	//execrise2
	let boundary = document.querySelectorAll('.boundary');
	let count = 0;

	for (let x = 0; x < boundary.length; x++){
		boundary[x].addEventListener('mouseover' ,() =>{
			
			for(let y = 0; y < boundary.length-1; y++){
				boundary[y].setAttribute('class', 'boundary youlose');

			}
			count++;
			//prompts the user that they lost(exerxise 5)
			document.getElementById('status').textContent = "You Lose";
		});
	}

	//execrise3
	let end = document.querySelector('#end');

	end.addEventListener('mouseover' ,() =>{
		if (count == 0){
			document.querySelector('#status').textContent = "You Win";
		}
	});
	
	//execrise4
	let start = document.querySelector("#start");

	start.addEventListener('click' ,() =>{
		document.querySelector('#status').textContent = "Press S to begin!!";
		for(let s=0; s < boundary.length-1; s++){
			boundary[s].setAttribute('class', 'boundary boundary');

		}
	});





}

