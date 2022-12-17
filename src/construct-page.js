const debug = false; 

const origin = 'https://api.arekouzounian.com/';

async function constructPage(endpoint, port, id)
{
	let url = origin + ':' + port + endpoint; 
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
		});
}

// constructPage("/api/v1/about", 5000, 'test-fill');  

