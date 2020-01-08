window.onload = function() {
  let header = document.createElement("h1");
  header.innerText = "Javascript jest super!!!";
  document.body.appendChild(header);

  //   let list = document.createElement("ul");

  //   let myList1 = document.createElement("li");
  //   myList1.innerText = "pomidor";
  //   list.appendChild(myList1);

  //   let myList2 = document.createElement("li");
  //   myList2.innerText = "ogorek";
  //   list.appendChild(myList2);

  //   let myList3 = document.createElement("li");
  //   myList3.innerText = "baklazan";
  //   list.appendChild(myList3);

  //   let myList4 = document.createElement("li");
  //   myList4.innerText = "cukinia";
  //   list.appendChild(myList4);

  //   let myList5 = document.createElement("li");
  //   myList5.innerText = "ziemniak";
  //   list.appendChild(myList5);

  //   document.body.appendChild(list);
  let list = createList();
  // let liItems = ['pom','ogo','baklazan'];
  //let liItems = this.localStorage.getItem('listawarzyw');

  //liItems.forEach((element) => addNewLi(element,list));
  addNewLi("pomidor", list);
  addNewLi("ogorek", list);
  addNewLi("baklazan", list);
  addNewLi("cukinia", list);
  addNewLi("ziemniak", list);

  //tworzenie tabeli
  var table = document.createElement("table");
  document.body.appendChild(table);
  //thead
  var thead = document.createElement("thead");
  table.appendChild(thead);

  var tableRow = document.createElement("tr");
  thead.appendChild(tableRow);

  var th1 = document.createElement("th");
  th1.innerHTML = "Title";
  tableRow.appendChild(th1);

  var th2 = document.createElement("th");
  th2.innerHTML = "Author";
  tableRow.appendChild(th2);

  var th3 = document.createElement("th");
  th3.innerHTML = "Year of production";
  tableRow.appendChild(th3);
  //tbody
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);

  movies.forEach(element => {
    let movieTr = document.createElement("tr");

    for (let key in element) {
      this.addTd(element[key], movieTr);
    }
    tbody.appendChild(movieTr);
  });
};
//tworzenie listy
function createList() {
  var list1 = document.createElement("ul");
  document.body.appendChild(list1);
  return list1;
}

function addNewLi(text, list) {
  var newItem = document.createElement("li");
  newItem.innerText = text;
  // newItem.addEventListener("click", () => {
  //   newItem.style = "background:red";
  // });
  var liRemoveButton = document.createElement("button");
  liRemoveButton.addEventListener("click", () => {
    liItems.splice();
  });
  var liRemoveButtonIcon = document.createElement("img");
  liRemoveButtonIcon.src = "jakisobrazek.jpg";

  liRemoveButton.appendChild(liRemoveButtonIcon);
  newItem.appendChild(liRemoveButton);
  list.appendChild(newItem);
}

function addTd(text, trToAppend) {
  var cell = document.createElement("td");
  cell.innerText = text;
  trToAppend.appendChild(cell);
}

let movies = [
  { title: "aaa", director: "bbb", year: 2000 },
  { title: "ccc", director: "ddd", year: 2001 },
  { title: "eee", director: "fff", year: 2002 },
  { title: "ggg", director: "hhh", year: 2003 },
  { title: "iii", director: "jjj", year: 2004 }
];

// ####
// window.onload = function() {
//   let header = document.createElement("h1");
//   header.innerText = "Javascript jest super!!!";
//   document.body.appendChild(header);

//   //   let list = document.createElement("ul");

//   //   let myList1 = document.createElement("li");
//   //   myList1.innerText = "pomidor";
//   //   list.appendChild(myList1);

//   //   let myList2 = document.createElement("li");
//   //   myList2.innerText = "ogorek";
//   //   list.appendChild(myList2);

//   //   let myList3 = document.createElement("li");
//   //   myList3.innerText = "baklazan";
//   //   list.appendChild(myList3);

//   //   let myList4 = document.createElement("li");
//   //   myList4.innerText = "cukinia";
//   //   list.appendChild(myList4);

//   //   let myList5 = document.createElement("li");
//   //   myList5.innerText = "ziemniak";
//   //   list.appendChild(myList5);

//   //   document.body.appendChild(list);
//   createList();
//   addNewLi("pomidor");
//   addNewLi("ogorek");
//   addNewLi("baklazan");
//   addNewLi("cukinia");
//   addNewLi("ziemniak");

//   //tworzenie tabeli
//   var table = document.createElement("table");
//   document.body.appendChild(table);
//   //thead
//   var thead = document.createElement("thead");
//   table.appendChild(thead);

//   var tableRow = document.createElement("tr");
//   thead.appendChild(tableRow);

//   var th1 = document.createElement("th");
//   th1.innerHTML = "Title";
//   tableRow.appendChild(th1);

//   var th2 = document.createElement("th");
//   th2.innerHTML = "Author";
//   tableRow.appendChild(th2);

//   var th3 = document.createElement("th");
//   th3.innerHTML = "Year of production";
//   tableRow.appendChild(th3);
//   //tbody
//   var tbody = document.createElement("tbody");
//   table.appendChild(tbody);

//   var trBody1 = document.createElement("tr");
//   tbody.appendChild(trBody1);

//   // var td1 = document.createElement("td");
//   // td1.innerText = "Interstellar";
//   // trBody1.appendChild(td1);
//   this.addTd("Interstellar",trBody1);

//   var td2 = document.createElement("td");
//   td2.innerText = "Hans Zimmer";
//   trBody1.appendChild(td2);

//   var td3 = document.createElement("td");
//   td3.innerText = "2011";
//   trBody1.appendChild(td3);

//   var trBody2 = document.createElement("tr");
//   tbody.appendChild(trBody2);

//   var td4 = document.createElement("td");
//   td4.innerText = "Pulp Fiction";
//   trBody2.appendChild(td4);

//   var td5 = document.createElement("td");
//   td5.innerText = "Quentin Tarantino";
//   trBody2.appendChild(td5);

//   var td6 = document.createElement("td");
//   td6.innerText = "1995";
//   trBody2.appendChild(td6);

//   var trBody3 = document.createElement("tr");
//   tbody.appendChild(trBody3);

//   var td7 = document.createElement("td");
//   td7.innerText = "Parker";
//   trBody3.appendChild(td7);

//   var td8 = document.createElement("td");
//   td8.innerText = "Jason Statham";
//   trBody3.appendChild(td8);

//   var td9 = document.createElement("td");
//   td9.innerText = "2015";
//   trBody3.appendChild(td9);
// };
// //tworzenie listy
// function createList() {
//   var list = document.createElement("ul");
//   document.body.appendChild(list);
// }

// function addNewLi(text) {
//   var newItem = document.createElement("li");
//   newItem.innerText = text;
//   var list = document.getElementsByTagName("ul")[0];
//   list.appendChild(newItem);
// }

// function addTd(text,trToAppend){
//   var cell = document.createElement("td");
//   cell.innerText = text;
//   trToAppend.appendChild(cell);
// }

// // let movies = [
// //   { title: "aaa", director: "bbb", year: 2000 },
// //   { title: "ccc", director: "ddd", year: 2001 },
// //   { title: "eee", director: "fff", year: 2002 },
// //   { title: "ggg", director: "hhh", year: 2003 },
// //   { title: "iii", director: "jjj", year: 2004 }
// // ];
