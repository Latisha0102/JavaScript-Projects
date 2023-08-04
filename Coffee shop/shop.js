var EMilk = 60;
var ECream = 75;
var ELatte = 100;
var CMilk = 80;
var CCream = 90;
var CLatte=125;
var LMilk= 100;
var LCream= 125;
var LLatte= 150;
var total = 0;
var check = 1;
var gw;
var sCoffee;
var perCoffee;
var adder = document.querySelector("#getme");
adder.addEventListener("click", getMe);
var by = document.querySelector("#out");
by.addEventListener("click", checkOut);
var cme = document.querySelector("#clr");
cme.addEventListener("click", clearMe);

function getMe() {
  sCoffee = document.querySelector("#sf").value;
  perCoffee = parseFloat(document.querySelector("#entrybox").value);
  gw = document.querySelector("#writeme");
  if (Number.isNaN(perCoffee) === true) {
    alert("Only Numbers !!! Or The Field is Empty");
    check = 0;
  }
  else if (perCoffee<0) {
    alert("Negative value!! @stupid");
    check = 0;
  }
  else{
    check = 1;
  }
  if (check == 1) {
 
    switch (sCoffee) 
    {
      case "Espersso-Milk":
        var EM = EMilk * perCoffee;
        gw.value += perCoffee + "Espersso-Milk" +  " Coffees = " +EM+ " rs\r";
        total += EM;
        perCoffee.value = "";
        break;
      case "Espersso-Cream":
        var EC = ECream * perCoffee;
        gw.value +=perCoffee +" "+ "Espersso Cream " +  " Coffee = " + EC + " rs\r";
        total += EC;
        perCoffee.value = "";
        break;
      case "Espersso-Latte":
        var EL = ELatte * perCoffee;
        gw.value += perCoffee +" "+"Espersso-Latte " +  " Coffee  = " + EL + " rs\r";
        total += EL;
        perCoffee.value = "";
        break;
      case "Cappucino-Milk":
        var CM = CMilk * perCoffee;
        gw.value += perCoffee +" "+"Cappucino-Milk" +  " Coffee  = " + CM + " RS\r";
        total += CM;
        perCoffee.value = "";
        break;
      case "Cappucino-Cream":
        var CC = CCream * perCoffee;
        gw.value += perCoffee + " "+"Cappucino-Cream" + " Coffee = " + CC + " rs\r";
        total += CC;
        perCoffee.value = "";
        break;
      case "Cappucino-Lattee":
          var CL = CLatte* perCoffee;
          gw.value += perCoffee +" "+"Cappucino-Latte " +  " Coffee  = " + CL + " RS\r";
          total += CL;
          perCoffee.value = "";
          break;
      case "Latte-Milk":
            var LM = LMilk * perCoffee;
            gw.value += perCoffee +" "+"Latte-Milk " +  " Coffee  = " + LM + " RS\r";
            total += LM;
            perCoffee.value = "";
            break;
      case "Latte-Cream":
              var LC = LCream* perCoffee;
              gw.value += perCoffee +" "+"Latte-Cream " +  " Coffee  = " + LC + " RS\r";
              total += LC;
              perCoffee.value = "";
              break;
      case "Latte-Latte":
                var LL = LLatte * perCoffee;
                gw.value +=perCoffee +" "+ "Latte-Latte " +  " Coffee  = " + LL + " RS\r";
                total += LL;
                perCoffee.value = "";
                break;
    }

  }
}

function checkOut() {
  gw.value += "-------------------------------------   ";
  gw.value += "Your Total Bill Is = " + total + " rs \r";
  gw.value +="--------------------------------------"
  gw.value += " Thanks For Shopping! :)\r  ";
  gw.value +="--------------------------------------"
  total = 0;
}
function clearMe () {
  gw.value = "";
}
