import React, { useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/item/Item';
import "./Css/ShopCategory.css"
const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span className="sp">Showing 1-13</span> out of 36 products
        </p> 
        <div className="x">
          <button>Sort by<img src={dropdown_icon} alt=""/></button>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.new_price}/>
          }else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
           Explore More
      </div>
    </div>

  );
};

export default Shopcategory;
