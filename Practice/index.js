function changeText() {
  const para_elem = document.getElementById("some_text");
  para_elem.innerText = "New Value";
  // console.log(para_elem);
}

function addNewItem() {
  const ul_elem = document.getElementsByTagName("ul")[0];
  const new_li  = document.createElement("li");
  new_li.innerText = "Item";
  ul_elem.appendChild(new_li);
}

function convertToJson(response) {
  return response.json();
}

function showData(data) {
  const para_elem = document.getElementById("some_text");
  para_elem.innerText = data.bitcoin.inr;
  console.log(data);
}

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr").then(convertToJson).then(showData);