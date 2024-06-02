let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


console.log(title , category , total , count , submit ,price , discount,taxes,ads ); 


//1-Calculate
function getTotal(){

    console.log('done');

    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "green";
    }else{
        total.innerHTML = "0";
        total.style.background = "red";
    }

}


//2-Create product
            /* 1- save product as object
            2- save product as array
            3- save product as handle to json
            4- save product as local storage
            */
let data;
if(localStorage.product != null){
    data = JSON.parse(localStorage.product);
}else{
    data = [];
}

submit.onclick= function createProduct(){

    let product = {
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        total : total.innerHTML,
        count : count.value,
        category : category.value
    }

    console.log(product);

    // here step 7 of count
    if(product.count > 1) {
        for (let i = 0; i < product.count; i++) {
            data.push(product);
        }
    }else{
        data.push(product);
    }


    localStorage.setItem('product', JSON.stringify(data));
    console.log(localStorage.product);
    console.log(data);
    clearInput();
    showProduct();

}

//3-Clear input

function clearInput(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}



//4-Show product

function showProduct(){

    let table ='';
    let tbody = document.getElementById('tbody');
    for (let i = 0; i < data.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${data[i].title}</td>
            <td>${data[i].price}</td>
            <td>${data[i].taxes}</td>
            <td>${data[i].ads}</td>
            <td>${data[i].discount}</td>
            <td>${data[i].total}</td>
            <td>${data[i].category}</td>
            <td><button onclick="deleteProduct(${i})">Delete</button></td>
            <td><button onclick="editProduct(${i})">Update</button></td>
        </tr>
        `;
    }
    tbody.innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(data.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All</button>`;
    }else{
        btnDelete.innerHTML = ``;
    }


}

showProduct();



//5-Delete product
  /* 0- function take parameter index
     1- delete product from array
     2- save product as handle to json
     3- save product as local storage again
     4- show product again
     */

function deleteProduct(index){
    console.log(index);
    data.splice(index,1);
    localStorage.setItem('product', JSON.stringify(data));
    showProduct();
}



//6-Delete all

function deleteAll(){
    data = [];
    localStorage.clear();
    showProduct();

    //or
    // data.splice(0);
    // localStorage.setItem('product', JSON.stringify(data));
    // showProduct();
}



//7-Count product : on create product function ^



//8-Edit product

function editProduct(index){
    title.value = data[index].title;
    price.value = data[index].price;
    taxes.value = data[index].taxes;
    ads.value = data[index].ads;
    discount.value = data[index].discount;
    total.innerHTML = data[index].total;
    count.value = data[index].count;
    category.value = data[index].category;
}