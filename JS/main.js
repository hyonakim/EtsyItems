

//////////////////////////////______QUESTION NO. 1________///////////////////////////////
///////////////Show me how to calculate the average price of all items.//////////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

 (function () {


var prices = items.map( function (item) {
  return item.price;
});


var sum = prices.reduce( function (prev, next) {
   return prev + next;

 })

var avg = sum/prices.length;

//Convert it to 2 decimal places
var converted = avg.toFixed(2);

//Make it a string
var str = 'The average price is $' + converted;

//Make it show up on the page

  //Find our answer element
var answer1 = document.querySelector('#answer1');
  //Create a node from our above answer ready for the DOM
var textNode = document.createTextNode(str);
  //Append newly created node to our answer element
answer1.appendChild(textNode);

}());


//////////////////////////////______QUESTION NO. 2________///////////////////////////////
//////Show me how to get an array of items that cost between $14.00 and $18.00 USD///////
/////////////////////////////////______ANSWER________////////////////////////////////////


(function () {

var priceFilter = items.filter( function (singleItem) {
  if (singleItem.price > 14 && singleItem.price < 18) {
    return singleItem;
  };
});

var filteredResult = priceFilter.map( function (name) {
  return name.title;
})

var answer2 = document.querySelector('#answer2');
var textNode = document.createTextNode(filteredResult);
answer2.appendChild(textNode);


}()); 


//////////////////////////////______QUESTION NO. 3________///////////////////////////////
///////////Which item has a "GBP" currency code? Display it's name and price.////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

(function () {

var currencyPicker = items.filter( function (currencyItem) {
  if (currencyItem.currency_code === "GBP") {
    return currencyItem;
  }
})

var filteredName = currencyPicker.map( function (itemName) {
  return itemName.title;
});

var filteredCurrency = currencyPicker.map( function (prices) {
  return  prices.price;
});

var namePrice = filteredName + " costs " + '\u00A3' + filteredCurrency;


var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(namePrice);
answer3.appendChild(textNode);

}());

//////////////////////////////______QUESTION NO. 4________///////////////////////////////
//////////////////Display a list of all items who are made of wood.//////////////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

(function () {

var woodItems = items.filter( function (item) {
    return item.materials.indexOf('wood') !== -1;
  });

var answer4 = document.querySelector('#answer4'); 

woodItems.filter( function (a) {
    var textNode = document.createTextNode(a.title);
    var nextLine = document.createElement('br');  
    answer4.appendChild(textNode);
    answer4.appendChild(nextLine);   

});  
}());


//////////////////////////////______QUESTION NO. 5________///////////////////////////////
/////////////////////Which items are made of eight or more materials?//////////////////// 
/////////////Display the name, number of items and the items it is made of.//////////////
/////////////////////////////////______ANSWER________////////////////////////////////////


(function () {

var listofMaterials=[];

var materials = items.filter(function(item){
  if (item.materials.length >= 8){
       listofMaterials.push(item);
  };
});

listofMaterials.filter(function(item){
 var materialList = item.materials.length;
 var text = " has " + materialList + " materials:"

 var answer5 = document.querySelector('#answer5');

 var title = document.createTextNode(item.title);
 var textNode = document.createTextNode(text);
 var newLine =document.createElement('br');
 answer5.appendChild(title);
 answer5.appendChild(textNode);
 answer5.appendChild(newLine);

 item.materials.filter(function(a){
 var textNode = document.createTextNode(a);
 var newLine =document.createElement('br');
 answer5.appendChild(textNode);
 answer5.appendChild(newLine);
 
 });
});

}());


//////////////////////////////______QUESTION NO. 6________///////////////////////////////
///////////////////How many items were made by their sellers?////////////////////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

(function () {

var soldbySeller = items.filter( function (items) {
  if (items.who_made === "i_did") {
    return items;
  }
}); 

var result = soldbySeller.length + " were made by their sellers";


var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(result);
answer6.appendChild(textNode);

}());




