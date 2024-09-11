let hello = document.getElementsByClassName("hello")[0]
hello.style.color = "hotpink"
hello.style.backgroundColor = "pink"
//
let p1 = document.getElementById("p1")
p1.style.fontWeight = "bold"
//
p1.classList.add("p")
//
let img = document.getElementsByTagName("img")[0]
img.src = "https://hammondscandies.com/cdn/shop/files/Lollipops_-_Collection_Thumbnail.png?v=1697571945&width=600"

//
let ul = document.querySelector("ul")
ul.style.display = "flex"
ul.style.listStyleType = "none"

let li1 = document.createElement("li")
li1.textContent = "li 1"
li1.style.border = "1px solid hotpink"
ul.appendChild(li1)

let li2 = document.createElement("li")
li2.textContent = "li 2"
li2.style.border = "1px solid hotpink"
ul.appendChild(li2)

let li3 = document.createElement("li")
li3.textContent = "li 3"
li3.style.border = "1px solid hotpink"
ul.appendChild(li3)

//
let table = document.getElementById("table")

let row1 = document.createElement("tr")

let row1td1 = document.createElement("td")
row1td1.textContent = "td1"
row1.appendChild(row1td1)

let row1td2 = document.createElement("td")
row1td2.textContent = "td2"
row1.appendChild(row1td2)

let row1td3 = document.createElement("td")
row1td3.textContent = "td3"
row1.appendChild(row1td3)

table.appendChild(row1)

let row2 = document.createElement("tr")

let row2td1 = document.createElement("td")
row2td1.textContent = "td1"
row2.appendChild(row2td1)

let row2td2 = document.createElement("td")
row2td2.textContent = "td2"
row2.appendChild(row2td2)

let row2td3 = document.createElement("td")
row2td3.textContent = "td3"
row2.appendChild(row2td3)

table.appendChild(row2)


