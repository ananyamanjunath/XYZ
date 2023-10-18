import React from 'react';
import './ProductPage.css';

function ProductPage() {
    return (
        <div className="product-content">
            <h1>House Paint Visualizer</h1>
            <p>Our flagship software, the 'House Paint Visualizer', is set to launch soon. This innovative tool incorporates deep learning and computer vision technologies to revolutionize the way you choose paint for your home. Stay tuned for this and other exciting products in the pipeline!</p>
            <img src="/images/productImage.jpg" alt="House Paint Visualizer Preview" />
        </div>
    );
}

export default ProductPage;
