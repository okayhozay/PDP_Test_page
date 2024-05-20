import React, { useState, useEffect } from 'react';
import './App.css';
import {products, product} from './api.jsx'

class ProductTile extends React.Component {

    
    render() {
        return (
            
          <div className="ProductItem">
            <div className="image">
              <img src={this.props.productImageUrl} />
            </div>
            <div className="middle aligned content">
              <div className="description">
                <div>Product:{this.props.prod}</div>
                <p>Price:{this.props.prod_price}</p>
              </div>  
            </div>
          </div>
        );
      }
    }
    
    class ProductList extends React.Component {
      render() {
        const products = this.props.products;
        return products.map(product => (
          <ProductTile
            prod={product["title"]}
            prod_price={product["price"]}
            productImageUrl={product["images"]}
          />
        ));
      }
    }
    
    export default function pTile() {
      return (
        <div>
          <h1>This is a test to see if the results render</h1>
          <ProductList products={products} />
        </div>
      );
    }



    /* <table border='black' border-collapse='collapse'>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>

                <tbody>
                    {data['products'].length > 0 ? (
                        (() => {
                            var products = data['products'];
                            const rows = [];
                            for (let i = 0; i < products.length; i++) {
                                const product = products[i];
                                rows.push(
                                    <tr key={i}>
                                        <td>{product['title']}</td>
                                        <td>${product['price']}</td>
                                        <td>{product['images']}</td>
                                    </tr>
                                );
                            }
                            return rows;
                        })()
                    ) : (
                        <tr>
                            <td colSpan='2'>Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table> */