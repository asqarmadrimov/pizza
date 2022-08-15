let elFormSelect = document.querySelector(".form-select");
let elFormMeasure = document.querySelector(".form__measure");
let elFormComposition = document.querySelector(".form__composition");
let elFormAddition = document.querySelector(".form__addition");

let elOrderBread = document.querySelector(".order__bread");
let elOrderMeasure = document.querySelector(".order__measure");
let elOrderCompositionList = document.querySelector(".order__list");
let elOrderAdditionList = document.querySelector(".order__list-addition");

let selectOptionArr = ["Yupqa", "O`rtacha", "Qalin"];

for (let i = 0; i < selectOptionArr.length; i++){
  let selectOption = document.createElement("option");
  selectOption.textContent = selectOptionArr[i];
  elFormSelect.appendChild(selectOption);

  elFormSelect.addEventListener(`change`, function(a){
    elOrderBread.textContent = elFormSelect.value;
  })
}

let measureInputArr = ["25sm", "30sm", "50sm"];

for (let sm = 0; sm < measureInputArr.length; sm++){
  let measureInput = document.createElement("input");
  measureInput.setAttribute("type", "radio");
  measureInput.setAttribute("name", "pizza sm");
  measureInput.setAttribute("class", "me-2")
  let measureLabel = document.createElement("label");
  measureLabel.setAttribute("class", "me-5");

  measureInput.value = measureInputArr[sm];
  measureLabel.textContent = measureInputArr[sm];
  measureLabel.prepend(measureInput);
  elFormMeasure.appendChild(measureLabel);

  elFormMeasure.addEventListener("change", function(b) {
    elOrderMeasure.textContent =  b.target.value;
  })
}

let compositionArr = ["Pomido", "Qazili", "Pishloqli", "Qo`ziqorinli", "Qalbasali", "Kurka go'shti",];
let pusharr = [];

for (let sm = 0; sm < compositionArr.length; sm++){
  let compositionInput = document.createElement("input");
  compositionInput.setAttribute("type", "checkbox");
  compositionInput.setAttribute("name", "Tarkibi");
  compositionInput.setAttribute("class", "me-3");
  let compositionLabel = document.createElement("label");
  compositionLabel.setAttribute("class", "me-5");

  compositionInput.value = compositionArr;
  compositionLabel.textContent = compositionArr[sm];
  compositionLabel.prepend(compositionInput);
  elFormComposition.appendChild(compositionLabel);
  
  let OrderCompositionListItem = document.createElement("li");
  elFormComposition.addEventListener("click",function() {
    if(compositionInput.checked) {
      pusharr.push(compositionArr[sm]);
      elOrderCompositionList.appendChild(OrderCompositionListItem);
      OrderCompositionListItem.textContent = compositionArr[sm];
    } else{ 
       elOrderCompositionList.removeChild(OrderCompositionListItem);
    }
  })
}

let additionInputArr = ["Achchiq", "Sarimsoq"];
let pusharr2 = []

for (let sm = 0; sm < additionInputArr.length; sm++){
  let additionInput = document.createElement("input");
  additionInput.setAttribute("type", "checkbox");
  additionInput.setAttribute("name", "Qoshimcha");
  additionInput.setAttribute("class", "me-2")
  let additionLabel = document.createElement("label");
  additionLabel.setAttribute("class", "me-5");

  additionInput.value = additionInputArr[sm];
  additionLabel.textContent = additionInputArr[sm];
  additionLabel.prepend(additionInput);
  elFormAddition.appendChild(additionLabel);

  let OrderAdditionListItem = document.createElement("li");
  elFormAddition.addEventListener("click",function() {
    if(additionInput.checked) {
      pusharr2.push(additionInputArr[sm]);
      elOrderAdditionList.appendChild(OrderAdditionListItem);
      OrderAdditionListItem.textContent = compositionArr[sm];
    } else{ 
      elOrderAdditionList.removeChild(OrderAdditionListItem);
    }
  })
}






