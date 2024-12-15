import React from 'react';
import './RelatedProdects.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const RelatedProdects = () => {
  return (
    <div className='relatedprodects'>
            <h1>NEW COLLECTION </h1>
<hr />
<div className="relatedprodects-item">
    {data_product.map((item,i)=>{
        return <Item key={i}id={item.id} name={item.name} iamge={item.image} new_price={item.new_price}  old_price={item.old_price}/>
    })}
</div>

    </div>
  )
}

export default RelatedProdects;
