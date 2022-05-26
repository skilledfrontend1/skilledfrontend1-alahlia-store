import ProductCard from "./ProductCard"
import axios from "axios"

const ProductBox=(props) =>{

 return(     
<div className="row grid-view" >
    {  props.products?.map((el)=>{
            return( <ProductCard key={el.id} productData={el} />    )
        })
    }

</div>
)
}

export default ProductBox



