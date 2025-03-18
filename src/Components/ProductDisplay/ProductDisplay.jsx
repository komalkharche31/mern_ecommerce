import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const { product } = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-main-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{ product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={ star_icon } alt="" />
                <img src={ star_icon } alt="" />
                <img src={ star_icon } alt="" />
                <img src={ star_icon } alt="" />
                <img src={ star_dull_icon } alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old"></div>
                <div className="productdisplay-right-price-new"></div>
            </div>
            <div className="productdisplay-right-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>
            <div className="productdiplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span>Women, T-Shirt, crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tag :</span>Mordern, Latest
            </p>           
        </div>
    </div>
  )
}

export default ProductDisplay