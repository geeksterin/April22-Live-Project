function convertToJson(response) {
  return response.json();
}

function showInfo(data) {
  const coin_img = document.getElementById('coin_img');
  const coin_name = document.getElementById('coin_name');
  const coin_description = document.getElementById('coin_description');

  coin_description.innerHTML = data.description.en;
  coin_name.innerText = data.name;
  coin_img.src = data.image.large;
  // console.log(data);
}

function showPrice(data) {
  const inr_price = document.getElementById('inr_price');
  const usd_price = document.getElementById('usd_price');
  const eur_price = document.getElementById('eur_price');

  // console.log(data);
  inr_price.innerText = data[coin_id].inr;
  usd_price.innerText = data[coin_id].usd;
  eur_price.innerText = data[coin_id].eur;
}

function showHistory(data) {
  // console.log(data);
  showGraph(data);
}

var url     = new URL(window.location.href);
var params  = new URLSearchParams(url.search);
let coin_id = params.get("coin");

fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`).then(convertToJson).then(showInfo);
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=inr%2Cusd%2Ceur`).then(convertToJson).then(showPrice);
fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=inr&days=14&interval=daily`).then(convertToJson).then(showHistory);

function convertUnixToReadable(timestamp) {
  const date = new Date(timestamp);
  const date_string = date.getDate();
  const month_string = date.getMonth() + 1;

  const readable = date_string + ' - ' + month_string;
  return readable;
}

function showGraph(history_data) {
  // console.log(history_data.prices);

  let labels = [];
  let prices = [];

  for(let i = 0; i < history_data.prices.length; i += 1) {
    const single_price = history_data.prices[i];

    const readable_label = convertUnixToReadable(single_price[0]);
    labels.push(readable_label);
    prices.push(single_price[1]);
  }
  console.log(history_data.prices);
  // console.log(prices);
  
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Price (in INR)',
            data: prices,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        }
    }
  });
}
