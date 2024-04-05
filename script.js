async function getListCurrencies(url) {
    let response = await fetch(url);

    if (response.ok) {
        let result = await response.json();
        console.log(result);

        const table = document.getElementById("tbody");

        for (let i = 0; i < result.length; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${result[i].id}</td><td>${result[i].symbol}</td><td>${result[i].name}</td>`;
            table.appendChild(row);
            if (result[i].symbol === "usdt") {
                row.style.backgroundColor = "green";
            }
        }
    } else {
        console.log("Error: " + response.status);
    }
}

getListCurrencies("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1");

function renderCard() {
    const gridCards = document.getElementById("gridCards");
    try {
        for (let i = 0; i <= 6; i++) {
            let div = document.createElement("div");
            div.className = "row justify-content-around gridDiv";
            div.innerHTML = `<div class="col">
      <div class="card rounded-0 gap-2" style="width: 18rem">
          <img src="./img/фотка.png" class="card-img-top" alt="..." />
          <div class="card-body p-0 d-grid gap-2">
              <b class="row m-0 p-0 h5">Без слов</b>
              <div class="card border-0">
                  <div class="row g-0">
                      <div class="col-4">
                          <img src="./img/маленькая фотка звезды.png" class="img-fluid" id="small_img" alt="..." />
                      </div>
                      <div class="col">
                          <div class="card-body p-0 m-0">
                              <h6 class="card-title">Настя Ивлеева Вячеславовна</h6>
                              <h6 class="card-text text-warning">
                                  <small>проверено <i class="bi bi-patch-check-fill"></i></small>
                              </h6>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row gap-5 justify-content-between">
                  <div class="col-auto">Редкость:</div>
                  <div class="col-auto border border-warning border-2 rounded-3">уникальная</div>
              </div>
              <div class="row gap-5 justify-content-between">
                  <div class="col-auto">Цена:</div>
                  <div class="col-auto rounded-3 align-self-end" id="price">от 500 руб.</div>
              </div>
              <div class="row justify-content-center">
                  <button class="col-10 border-0 rounded-5" id="buyBtn">Купить</button>
              </div>
          </div>
      </div>
  </div>
  <div class="col">
      <div class="card rounded-0 gap-2" style="width: 18rem">
          <img src="./img/фотка.png" class="card-img-top" alt="..." />
          <div class="card-body p-0 d-grid gap-2">
              <b class="row m-0 p-0 h5">Без слов</b>
              <div class="card border-0">
                  <div class="row g-0">
                      <div class="col-4">
                          <img src="./img/маленькая фотка звезды.png" class="img-fluid" id="small_img" alt="..." />
                      </div>
                      <div class="col">
                          <div class="card-body p-0 m-0">
                              <h6 class="card-title">Настя Ивлеева Вячеславовна</h6>
                              <h6 class="card-text text-warning">
                                  <small>проверено <i class="bi bi-patch-check-fill"></i></small>
                              </h6>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row gap-5 justify-content-between">
                  <div class="col-auto">Редкость:</div>
                  <div class="col-auto border border-warning border-2 rounded-3">уникальная</div>
              </div>
              <div class="row gap-5 justify-content-between">
                  <div class="col-auto">Цена:</div>
                  <div class="col-auto rounded-3 align-self-end" id="price">от 500 руб.</div>
              </div>
              <div class="row justify-content-center">
                  <button class="col-10 border-0 rounded-5" id="buyBtn">Купить</button>
              </div>
          </div>
      </div>
  </div>
  <div class="col">
      <div class="card rounded-0 gap-2" style="width: 18rem">
          <img src="./img/фотка.png" class="card-img-top" alt="..." />
          <div class="card-body p-0 d-grid gap-2">
              <b class="row m-0 p-0 h5">Без слов</b>
              <div class="card border-0">
                  <div class="row g-0">
                      <div class="col-4">
                          <img src="./img/маленькая фотка звезды.png" class="img-fluid" id="small_img" alt="..." />
                      </div>
                      <div class="col">
                          <div class="card-body p-0 m-0">
                              <h6 class="card-title">Настя Ивлеева Вячеславовна</h6>
                              <h6 class="card-text text-warning">
                                  <small>проверено <i class="bi bi-patch-check-fill"></i></small>
                              </h6>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row gap-5 justify-content-between">
                  <div class="col-auto">Редкость:</div>
                  <div class="col-auto border border-warning border-2 rounded-3">уникальная</div>
              </div>
              <div class="row gap-5 justify-content-between">
                  <div class="col-auto">Цена:</div>
                  <div class="col-auto rounded-3 align-self-end" id="price">от 500 руб.</div>
              </div>
              <div class="row justify-content-center">
                  <button class="col-10 border-0 rounded-5" id="buyBtn">Купить</button>
              </div>
          </div>
      </div>
  </div>`;
            gridCards.appendChild(div);
        }
    } catch (e) {
        console.log(e);
    }
}
renderCard();
