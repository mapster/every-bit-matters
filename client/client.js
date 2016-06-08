var socket = io();

socket.on('connect', function (data) {
    console.log("I am connected");
});

socket.on('client:display', function (results) {
  var tbody = document.getElementsByTagName('tbody')[0];

  results.forEach(function(result) {
    // add table row
    var tr = document.createElement('tr');
    // add columns
    var object = document.createElement('td');
    var ambient = document.createElement('td');
    // add content to columns
    object.textContent = result.objectTemp;
    ambient.textContent = result.ambientTemp;
    // append columns to row
    tr.appendChild(object);
    tr.appendChild(ambient);
    // append row to tbody
    tbody.appendChild(tr);
  });
});
