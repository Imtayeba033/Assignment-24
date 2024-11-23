// className
// idName
// tag
// queryselectorall
// queryselector

// const title = document.getElementsByTagName("h1")
// console.log(title[1].innerText);

// const title =document.getElementsByClassName("friend")
// // console.log(title[1].innerText);
// for(const ti of title){
//     console.log(ti);
// }

// const title =document.getElementById("lorem")
// console.log(title);

// const title =document.querySelectorAll(".friend")

// const first =document.getElementById("first")
// first.innerText="tui change ei next"
// first.style.color="red"
// first.style.backgroundColor="pink"
// first.style.borderRadius="20px"
// first.style.padding="20px"
// first.style.width="50%"
// first.style.textAlign="center"


// const container = document.getElementById("container")
// container.classList.add("class","tabu","desh")
// container.classList.add("class","mimu")
// container.classList.remove("desh")
// console.log(container.childNodes[0].nextSibling.innerText);

// // const title =document.getElementById("lorem")
// // title.setAttribute("class","mim")
// // const getkrbo=document.getElementsByClassName("mim")
// // title.removeAttribute=("id")
// // console.log(getkrbo[0]);
const select = document.getElementById("select")
const h2=document.createElement("h2")
h2.innerText = "amar shonar bangla"
select.appendChild(h2)
// console.log(h2);
const ul=document.createElement("ul")
const li=document.createElement("li")
li.innerText="chirodin tmr akash"
console.log(li);
ul.appendChild(li);
select.appendChild(ul);





