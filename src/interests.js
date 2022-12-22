var debug = true; 
var cycle = 0;
const port = 5000; 
const endpoint = '/api/v1/interests';
const host = 'http://api.arekouzounian.com';

async function getInterests()
{
    let url = host + endpoint; 
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            for (var i in data) {

                interests.push(data[i]);
            }
        });
}

function printList(rand = true)
{
    var ul = document.getElementById("interests");
    if(ul.innerHTML != "")
    {
        clear();
        if (rand)
        {
            randomize(interests);
        }
    }
        
    for( var i = 0; i < interests.length; i++ ) {
        var li = document.createElement('li');
        li.classList.add('fade-in');
        li.textContent = interests[i];
        ul.appendChild(li);
    }
}

function randomize(lst)
{
    for(var i = 0; i < lst.length; i++)
    {
        var ind = Math.floor(Math.random() * lst.length);
        var tmp = lst[i];
        lst[i] = lst[ind];
        lst[ind] = tmp;
    }
}


function clear()
{
    document.getElementById("interests").innerHTML = "";
}

function sort()
{
    switch(cycle)
    {
        case 0:
            interests.sort(function(a, b) { return a.length > b.length; });
            break;
        case 1:
            interests.sort(function(a, b) { return a.length < b.length; });           
            break;
        case 2:
            interests.sort(function(a, b) { return a.toLowerCase() > b.toLowerCase(); });
            break;
        case 3:
            interests.sort(function(a, b) { return a.toLowerCase() < b.toLowerCase(); });

    }
    printList(false);
    cycle++;

    if(cycle > 3)
    {
        cycle = 0; 
    }
}

async function init() {
    interests = ['Vim (not Emacs)', 'CTFs', 'Rust/Go', 'Command-Line Tools', 'Linux', 'Containerization', 'Open-Source Software'];
    if (debug)
    {
        interests = [];
        await getInterests(); 
    }
    printList(); 
}

init(); 
