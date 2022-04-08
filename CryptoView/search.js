function convertToJson(response) {
  return response.json();
}

function showResult(data) {
  // console.log(data.coins);

  const tbody_elem = document.getElementById("search_result");

  for(let i = 0; i < data.coins.length; i += 1) {
    const single_data = data.coins[i];


    const new_row = document.createElement('tr');

    const new_s_no = document.createElement('td');
    const new_logo = document.createElement('td');
    const new_name = document.createElement('td');
    const new_link = document.createElement('td');

    const new_img  = document.createElement('img');

    new_s_no.innerText = i + 1;
    new_img.src = single_data.thumb;
    new_logo.appendChild(new_img);
    new_name.innerText = single_data.name + " (" + single_data.symbol + ")";
    new_link.innerText = "TODO";

    new_row.appendChild(new_s_no);
    new_row.appendChild(new_logo);
    new_row.appendChild(new_name);
    new_row.appendChild(new_link);

    tbody_elem.appendChild(new_row);

    console.log(single_data);
  }
}

fetch('https://api.coingecko.com/api/v3/search?query=bit').then(convertToJson).then(showResult);