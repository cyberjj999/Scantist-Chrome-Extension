chrome.runtime.sendMessage({todo: "showPageAction"});

var table = document.getElementById("toc");
table.classList.add("tooltip");

table.style.backgroundColor = "yellow";
alert(table);
alert(table.classList);

var newSpan = document.createElement('span');
newSpan.setAttribute('class', 'tooltiptext');
newSpan.innerHTML = "Hello";
table.appendChild(newSpan);