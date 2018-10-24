window.onload = function (){

	let boundary1 = document.getElementById('boundary1');

	boundary1.addEventListener('mouseover',() => {
		boundary1.setAttribute('class', 'boundary youlose');
	});

	let boundary = document.querySelectorAll('.boundary');
	let count = 0;

	for (let x = 0; x < boundary.length; x++){
		boundary[x].addEventListener('mouseover' ,() =>{
			
			for(let y = 0; y < boundary.length-1; y++){
				boundary[y].setAttribute('class', 'boundary youlose');

			}
			count++;
			document.getElementById('status').innerHTML = "You Lose";
		});
	}

	let end = document.querySelector('#end');

	end.addEventListener('mouseover' ,() =>{
		if (count == 0){
			document.querySelector('#status').innerHTML = "You Win";
		}
	});





}

