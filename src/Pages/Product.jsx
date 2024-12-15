import React,{useContext} from 'react';
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProdects from '../Components/RelatedProdects/RelatedProdects';

const Product = () => {
  
    const  {all_product}= useContext(ShopContext);
    const {productId} =  useParams();
    const product = all_product.find((p) => p.id === Number(productId));

      // Log product to see if it’s found
      console.log(product);
    return ( 
   <div>
        <Breadcrum product={product}  />
        <ProductDisplay product={product} />
        <DiscriptionBox />
        <RelatedProdects/>
    </div>
  )
}

export default Product;