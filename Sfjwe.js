import './Ssp.css';
import React, { useState } from "react";

function Sfjwe() {
    const products = [
        {
            id: 1,
            title: "Digital Marketing Course",
            description: "Complete Digital Marketing Mastery Course",
            price: "₹999",
            image: "https://via.placeholder.com/200"
        },
        {
            id: 2,
            title: "React JS Course",
            description: "Learn React JS from Beginner to Advanced",
            price: "₹799",
            image: "https://via.placeholder.com/200"
        },
        {
            id: 3,
            title: "JavaScript Ebook",
            description: "Advanced JavaScript Guide",
            price: "₹499",
            image: "https://via.placeholder.com/200"
        }
    ];
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Back button function
    const goBack = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <div className="container">

                <h2>Digital Products</h2>

                {/* Product List */}
                {!selectedProduct && (
                    <div className="product-list">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="card"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
                {selectedProduct && (
                    <div className="product-details">

                        <button onClick={goBack}>⬅ Back</button>

                        <img src={selectedProduct.image} alt="" />

                        <h2>{selectedProduct.title}</h2>

                        <p>{selectedProduct.description}</p>

                        <h3>{selectedProduct.price}</h3>
                        <button>Buy Now</button>

                    </div>
                )}

            </div>
        </>
    )
}
export default Sfjwe;