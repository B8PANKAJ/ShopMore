const products = [
  {
    id: 1,
    name: "T-Shirt",
    image:
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    price: "₹999",
  },
  {
    id: 2,
    name: "Jacket Combo 3",
    image:
      "https://plus.unsplash.com/premium_photo-1673125510222-1a51e3a8ccb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    price: "₹3999",
  },
  {
    id: 3,
    name: "Women Coat",
    image:
      "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    price: "₹1999",
  },
  {
    id: 4,
    name: "Formal Dress Combo",
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    price: "₹2999",
  },
  {
    id: 5,
    name: "T-shirt",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349262-1e1d3e09735c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    price: "₹999",
  },
  {
    id: 5,
    name: "Women Tshrits",
    image:
      "https://images.unsplash.com/photo-1632194978058-4f2f48bc68c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D",
    price: "₹1999",
  },
];

function displayProducts(productsToDisplay) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear previous products

  productsToDisplay.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.className = "bg-white p-4 rounded-lg shadow-lg";

    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-t-lg">
            <h2 class="text-xl font-semibold mt-2">${product.name}</h2>
            <p class="text-gray-500">${product.price}</p>
        `;

    productList.appendChild(productItem);
  });
}

function filterProducts() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
}
displayProducts(products);
