import photo from "../../public/images/Products/1.jpg"
import photoTow from "../../public/images/Products/11.jpg"
import Image from 'next/image'


const ProductCard = (props)=>{

const clickHandel =()=>{
console.log(props.productData.id)
}


    return (
        <div className="col-lg-3 col-md-6"   >
        <div className="box-product"  >
            <span className="label-product">New</span>
            <div className="image">
                <Image src={photo} alt={props.productData.name.en} />
                {/* <Image src={photoTow} alt={props.productData.name.en} /> */}
            </div>
            <div className="details">
                <h4><a href="/">{props.productData.name.en}</a></h4>
                <span className="stock">In stock</span>
                <div className="rating">
                    <ul className="stars">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                    </ul>
                </div>
                <div className="prices">
                  { props.productData.discount.isActive? <span className="old"> { props.productData.discount.price || 0 }</span> : null}
                    <span className="new"><strong>{props.productData.price }</strong> AED</span>
                </div>
                <button onClick={clickHandel}>Add to cart <span><i className="fas fa-plus"></i></span></button>
            </div>
        </div>
        {/* <!-- /.Box --> */}
    </div>
    )
}

export default ProductCard