const LOCAL_STORAGE_KEY = "shoppingList";
window.onload = function() {
  const myItems = getElementsFromLocalStorage();
  const myProductsTable = [];

  myItems.forEach((element, index) => {
    myProductsTable.push(element);
    addElementToTbody(element.prodName, element.countProd, index + 1);
  });
  // for (let i = 0; i < myItems.length; i++) {
  //   let element = myItems[i];

  //   addElementToTbody(element.prodName, element.countProd, i + 1);
  // }
  let myBtn = document.getElementById("myButton");

  myBtn.addEventListener("click", event => {
    event.preventDefault();
    //pobieram wartosci z inputów
    let productName = document.getElementById("nameProduct");
    let countValue = document.getElementById("count");
    //console.log(productName.value, countValue.value);
    let prodName = productName.value;
    let countProd = countValue.value;
    // tutaj trzeba wrzucic if()!!!!

    let getItems = getElementsFromLocalStorage();
    console.log("Elementy z localStorage: ", getItems);

    //dodanie tr do tbody
    addElementToTbody(prodName, countProd, getItems.length + 1);

    //###
    function addToTable(arr) {
      arr.push({ prodName, countProd });
      console.log(myProductsTable);
    }
    addToTable(myProductsTable);
    saveToLocalStorage(myProductsTable);
    //czyszczenie pola
    function clearInput() {
      productName.value = "";
      countValue.value = "";
    }
    clearInput();
  });

  function addElementToTbody(name, count, id) {
    let tbody = document.getElementsByTagName("tbody")[0];
    let trow = document.createElement("tr");
    tbody.appendChild(trow);
    //pierwsza komorka
    let tdata = document.createElement("td");
    tdata.innerText = id;
    trow.appendChild(tdata);
    //druga komorka
    let tdata1 = document.createElement("td");
    tdata1.innerText = name;
    trow.appendChild(tdata1);
    //trzecia komorka
    let tdata2 = document.createElement("td");
    tdata2.innerText = count;
    trow.appendChild(tdata2);
    //czwarta komorka
    let tdata3 = document.createElement("td");
    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("id", id - 1);
    btnDelete.innerText = "usuń";
    btnDelete.addEventListener("click", removeItem);
    let btnEdit = document.createElement("button");
    btnEdit.innerText = "edytuj";
    tdata3.appendChild(btnDelete);
    tdata3.appendChild(btnEdit);
    trow.appendChild(tdata3);
  }

  function saveToLocalStorage(items) {
    let products = JSON.stringify(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, products);
  }
  function getId(arr) {
    let number = arr.length + 1;
    return number;
  }

  function getElementsFromLocalStorage() {
    let existing = localStorage.getItem(LOCAL_STORAGE_KEY);
    let myItemArray = JSON.parse(existing);
    if (myItemArray == null) {
      myItemArray = [];
    }
    return myItemArray;
  }
  function removeItem(event) {
    let idToRemove = event.target.getAttribute("id");
    myProductsTable.splice(idToRemove, 1);
    console.log("zaczynam usuwanie elementu o id: ");
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    myProductsTable.forEach((element, index) => {
      addElementToTbody(element.prodName, element.countProd, index + 1);
    });
  }
};
//funkcja edytowania pozycji napisac!!!

//losowy numer ID
//   function generId() {
//     let count = Math.floor(Math.random() * 100);
//     return count;

// }
