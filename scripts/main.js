let button = document.getElementById("button")
button.onclick = function() {
  submitButtonTapHandler()
}

function submitButtonTapHandler() {
  let table = document.getElementById('Table')
  let count = table.rows.length;
  row = table.insertRow(count);
  row.insertCell(0).innerHTML = count
  row.insertCell(1).innerHTML = "Pratiksha Mahajan"
  row.insertCell(2).innerHTML = 23
}
