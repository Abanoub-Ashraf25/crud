
/*
   1-js intro
   2-where to write js 
     inline,internal,external
   3-o/p to user
    window.alert('welcome from js');
    document.getElementById('demo').innerHTML="web development";
    console.log('welcome from console');  //development purpose
   4-variables 
   5-data types
    //loosly typed(dynamicly) lang  (js)
    //strongly typed(static) (c#,c++,java)
    primitive datatypes
    nonprimitive dataypes (object)
   6-prompt 
   7-logical pathes
   if condition
   //= assignment op
   //== comparision op (value only)
   //=== identical op  (value and type)
   8-operators
   mathematical %,+,-,*,/
   logical ops
    && and 
    ||  or
    >,<,>=,<=
   9-switch case
   10-loops(for,while,do-while)

   11-functions(functional prog. lang)
   12-function 
   13-return,rules
   14-functions types,hoisting
   15-scope,self invoked fun(iife)
   16-functional programming lang.
      function is a first-class object 
      1-function can be assigned to a variable
      2-function can be passed as a param to antoher fun  
      3-function can be returned from anther fun 
      4-function can be proprty of object
    17- string builtin functions  
    console.log(userName.length);
console.log(userName.indexOf("z"));
console.log(userName.lastIndexOf("a"));
console.log(userName.search("d"));
console.log(userName.charAt(3));
console.log(userName.concat(" taha"))
console.log(userName.startsWith("N"))
console.log(userName.endsWith("A"))
console.log(userName.includes("D"))
console.log(userName.toLowerCase())
console.log(userName.toUpperCase())
----------------------
substr
substring
slice
function divideMail()
{
  var mailValue=document.getElementById("mail").value;
  var atIndex=mailValue.indexOf("@");
  document.getElementById("name").value=mailValue.slice(0,atIndex);
  document.getElementById("domain").value=mailValue.slice(atIndex+1);
}
//object
//array
/*
friends.length
console.log(friends.indexOf("hoda"));
console.log(friends.includes("mai"));
console.log(friends.concat(["nadia","m7md"]));

console.log(friends.sort());
console.log(friends.reverse());
friends.push("ali")
friends.unshift("ali")
friends.pop()
friends.shift()
friends.splice(3,2);      //remove
friends.splice(3,0,"ali");      //add
friends.splice(2,1,"ali");      //add,remove


//json
// var users=
// [ 
//   {name:"ahmed",age:25,salary:3000},
//   {name:"ali",age:26,salary:4554},
//   {name:"nadia",age:34,salary:2343},
//   {name:"mai",age:23,salary:4553},
// ]
//think twice,code once
*/

//-----------------------CRUD APP----------------------------//

//crud(create,retrieve,update,delete)
var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory")
var productDesc=document.getElementById("productDesc");
var addBtn=document.getElementById("addBtn");
var inputs=document.getElementsByClassName("form-control");
var products;
var currentIndex=0;
if(localStorage.getItem("productsList")==null)
{
    products=[];
}
else
{
  products=JSON.parse(localStorage.getItem("productsList"));//mlyana
  displayData()
}

addBtn.onclick=function()
{
  if(addBtn.innerHTML=="add product") //add mode
  {
    addProduct();
  }
  else{   //update mode
    updateProduct()
  }

  displayData();
  clearForm()
}

function addProduct(){
  var product=
  {
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value,
  }
  products.push(product);
  localStorage.setItem("productsList",JSON.stringify(products))
}

function displayData(){
  var cartona="";
  for(var i=0;i<products.length;i++){
    cartona+=`<tr>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].category}</td>
                <td>${products[i].desc}</td>
                <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
                <td><button  onclick="getProductInfo(${i})" class='btn btn-warning'>update</button></td>
              </tr>`
  }
  document.getElementById("tableBody").innerHTML=cartona
}
function deleteProduct(index){
  products.splice(index,1);
  displayData();
  localStorage.setItem("productsList",JSON.stringify(products))
}
//move then improve
function clearForm()
{
  for(var i=0;i<inputs.length;i++){
    inputs[i].value=""
  }
}

function search(searchTxt)
{
  var cartona="";
  for(var i=0;i<products.length;i++){
    if(products[i].name.toLowerCase().includes(searchTxt.toLowerCase())){ 
        cartona+=`<tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="deleteProduct(${i})" class='btn btn-danger'>delete</button></td>
        <td><button onclick="getProductInfo(${i})" class='btn btn-warning'>update</button></td>
      </tr>`
    }
  }
  document.getElementById("tableBody").innerHTML=cartona
}

function getProductInfo(index){

  currentIndex=index;//0

  var product=products[index];
  productName.value=product.name;
  productPrice.value=product.price;
  productCategory.value=product.category;
  productDesc.value=product.desc;
  addBtn.innerHTML="update product";

}

function updateProduct(){
  var product=
  {
    name:productName.value,
    price:productPrice.value,
    category:productCategory.value,
    desc:productDesc.value,
  }
  products[currentIndex].name=product.name;
  products[currentIndex].price=product.price;
  products[currentIndex].category=product.category;
  products[currentIndex].desc=product.desc;


  localStorage.setItem("productsList",JSON.stringify(products))

}

//validation(data is valid)
//logic
//secure
//regular expression--rejex(pattern of symbols and chars)

var nameAlert=document.getElementById("nameAlert");
productName.onkeyup=function(){
  var nameRejex=/^[A-Z][a-z]{2,8}$/;
  if(nameRejex.test(productName.value)) //7lw(valid)
  {
     addBtn.removeAttribute("disabled") ; 
     productName.classList.add("is-valid");
     productName.classList.remove("is-invalid");
     nameAlert.classList.add("d-none")

  }
  else                 //w74(in-valid)
  {
     addBtn.disabled="true";
     productName.classList.add("is-invalid");
     productName.classList.remove("is-valid");
     nameAlert.classList.remove("d-none")
  }
}



//DOM(document object model)

var demo=document.getElementById("demo"); //dom statement
var inputsCollections=Array.from(document.getElementsByClassName("form-control"));
var test=document.getElementsByTagName("input");
var test2=document.getElementsByName("gender");
var test3=document.querySelector(".form-control");
var test4=document.querySelectorAll(".form-control");

