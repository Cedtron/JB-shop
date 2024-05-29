// Number of products per page
const productsPerPage = 9;
let currentPage = 1;

// Function to create product card HTML
function createProductCard(product) {

let  p=product.name
let px=product.price

    return `
        <div class=" col-md-2 col-sm-6 col-lg-4">
        <div class="card m-2 card-shadow text-center">
        <img src="images/${product.image}" class="card-img-top img" alt="${product.name}">
        <div class="card-body">
            <div class="detail-box mb-2">
                <div class="fw-bold">${product.name}</div>
                <div class="fs-6">Ugx ${product.price}</div>
            </div>



            <div class="row row row-cols-2">
                <div class="col">
                    <a href="product-view.html?id=${product.id}" class="btn btn-primary btn-p m-2 w-100 rounded-2">View</a>
                </div>
                <div class="col">
                    <a href="whatsapp://send?phone=+25677278459&text=I%20want%20to%20buy%20${p}%20-%20UGX%20${px}" class="btn btn-warning btn-s m-2 w-100 rounded-2">Buy</a>
                </div>
            </div>
        </div>
    </div>
        </div>`;
}
// Function to populate category dropdown
function populateCategoryDropdown() {
    const categorySelect = document.getElementById("categorySelect");
    if (!categorySelect) {
        console.error("Category select element not found.");
        return;
    }
    categorySelect.innerHTML = ""; // Clear existing options
    // Add an "All Categories" option
    const allCategoriesOption = document.createElement("option");
    allCategoriesOption.value = "all";
    allCategoriesOption.textContent = "All Categories";
    categorySelect.appendChild(allCategoriesOption);

    // Populate dropdown with categories from product data
    productsData.categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.name.toLowerCase();
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

// Call the function to populate category dropdown
populateCategoryDropdown();

const categorySelect = document.getElementById("categorySelect");
categorySelect.addEventListener("change", function() {
    currentPage = 1; // Reset current page to 1 when category changes
    fillProductCards(this.value); // Pass the selected category to fillProductCards
});
function fillProductCards(category) {
    const productRow = document.getElementById("productRow");
    let products = [];

    // Collect products based on selected category
    if (category === "all") {
        productsData.categories.forEach(category => {
            products.push(...category.products);
        });
    } else {
        const selectedCategory = productsData.categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());
        if (selectedCategory) {
            products = selectedCategory.products;
        }
    }

    // Filter products based on search query if present
    const searchQuery = getQueryParam('query');
    if (searchQuery) {
        products = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Shuffle the products array
    shuffleArray(products);

    // Filter products based on pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const slicedProducts = products.slice(startIndex, endIndex);

    // Create product cards for sliced products
    const productCardsHTML = slicedProducts.map(createProductCard).join('');

    // Add cards to the row
    productRow.innerHTML = productCardsHTML;

    // Calculate total pages and render pagination links
    const totalPages = Math.ceil(products.length / productsPerPage);
    renderPagination(totalPages);
}

// Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}






function renderPagination(totalPages) {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    if (totalPages > 1) {
        const prevButton = document.createElement("li");
        prevButton.innerHTML = `<a href="#" class="page-link">&laquo;</a>`;
        prevButton.classList.add("page-item");
        prevButton.querySelector("a").addEventListener("click", function(event) {
            event.preventDefault();
            if (currentPage > 1) {
                currentPage--; // Update currentPage when clicking previous button
                fillProductCards(categorySelect.value);
            }
        });
        if (currentPage === 1) {
            prevButton.classList.add("disabled");
        }
        paginationContainer.appendChild(prevButton);
    }

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        if (i === currentPage) {
            li.classList.add("active");
        }
        const link = document.createElement("a");
        link.classList.add("page-link");
        link.textContent = i;
        link.href = "#";
        link.addEventListener("click", function(event) {
            event.preventDefault();
            currentPage = i; // Update currentPage when clicking pagination link
            fillProductCards(categorySelect.value);
        });
        li.appendChild(link);
        paginationContainer.appendChild(li);
    }

    if (totalPages > 1) {
        const nextButton = document.createElement("li");
        nextButton.innerHTML = `<a href="#" class="page-link">&raquo;</a>`;
        nextButton.classList.add("page-item");
        nextButton.querySelector("a").addEventListener("click", function(event) {
            event.preventDefault();
            if (currentPage < totalPages) {
                currentPage++; // Update currentPage when clicking next button
                fillProductCards(categorySelect.value);
            }
        });
        if (currentPage === totalPages) {
            nextButton.classList.add("disabled");
        }
        paginationContainer.appendChild(nextButton);
    }
}

// Function to get query parameter value
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// Get the search query from query parameter and filter product cards accordingly
const searchQuery = getQueryParam('query');
if (searchQuery) {
    // Filter product cards based on search query
    const filteredProducts = productsData.categories.reduce((acc, category) => {
        const matchingProducts = category.products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return acc.concat(matchingProducts);
    }, []);

    // Calculate total pages for filtered products
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Function to fill in product cards for the current page
    function fillProductCards(pageNumber) {
        const productRow = document.getElementById("productRow");
        // Filter products based on pagination
        const startIndex = (pageNumber - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const slicedProducts = filteredProducts.slice(startIndex, endIndex);
        // Create product cards for sliced products
        const productCardsHTML = slicedProducts.map(createProductCard).join('');
        // Add cards to the row
        productRow.innerHTML = productCardsHTML;
        // Render pagination
        renderPagination(totalPages, pageNumber);
    }

    // Render product cards for the first page
    fillProductCards(1);
}else {
    // If no search query is present, fill product cards based on selected category
    const categoryFromUrl = getQueryParam('category');
    if (categoryFromUrl) {
        fillProductCards(categoryFromUrl);
    } else {
        fillProductCards("all");
    }
}