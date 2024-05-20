import React, { useState, useEffect } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ApiData() {
    const [data, setData] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]); // Initialize selectedFilters as an empty array

    useEffect(() => {
        // Fetch data from the API based on selected filters
        const apiUrl = constructApiUrl(searchQuery, selectedFilters);
        fetch(apiUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);
            })
            .catch(error => console.error(error));
    }, [searchQuery, selectedFilters]);

    function constructApiUrl(query, filters) {
        // Construct the URL with the search query and selected filters
        let apiUrl = `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`;
        // Append selected filters to the URL
        filters.forEach(filter => {
            apiUrl += `&${filter.key}=${encodeURIComponent(filter.value)}`;
        });
        return apiUrl;
    }

    function handleSearch(event) {
        setSearchQuery(event.target.value);
    }

    function handleFilterSelection(filter) {
        // Toggle the selected filter
        const updatedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter(f => f !== filter)
            : [...selectedFilters, filter];
        setSelectedFilters(updatedFilters);
    }

    // Render the facets UI
    function renderFacets() {
      // Extract categories from the data
      const categories = data.products ? [...new Set(data.products.map(product => product.category))] : [];
  
      // Extract price information from the data
      const prices = data.products ? data.products.map(product => product.price) : [];
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const priceIncrements = 500;
      const priceOptions = [];
      for (let price = minPrice; price <= maxPrice; price += priceIncrements) {
          priceOptions.push(`$${price} - $${price + priceIncrements}`);
      }
  
      return (
          <div className="Facets">
              <div className="Facet">
                  <h3>Category</h3>
                  <ul>
                      {categories.map(category => (
                          <li key={category}>
                              <label>
                                  <input
                                      type="checkbox"
                                      checked={selectedFilters.some(filter => filter.key === 'category' && filter.value === category)}
                                      onChange={() => handleFilterSelection({ key: 'category', value: category })}
                                  />
                                  {category}
                              </label>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="Facet">
                  <h3>Price Range</h3>
                  <ul>
                      {priceOptions.map(option => (
                          <li key={option}>
                              <label>
                                  <input
                                      type="checkbox"
                                      checked={selectedFilters.some(filter => filter.key === 'priceRange' && filter.value === option)}
                                      onChange={() => handleFilterSelection({ key: 'priceRange', value: option })}
                                  />
                                  {option}
                              </label>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      );
  }

    // Render the product list
    function renderProductList() {
        const products = data['products'];
        if (!products) {
            return null;
        }

        return (
            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map(product => (
                    <Col key={product.id}>
                        <ProductTile prod={product} />
                    </Col>
                ))}
            </Row>
        );
    }

    // Render each product tile
    //height and width, different format webP
    function ProductTile({ prod }) {
      return (
          <Card className="ProductItem">
              <Card.Title className="CustomCardTitle">{prod.title}</Card.Title>
              <Card.Img variant="top" src={prod.images[0]} alt={prod.title} className="ProductImage" />
              <Card.Body>
                  <Card.Text>Price: ${prod.price}</Card.Text>
              </Card.Body>
          </Card>
      );
  }

    return (
        <div className="App">
            <div className="FacetsContainer">
                {renderFacets()}
            </div>
            <div className="ProductListContainer">
                <h1>This is a test to see if the results render</h1>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
                {renderProductList()}
            </div>
        </div>
    );
}

export default ApiData;
  export var product;
  export var products;

