import { PRODUCTS } from "../../Products";
import Product from './Product';
import './Shop.css';

function Shop(){
    return(
        <div className="shop">
            <div className="shop-title">
                <h1>ZENIEL KITCHEN STORE</h1>
            </div>
            <div className="products">
                {""}
                {PRODUCTS.map((product) =>(
                    <Product data={product} />
                    ))}
                </div>
        </div>
    );
}
export default Shop