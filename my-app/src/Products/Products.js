import React from 'react';
import './Products.css'
import ProductItem from '../ProductItem/ProductItem';

const Products = (props) => {
  const { data } = props;
  return (
  < ul className = 'products' >
  {data.map((item) => (
      <ProductItem key={item.id}  data={item}/>
    ))}
  </ul >
  );
};

export default Products;

// const Products = (props) => (
// <ul className='products'>
//         {props.data.map((item) => (
//           <li>
//             <h3>{item.name}</h3>
//             <img src={item.image} />
//             <span>Price: {item.price}</span>
//             <button>Add to Cart</button>
//           </li>
//         ))}
//       </ul>

// const Products = ({data}) => (
// <ul className='products'>
//         {data.map((item) => (
//           <li>
//             <h3>{item.name}</h3>
//             <img src={item.image} />
//             <span>Price: {item.price}</span>
//             <button>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
