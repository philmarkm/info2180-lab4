var searchBtn = document.getElementById('searchBtn');
var result = document.getElementById('result');
var value = document.getElementById('searchBox');

searchBtn.onclick = ev => {
    fetch(`superheroes.php?query=${value.value}`, { method: 'get' })
    .then((response)=>{
        return response.text();
    })
    .then((data)=>{
        result.innerHTML = data;
    });
}

