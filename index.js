const products = [
  {
    id: 1,
    name: "Artisan Leather Loafers",
    imageSrc: "images/product-11.png", // Was product-11.jpg
    price: "75.00",
    originalPrice: null, // Or some value if there's a sale
    ratingStars: 4.5,
    category: ["featured", "all"],
    description_short: "Handcrafted loafers with premium leather.",
    description_long: "Experience unparalleled comfort and style with our Artisan Leather Loafers. Each pair is meticulously handcrafted by skilled artisans using full-grain leather, featuring a durable sole and a classic design perfect for any occasion."
  },
  {
    id: 2,
    name: "Hand-stitched Suede Boots",
    imageSrc: "images/product-2.png",
    price: "120.00",
    originalPrice: "150.00", // Example of a sale item
    ratingStars: 5,
    category: ["featured", "all"],
    description_short: "Elegant suede boots with detailed hand-stitching.",
    description_long: "Our Hand-stitched Suede Boots are a testament to quality craftsmanship. Made from the finest suede, these boots feature intricate hand-stitching, a comfortable cushioned insole, and a versatile design that pairs well with both casual and formal wear."
  },
  {
    id: 3,
    name: "Classic Oxford Brogues",
    imageSrc: "images/product-3.png",
    price: "95.00",
    originalPrice: null,
    ratingStars: 4,
    category: ["featured", "all"],
    description_short: "Timeless Oxford brogues, perfect for formal events.",
    description_long: "Step out in style with our Classic Oxford Brogues. These shoes are handcrafted from premium calfskin leather, featuring traditional brogue detailing, a sturdy Goodyear welt construction, and a sophisticated silhouette."
  },
  {
    id: 4,
    name: "Woven Leather Sandals",
    imageSrc: "images/product-5.png", // Was product-5.jpg
    price: "60.00",
    originalPrice: null,
    ratingStars: 4,
    category: ["latest", "all"],
    description_short: "Comfortable and stylish woven leather sandals.",
    description_long: "Enjoy the summer breeze with our Woven Leather Sandals. Handcrafted with intricate woven leather straps and a soft, supportive footbed, these sandals offer both elegance and comfort for your daily adventures."
  },
  {
    id: 5,
    name: "Embroidered Velvet Slippers",
    imageSrc: "images/product-9.png", // Using a gallery image
    price: "85.00",
    originalPrice: null,
    ratingStars: 4.5,
    category: ["latest", "all"],
    description_short: "Luxurious velvet slippers with custom embroidery.",
    description_long: "Indulge in luxury with our Embroidered Velvet Slippers. Each pair is crafted from plush velvet and features exquisite custom embroidery, making them a unique statement piece for at-home comfort or special occasions."
  },
  {
    id: 6,
    name: "Linen Espadrilles",
    imageSrc: "images/product-11.png", // Using a gallery image
    price: "50.00",
    originalPrice: null,
    ratingStars: 3.5,
    category: ["latest", "all"],
    description_short: "Lightweight and breathable linen espadrilles.",
    description_long: "Perfect for warm weather, our Linen Espadrilles are handmade with breathable linen uppers and a traditional jute sole. They offer a relaxed yet chic style, ideal for casual outings and vacation wear."
  },
  {
    id: 7,
    name: "Men's Classic Chukka",
    imageSrc: "images/product-1.png", // Example, ensure this image exists
    price: "110.00",
    originalPrice: null,
    ratingStars: 4,
    category: ["all"],
    description_short: "Versatile chukka boots for everyday wear.",
    description_long: "Our Men's Classic Chukka boots are a wardrobe staple. Handcrafted from durable leather, they feature a comfortable fit and a timeless design that can be dressed up or down."
  },
  {
    id: 8,
    name: "Women's Ballet Flats",
    imageSrc: "images/product-4.png", // Example, ensure this image exists
    price: "70.00",
    originalPrice: null,
    ratingStars: 4.5,
    category: ["all"],
    description_short: "Elegant and comfortable handmade ballet flats.",
    description_long: "Our Women's Ballet Flats are the epitome of comfort and elegance. Handcrafted from soft leather, they feature a cushioned insole and a flexible sole for all-day wear."
  }
];

// Optional: Add a function to easily get all products or by ID (can be added later if needed by other JS files)
// function getAllProducts() { return products; }
// function getProductById(id) { return products.find(product => product.id === parseInt(id)); }
