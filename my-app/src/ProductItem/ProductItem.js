import Button from './../Button/Button'
import Image from '../Image/Image';

const ProductItem = ({ data }) => (
    <li>
        <h3>{data.name}</h3>
        <Image imgSrc={data.image} />
        <span>Price: {data.price}</span>
        {/* <Button text="Add to Cart"/> */}
        <Button>
            Add to Cart
        </Button>
    </li>
);

export default ProductItem;