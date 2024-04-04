async function getListCurrencies(url){
    let response = await fetch(url);

    if (response.ok) { 
      let result = await response.json();
      console.log(result);
      
    const table = document.getElementById('tbody');

    for (let i = 0; i < result.length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${result[i].id}</td><td>${result[i].symbol}</td><td>${result[i].name}</td>`;
    table.appendChild(row);
    if(result[i].symbol === 'usdt') {
        row.style.backgroundColor = 'green';
    }
}
    } else {
      console.log("Error: " + response.status);
    }};

getListCurrencies('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1');