
//close button
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// checked
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create list item / ADD
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let txtItem = document.createElement("SPAN");
  txtItem.textContent=inputValue;
  li.appendChild(txtItem);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let spanClose = document.createElement("SPAN");
  let spanEdit = document.createElement("SPAN");
  let txtClose = document.createTextNode("\u00D7");
  let txtEdit = document.createTextNode("Edit");
  spanClose.className = "close";
  spanEdit.className = "edit";
  spanClose.appendChild(txtClose);
  spanEdit.appendChild(txtEdit);
  
  let btnDiv = document.createElement("div");
  btnDiv.className = "btnDiv";
  
  btnDiv.appendChild(spanEdit);
  btnDiv.appendChild(spanClose);
  li.appendChild(btnDiv);

 for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement.parentElement;
    div.style.display = "none";
  };
}

// Edit
function editElementInput() {

  let editButton = event.target;
  let li_Lkbira = editButton.parentElement.parentElement; 
  let listItem = li_Lkbira.querySelector("span:first-child");
  let currentText = listItem.textContent;
  let inputField = document.createElement("input");
  inputField.value = currentText;

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.onclick = function() {
    listItem.textContent = inputField.value;
  };

  listItem.innerHTML = "";
  listItem.appendChild(inputField);
  listItem.appendChild(saveButton);

  inputField.focus(); 
}

let edit = document.getElementsByClassName("edit");
for (i = 0; i < edit.length; i++) {
  edit[i].onclick = editElementInput;
}

}

