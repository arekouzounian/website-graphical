const origin = 'https://api.arekouzounian.com';

async function constructAbout(endpoint, id)
{
	let url = origin + endpoint; 
	let field = document.getElementById(id); 

	await fetch(url)
		.then(response => response.json())
		.then(data => { 
			field.innerHTML = "";   
			for (let p in data) {
				const node = document.createElement("p"); 
				node.innerText += data[p]; 
				field.appendChild(node); 
			}

			fadeIn(field); 
		});
}


