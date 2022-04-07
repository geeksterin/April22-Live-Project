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
  inr_price.innerText = data.bitcoin.inr;
  usd_price.innerText = data.bitcoin.usd;
  eur_price.innerText = data.bitcoin.eur;
}

function showHistory(data) {
  console.log(data);
}

fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false').then(convertToJson).then(showInfo);
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur').then(convertToJson).then(showPrice);
fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=7').then(convertToJson).then(showHistory);




const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
