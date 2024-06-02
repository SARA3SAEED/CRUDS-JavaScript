# Product Management CRUD Application

This project is a simple Product Management application built using HTML, CSS, and JavaScript. It demonstrates basic CRUD (Create, Read, Update, Delete, Search) operations for managing a list of products. The application stores data in the browser's local storage, allowing data persistence even after the browser is closed. Note: The search functionality is not yet finished.

<img src="https://drive.google.com/uc?export=view&id=1BjvaMFET5Bbvrj4z3jJ7zwyCHsERMOHO" width="700">

## Live Demo

Check out the live demo of the application [here](https://sara3saeed.github.io/CRUDS-JavaScript/).

## Features

- **Calculate Total**: Computes the total price of a product including taxes, ads, and discounts.
- **Create Product**: Allows the user to add new products to the list. Products can be added in bulk based on a count value.
- **Clear Input**: Clears the input fields after a product is created.
- **Show Products**: Displays all the products stored in local storage in a tabular format.
- **Delete Product**: Removes a specific product from the list.
- **Delete All Products**: Clears all products from the list and local storage.
- **Edit Product**: Allows the user to edit an existing product's details.
- **Search Product**: Allows the user to search for products (functionality not yet finished).

## Functionality

### Calculate Total
- Computes the total price of a product based on its price, taxes, ads, and discount.
- If the price is not provided, the total is set to 0 and the background color is set to red.

### Create Product
- Creates a new product object and adds it to the product list.
- Supports adding multiple instances of a product based on the count value.
- Saves product data to local storage.

### Clear Input
- Clears all input fields after a product is created.

### Show Products
- Displays all products in a table format.
- Includes a "Delete All" button if there are products in the list.

### Delete Product
- Removes a specific product from the product list.
- Updates the local storage after deletion.

### Delete All Products
- Clears all products from the product list and local storage.

### Edit Product
- Populates the input fields with the selected product's details for editing.

### Search Product
- Allows the user to search for products (functionality not yet finished).

## Initial Setup
- Checks for existing products in local storage and loads them into the product list.
- Displays the products upon initialization.

## Conclusion
This project provides a simple and efficient way to manage products using basic CRUD operations. It leverages local storage for data persistence and offers a clear and user-friendly interface for managing product information.
