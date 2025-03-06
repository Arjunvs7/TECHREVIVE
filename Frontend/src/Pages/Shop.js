import React, { useState } from 'react';
import './Shop.css';

const products = [
  { id: 1, image: 'https://via.placeholder.com/200', name: 'iPhone 16 Pro Max', price: 100000, category: 'Electronics' },
  { id: 2, image: 'https://via.placeholder.com/200', name: 'Radio', price: 150, category: 'Clothing' },
  { id: 3, image: 'https://via.placeholder.com/200', name: 'Camera', price: 200, category: 'Electronics' },
  { id: 4, image: 'https://via.placeholder.com/200', name: 'Product 4', price: 80, category: 'Accessories' },
  { id: 5, image: 'https://via.placeholder.com/200', name: 'Product 5', price: 120, category: 'Clothing' },
];

const Shop = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('price');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleCategoryFilter = (e) => setCategoryFilter(e.target.value);
  const handleSort = (e) => setSortOption(e.target.value);

  // Show the popup notification
  const showAddedToCartPopup = (product) => {
    setPopupMessage(`${product.name} added to cart!`);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showAddedToCartPopup(product);
  };

  React.useEffect(() => {
    let filtered = products.filter((product) => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter === 'All' || product.category === categoryFilter)
    );

    if (sortOption === 'price') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [searchQuery, sortOption, categoryFilter]);

  return (
    <div className="shop-container">
      <h2 className="shop-header">Shop</h2>

      {/* Popup Notification */}
      {showPopup && <div className="popup">{popupMessage}</div>}

      <div className="shop-controls">
        <input type="text" placeholder="Search products..." value={searchQuery} onChange={handleSearch} />
        <select onChange={handleCategoryFilter} value={categoryFilter}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select onChange={handleSort} value={sortOption}>
          <option value="price">Sort by Price</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>
                <p>Category: {product.category}</p>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
