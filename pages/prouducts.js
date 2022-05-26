import AdvertisingBanner from "../components/AdvertisingBanner";
import axios from "axios";
import SideFilter from "../components/product/sideFilter";
import TopFilter from "../components/product/TopFilter";
import ShopTopbar from "../components/product/ShopTopbar";
import ProductBox from "../components/product/ProductsBox";
import PaginationBotton from "../components/product/PaginationBotton";


const prouducts = (props)=>{


    console.log(props.categories)
return (
<>
<AdvertisingBanner />

{/* <!-- Shop Product Content --> */}
<div className="shop-page">
    <div className="container-fluid" style={{padding:"0 40px"}}>
        <div className="row">
            <div className="col-sm-12">
                <div className="title-single">
                    <ul className="list-unstyled">
                        <li><a href="#"><span><i className="fas fa-home"></i></span></a></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>
            {/* <!-- /.Col --> */}
        </div>
    </div>

    <div className="container-fluid" style={{padding:"0 40px"}}>
        <div className="row">
           <SideFilter />

            <div className="col-lg-10" >
                 <TopFilter />
                 <ShopTopbar />
                 <ProductBox products={props.products} />
                 <PaginationBotton />
            </div>
        </div>
    </div>
</div>

</>
)
}

export default prouducts


export async function getStaticProps() {
    try {
        const ProductResult = await axios.get('http://localhost:8080/api/products/');
        const products = ProductResult.data;
        
        const categoriesResult = await axios.get('http://localhost:8080/api/categories/');
        const categories = categoriesResult.data;
        

        return {
            props: {
                products : products || [],
                categories : categories || []
            }
        }
    } catch (error) {
        console.log(error);
    }
  }
