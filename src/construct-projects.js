const origin = "https://api.arekouzounian.com";
const endpoint = "/api/v1/projects";

async function constructProjects(id)
{
    let url = origin + endpoint; 
    let field = document.getElementById(id);
    if (field == null) { console.log('Element ID not found: ' + id); return; } 

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            field.innerHTML = "";

            lst = data['projects']; 
            for (let i in lst)
            {
                let o = lst[i];
                const node = document.createElement('p');
                const lnk = document.createElement('a');
                lnk.href = o['link'];
                lnk.innerText = o['title'];
                lnk.setAttribute("class", "highlight");
                node.appendChild(lnk);
                
                const txt = document.createElement("text");
                txt.innerHTML = "<br>" + o['description'];
                node.appendChild(txt);

                field.appendChild(node);
            }

            fadeIn(field); 
        });
}