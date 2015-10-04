

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


// Created a new array for priceFilter variable's items between $14 and $18  
var itemPrice = [];


// Find Items with Prices between $14 and $18 function 
var priceFilter = items.filter( function (singleItem) {
  if (singleItem.price > 14 && singleItem.price < 18) {
    return itemPrice.push(singleItem.title);
  };
});
//console.log(priceFilter);

// Grabbed the ID answer2 and placed itemPrice array's elements with break tags
document.getElementById('answer2').innerHTML = 
itemPrice[0] + '</br>' + itemPrice[1] + '</br>' + itemPrice[2]; 


}()); 


//////////////////////////////______QUESTION NO. 3________///////////////////////////////
///////////Which item has a "GBP" currency code? Display it's name and price.////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

(function () {

//Filter out the currrency code with GBP
var currencyPicker = items.filter( function (currencyItem) {
  if (currencyItem.currency_code === "GBP") {
    return currencyItem;
  };
});

//Filter out the item title 
var filteredName = currencyPicker.map( function (itemName) {
  return itemName.title;
});

//Filter out the item price
var filteredCurrency = currencyPicker.map( function (prices) {
  return  prices.price;
});

//Combine filteredName and filteredCurrency with text and pound sign
var namePrice = filteredName + " costs " + '\u00A3' + filteredCurrency;
//console.log(namePrice);

//Point to the element that is being targeted
var answer3 = document.querySelector('#answer3');

//Create text node for the DOM
var textNode = document.createTextNode(namePrice);

//Append textnode to the element
answer3.appendChild(textNode);

}());

//////////////////////////////______QUESTION NO. 4________///////////////////////////////
//////////////////Display a list of all items who are made of wood.//////////////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

(function () {

//Filter out materials made of wood
var woodItems = items.filter( function (item) {
    return item.materials.indexOf('wood') !== -1;
  });
//console.log(woodItems);

//Map out the titles and combine with text
var itemTitle = woodItems.map( function (name) {
  return name.title + " is made of wood";
});
//console.log(itemTitle);

//Apply the list of items with innerHTML
document.getElementById('answer4').innerHTML = 
itemTitle[0] + '</br>' + itemTitle[1] + '</br>' +
itemTitle[2] + '</br>' + itemTitle[3] + '</br>' + 
itemTitle[4];

}());


//////////////////////////////______QUESTION NO. 5________///////////////////////////////
/////////////////////Which items are made of eight or more materials?//////////////////// 
/////////////Display the name, number of items and the items it is made of.//////////////
/////////////////////////////////______ANSWER________////////////////////////////////////


(function () {

//Push items.material here
var listofMaterials=[];

//Map out all materials more than 8
var material = items.map(function(item){
  if (item.materials.length >= 8){
       return listofMaterials.push(item);
  };
});
// console.log(listofMaterials);

//Point to element that needs to be targeted
var answer5 = document.querySelector('#answer5');

//Function to show title, number of items, and items it is made of  
listofMaterials.map(function(item){
 var materialList = item.materials.length;
 var text = " has " + materialList + " materials:"
 var breakLine = document.createElement('br');
 var title = document.createTextNode(item.title);
 var textTitle = document.createTextNode(text);
 var newLine = document.createElement('br');
 var newLine2 = document.createElement('br');
 answer5.appendChild(breakLine);
 answer5.appendChild(title);
 answer5.appendChild(textTitle);
 answer5.appendChild(newLine);
 answer5.appendChild(newLine2);

//Function to show the list of items of materials
item.materials.map(function(a){
 var fullList = document.createTextNode(a);
 var newLine =document.createElement('br');
 answer5.appendChild(fullList);
 answer5.appendChild(newLine);
 
 });
});

}());


//////////////////////////////______QUESTION NO. 6________///////////////////////////////
///////////////////How many items were made by their sellers?////////////////////////////
/////////////////////////////////______ANSWER________////////////////////////////////////

(function () {

//Filter items made by "i_did"
var soldbySeller = items.filter( function (items) {
  if (items.who_made === "i_did") {
    return items;
  }
}); 
// console.log(soldbySeller);

//Combine soldbySeller with text
var result = soldbySeller.length + " were made by their sellers";

//Point to element being targeted
var answer6 = document.querySelector('#answer6');

//Create node for the DOM
var textNode = document.createTextNode(result);

//Append textNode to element
answer6.appendChild(textNode);

}());




