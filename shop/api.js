// New arrival ----------------------------------------------------
// goi API => cho phan hang moi nhat (new arrival) (lay mac dinh 6 san pham tu danh sach trong API)
function loadNewArrivalProducts() {
  // lay element chua box
  const container = document.querySelector("#new-arrival-list");
  // goi API
  fetch("https://fakestoreapi.com/products/category/men's%20clothing?limit=6")
    .then((res) => res.json()) // chuyen kieu json sang kieu js (object)
    .then((list) => {
      // chay vong lap hien thi cac obj len giao dien
      list.forEach((product_data) => {
        const box = createSwiperSlideBox(product_data);
        container.appendChild(box);
      });
    });
}

// tai du lieu tu API len giao dien
function createSwiperSlideBox(product_data) {
  // Create the main div with the class "swiper-slide box"
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide box";

  // Create the img element and set its attributes
  const img = document.createElement("img");
  img.src = product_data.image;
  img.style = "max-height: 500px; object-fit: contain;";

  img.alt = "";

  // Append the img to the swiperSlide div
  swiperSlide.appendChild(img);

  // Create the content div
  const contentDiv = document.createElement("div");
  contentDiv.className = "content";

  // Create the "Buy Now" link
  const buyNowLink = document.createElement("a");
  buyNowLink.href = "#";
  buyNowLink.className = "btn";
  buyNowLink.textContent = "Buy Now";

  // Append the link to the content div
  contentDiv.appendChild(buyNowLink);

  // Append the content div to the swiperSlide div
  swiperSlide.appendChild(contentDiv);

  return swiperSlide;
}

loadNewArrivalProducts();

// All products ----------------------------------------------------
function loadAllProducts() {
  // lay element chua product card
  const container = document.querySelector("#product-list");
  // goi API
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json()) // chuyen kieu json sang kieu js (object)
    .then((list) => {
      // chay vong lap hien thi cac obj len giao dien
      list.forEach((product_data) => {
        // kiem tra khong hien thi electronics
        if (product_data.category == "electronics") return;
        const card = createProductCard(product_data);
        container.appendChild(card);
      });
    });
}

// tai du lieu tu API len giao dien
function createProductCard(product_data) {
  // Create the main div with class "box"
  const boxDiv = document.createElement("div");
  boxDiv.className = "box";

  // Create the img element and set its attributes
  const img = document.createElement("img");
  img.src = product_data.image;
  img.style = "height: 200px; object-fit: contain;";
  img.alt = "";

  // Append the img to the boxDiv
  boxDiv.appendChild(img);

  // Create the content div
  const contentDiv = document.createElement("div");
  contentDiv.className = "content";

  // Create the h2 element and set its text content
  const h2 = document.createElement("h2");
  h2.textContent = product_data.title;
  contentDiv.appendChild(h2);

  // Create the stars div
  const starsDiv = document.createElement("div");
  starsDiv.className = "stars";

  // Generate a random star rating (0 to 5)
  const randomRating = Math.floor(Math.random() * 4) + 2; // Random integer between 0 and 5

  // Add full stars
  for (let i = 0; i < randomRating; i++) {
    const starIcon = document.createElement("i");
    starIcon.className = "bx bxs-star"; // Full star icon
    starsDiv.appendChild(starIcon);
  }

  // Add empty stars for remaining slots (to make a total of 5 stars)
  const emptyStars = 5 - randomRating;
  for (let i = 0; i < emptyStars; i++) {
    const emptyStarIcon = document.createElement("i");
    emptyStarIcon.className = "bx bx-star"; // Empty star icon
    starsDiv.appendChild(emptyStarIcon);
  }

  // Append the starsDiv to the contentDiv
  contentDiv.appendChild(starsDiv);

  // Create the span element and set its text content
  const priceSpan = document.createElement("span");
  priceSpan.textContent = `$${product_data.price}`;
  contentDiv.appendChild(priceSpan);

  // Create the cart icon
  const cartIcon = document.createElement("i");
  cartIcon.className = "bx bx-cart-alt";
  contentDiv.appendChild(cartIcon);

  // Append the contentDiv to the boxDiv
  boxDiv.appendChild(contentDiv);

  return boxDiv;
}

loadAllProducts();
