const LOCAL_STORAGE_KEY = "shoppingList";
window.onload = function() {
  let myProductsTable = [];
  const tbody = document.getElementsByTagName("tbody")[0];
  let myBtn = document.getElementById("myButton");
  var productName = document.getElementById("nameProduct");
  var countValue = document.getElementById("count");
  //zmienna do edycji elementu
  let myEditProduct = null;
  //dla testu
  console.log("myProductsTable: ", myProductsTable);
  showDataFromLocalStorage();

  function showDataFromLocalStorage() {
    clearTBody();
    const myItems = getElementsFromLocalStorage();
    myProductsTable = [];
    myItems.forEach((element, index) => {
      myProductsTable.push(element);
      addElementToTbody(element.prodName, element.countProd, index + 1);
    });
  }

  myBtn.addEventListener("click", event => {
    event.preventDefault();
    var prodName = productName.value;
    var countProd = countValue.value;

    if (prodName == "" || countProd == "") {
      isEmptyInput(prodName, countProd);
      return;
    }
    if (!myEditProduct) {
      myProductsTable.push({ prodName, countProd });
    } else {
      var i = myEditProduct;
      myProductsTable[i].prodName = productName.value;
      myProductsTable[i].countProd = countValue.value;
      myEditProduct = null;
    }

    saveToLocalStorage(myProductsTable);
    showDataFromLocalStorage();

    function clearInput() {
      productName.value = "";
      countValue.value = "";
    }
    clearInput();
  });

  function addElementToTbody(name, count, id) {
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
    btnEdit.setAttribute("id", id - 1);
    btnEdit.innerText = "edytuj";
    btnEdit.addEventListener("click", editItem);
    tdata3.appendChild(btnDelete);
    tdata3.appendChild(btnEdit);
    trow.appendChild(tdata3);

    //edytowanie
    function editItem(event) {
      let idToEdit = parseInt(event.target.getAttribute("id"));
      myEditProduct = idToEdit;
      console.log("Edytuję element o indexie: ", myEditProduct);
      let editItem = myProductsTable[myEditProduct];
      productName.value = editItem.prodName;
      countValue.value = editItem.countProd;
    }
  }

  function saveToLocalStorage(items) {
    let products = JSON.stringify(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, products);
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
    let idToRemove = parseInt(event.target.getAttribute("id"));
    removeFromArray(myProductsTable, idToRemove);
    console.log("zaczynam usuwanie elementu o id: ", idToRemove);
    //usuwanie z localStorage
    let idToRemoveFromLocal = idToRemove;
    console.log("usuwam pozycje z localstorage: ", idToRemoveFromLocal);
    saveToLocalStorage(myProductsTable);
    showDataFromLocalStorage();
  }

  function clearTBody() {
    tbody.innerHTML = "";
  }

  function removeFromArray(arr, el) {
    arr.splice(el, 1);
  }

  function isEmptyInput(prodValue, countValue) {
    alert("Uzupełnij puste pola, aby dodać produkt");
    return prodValue == "" || countValue == "";
  }
};
