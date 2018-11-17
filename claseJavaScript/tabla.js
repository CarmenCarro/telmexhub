
console.log("ok");
var este = document.getElementById("js");

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
var th = document.createElement("th")
var text = document.createTextNode("Google Data Studio Makes Data Reporting Easy (0:44)");

table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th);
table.appendChild(tbody);
tbody.appendChild(tr);
tr.appendChild(td);
td.appendChild(text);
este.appendChild(table);