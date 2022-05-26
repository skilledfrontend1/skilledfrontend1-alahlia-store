const CheckOut =()=>{
return(
<div className="checkout-content">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-12">
                <nav>
                    <div className="nav nav-tabs check-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-Account-tab" data-bs-toggle="tab" data-bs-target="#nav-Account" type="button" role="tab" aria-controls="nav-Account" aria-selected="true">
                            Account <span><i className="fas fa-lock"></i></span>
                            <div className="number">1</div>
                        </button>
                        <button className="nav-link" id="nav-Address-tab" data-bs-toggle="tab" data-bs-target="#nav-Address" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            Address <span><i className="fas fa-edit"></i></span>
                            <div className="number">2</div>
                        </button>
                        <button className="nav-link" id="nav-Payment-tab" data-bs-toggle="tab" data-bs-target="#nav-Payment" type="button" role="tab" aria-controls="nav-Payment" aria-selected="false">
                            Payment <span><i className="fas fa-money-bill-wave"></i></span>
                            <div className="number">3</div>
                        </button>
                    </div>
                </nav>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-Account" role="tabpanel" aria-labelledby="nav-Account-tab">
                        {/* <!-- Account Step 1 --> */}
                        <div className="account-step">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Login" type="button" role="tab" aria-controls="Login" aria-selected="true">Login</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Register" type="button" role="tab" aria-controls="Register" aria-selected="false">Register</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Guest" type="button" role="tab" aria-controls="Guest" aria-selected="false">Guest</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="Login" role="tabpanel" aria-labelledby="Login-tab">
                                    <div className="form-account row">
                                        <div className="col-sm-12">
                                            <h5>Login with your email</h5>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="E-Mail"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Password"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <span className="border-span"></span>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="links">
                                                <a href="#">Forgotten Password</a>
                                                <a href="#">Create an Account</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="Register" role="tabpanel" aria-labelledby="Register-tab">
                                    <div className="form-account row">
                                        <div className="col-sm-12">
                                            <h5>Create an Account</h5>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Full Name *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="E-Mail *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Telephone *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Password *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3 input-icon">
                                                        <input type="text" className="form-control" placeholder="Password Confirm *"/>

                                                        <span className="icon"><i className="fas fa-key"></i></span>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                I wish to subscribe to the Alahlia newsletter.
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                                I have read and agree to the <a href="#">Privacy Policy</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="text-center alraedy">
                                                <a href="#">Alraedy have an account?</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="">
                                                <button type="submit">Login</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade" id="Guest" role="tabpanel" aria-labelledby="Guest-tab">

                                    <div className="form-account row">
                                        <div className="col-sm-12">
                                            <h5>Checkout as Guest</h5>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Full Name *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="E-Mail *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <input type="text" className="form-control" placeholder="Telephone *"/>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-3">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="text-center alraedy">
                                                <a href="#">Alraedy have an account?</a>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="">
                                                <button type="submit">Login</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- /. Account Step 1 --> */}
                    </div>
                    {/* <!-- /. Tab Main --> */}

                    <div className="tab-pane fade" id="nav-Address" role="tabpanel" aria-labelledby="nav-Address-tab">
                        {/* <!-- Address Step 1 --> */}
                        <div className="address-step">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="left-side">
                                        <div className="top">
                                            <p><span><i className="fas fa-check-square"></i></span>My delivery and billing address are the same.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="payment-card">
                                                    <div className="header">
                                                        <div className="d-flex align-items-cnter">
                                                            <h5><span><i className="fas fa-money-bill-wave"></i></span> Payment & Shipping Address</h5>
                                                        </div>

                                                        <div className="d-flex align-items-cnter">
                                                            <h4>
                                                                <span><i className="fas fa-plus"></i></span>
                                                                Add
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    <div className="payment-body">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault" defaultChecked/>
                                                            <label className="form-check-label" htmlFor="flexRadioDefault">
                                                                Jasem skilld, Lancashire, United Kingdom
                                                            </label>
                                                        </div>
                                                        {/* <!-- Form --> */}

                                                        <div className="bottom">
                                                            <span>Defult Address</span>

                                                            <a href="#">Edit Address</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-md-6">
                                                <div className="delivery-card">
                                                    <div className="header">
                                                        <h5>
                                                            <span><i className="fas fa-truck-moving"></i></span>
                                                            Delivery Options
                                                        </h5>
                                                    </div>

                                                    <div className="delivery-body">
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault4" defaultChecked/>
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                                        Flat Shipping Rate
                                                                    </label>
                                                                </div>

                                                                <span className="price">20 AED</span>
                                                            </li>

                                                            <li>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault3"/>
                                                                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                                        Knowband Store Picking
                                                                    </label>
                                                                </div>

                                                                <span className="price">0 AED</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="terms">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            I have read and agree the <a href="#">Terms & Conditions</a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Col 6 --> */}

                                            <div className="col-md-6">
                                                <div className="order-card">
                                                    <div className="header">
                                                        <h5>
                                                            <span><i className="fas fa-comment"></i></span>
                                                            Order Comment
                                                        </h5>
                                                    </div>

                                                    <div className="order-body">
                                                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your comment..."></textarea>
                                                    </div>
                                                </div>

                                                <button className="card-pay">Continue to payment <span><i className="fas fa-lock"></i></span></button>
                                            </div>
                                            {/* <!-- Col 6 --> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Col --> */}

                                <div className="col-lg-3">
                                    <div className="right-side">
                                        <div className="top-side">
                                            <div className="header" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <div>
                                                    <h5>
                                                        <span><i className="fas fa-shopping-cart"></i></span>
                                                        Cart - 1 items(s)
                                                    </h5>
                                                </div>

                                                <div>
                                                    <span><i className="fas fa-minus"></i></span>
                                                </div>
                                            </div>
                                            {/* <!-- Header --> */}

                                            <div className="collapse show" id="collapseExample">
                                                <div className="card card-body">
                                                    <div className="item">
                                                        <div className="item-content">
                                                            <div className="image">
                                                                {/* <img src="assets/images/Products/pro1.jpg" alt=""> */}
                                                            </div>

                                                            <div className="details">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis blanditiis iste aut eum exercitationem ipsam nobis sapiente, repreh enderit ipsa modi distinctio molestias, aliquam quo accusantium!</p>
                                                                <div className="price">
                                                                    <span>1 x 59 AED</span>
                                                                    <span>59 AED</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="icons-item">
                                                            <div className="numbers">
                                                                <span className="minus"><i className="fas fa-minus"></i></span>
                                                                <div className="number">1</div>
                                                                <span className="plus"><i className="fas fa-plus"></i></span>
                                                            </div>

                                                            <div className="trash"><i className="fas fa-trash"></i></div>
                                                            <div className="heart"><i className="fas fa-heart"></i></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /. Top Side --> */}


                                        <div className="top-side">
                                            <div className="header" data-bs-toggle="collapse" data-bs-target="#collapseoption" aria-expanded="false" aria-controls="collapseoption">
                                                <div>
                                                    <h5>
                                                        <span><i className="fas fa-tags"></i></span>
                                                        Options
                                                    </h5>
                                                </div>

                                                <div>
                                                    <span><i className="fas fa-minus"></i></span>
                                                </div>
                                            </div>
                                            {/* <!-- Header --> */}

                                            <div className="collapse show" id="collapseoption">
                                                <div className="card card-body">
                                                    <div className="option">
                                                        <h4>Use Coupon <span><i className="fas fa-cut"></i></span></h4>
                                                        <div className="check">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                    </div>
                                                    <div className="option">
                                                        <h4>Use Voucher <span><i className="fas fa-tag"></i></span></h4>
                                                        <div className="check">
                                                            <i className="fas fa-check"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /. Top Side --> */}


                                        <div className="top-side">
                                            <div className="header" data-bs-toggle="collapse" data-bs-target="#collapsetotal" aria-expanded="false" aria-controls="collapsetotal">
                                                <div>
                                                    <h5>
                                                        <span><i className="fas fa-tags"></i></span>
                                                        Total - 79 AED
                                                    </h5>
                                                </div>

                                                <div>
                                                    <span><i className="fas fa-minus"></i></span>
                                                </div>
                                            </div>
                                            {/* <!-- Header --> */}

                                            <div className="collapse show" id="collapsetotal">
                                                <div className="card card-body">
                                                    <ul className="list-unstyled total">
                                                        <li>Sub-Total: <span>59 AED</span></li>
                                                        <li>Flat Shipping Rate: <span>20 AED</span></li>
                                                        <li>Total: <span>79 AED</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /. Top Side --> */}


                                    </div>
                                </div>
                                {/* <!-- Col --> */}
                            </div>
                            {/* <!-- Row --> */}
                        </div>
                        {/* <!-- /. Address Step 1 --> */}
                    </div>
                    {/* <!-- /. Tab Main --> */}

                    <div className="tab-pane fade" id="nav-Payment" role="tabpanel" aria-labelledby="nav-Payment-tab">
                        {/* <!--  Payment Step 1 --> */}
                        <div className="address-step">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="left-side">
                                        <div className="payment-option">
                                            <span>Payment options</span>
                                            <span>You pay: 79 AED</span>
                                        </div>

                                        <div className="card-payment">
                                            <div className="header">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Cash on Delivery
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="body-pay text-center">
                                                <button type="submit">Confirm Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Col --> */}

                                <div className="col-lg-3">
                                    <div className="right-side">
                                        <div className="top-side">
                                            <div className="header" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <div>
                                                    <h5>
                                                        <span><i className="fas fa-shopping-cart"></i></span>
                                                        Cart - 1 items(s)
                                                    </h5>
                                                </div>

                                                <div>
                                                    <span><i className="fas fa-minus"></i></span>
                                                </div>
                                            </div>
                                            {/* <!-- Header --> */}

                                            <div className="collapse show" id="collapseExample">
                                                <div className="card card-body">
                                                    <div className="item">
                                                        <div className="item-content">
                                                            <div className="image">
                                                                {/* <img src="assets/images/Products/pro1.jpg" alt=""> */}
                                                            </div>

                                                            <div className="details">
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis blanditiis iste aut eum exercitationem ipsam nobis sapiente, repreh enderit ipsa modi distinctio molestias, aliquam quo accusantium!</p>
                                                                <div className="price">
                                                                    <span>1 x 59 AED</span>
                                                                    <span>59 AED</span>
                                                                </div>

                                                                <div>
                                                                    <a href="#">Edit</a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /. Top Side --> */}


                                        <div className="top-side">
                                            <div className="header" data-bs-toggle="collapse" data-bs-target="#collapsetotal" aria-expanded="false" aria-controls="collapsetotal">
                                                <div>
                                                    <h5>
                                                        <span><i className="fas fa-tags"></i></span>
                                                        Total - 79 AED
                                                    </h5>
                                                </div>

                                                <div>
                                                    <span><i className="fas fa-minus"></i></span>
                                                </div>
                                            </div>
                                            {/* <!-- Header --> */}

                                            <div className="collapse show" id="collapsetotal">
                                                <div className="card card-body">
                                                    <ul className="list-unstyled total">
                                                        <li>Sub-Total: <span>59 AED</span></li>
                                                        <li>Flat Shipping Rate: <span>20 AED</span></li>
                                                        <li>Total: <span>79 AED</span></li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- /. Top Side --> */}

                                        <div className="top-side">
                                            <div className="header" data-bs-toggle="collapse" data-bs-target="#collapseshipping" aria-expanded="false" aria-controls="collapseshipping">
                                                <div>
                                                    <h5>
                                                        <span><i className="fas fa-home"></i></span>
                                                        Shipping Address
                                                    </h5>
                                                </div>

                                                <div>
                                                    <span><i className="fas fa-minus"></i></span>
                                                </div>
                                            </div>
                                            {/* <!-- Header --> */}

                                            <div className="collapse show" id="collapseshipping">
                                                <div className="card card-body">
                                                    <ul className="list-unstyled ship-list">
                                                        <li>Jasem Skilled</li>
                                                        <li>1234545</li>
                                                        <li>Lanshire, United kingdom</li>
                                                        <li className="bold">Flat Shipping Rate <span>20 AED</span></li>
                                                        <li><a href="#">Change Address</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- /. Top Side --> */}
                                        </div>
                                    </div>
                                    {/* <!-- Col --> */}
                                </div>
                                {/* <!-- Row --> */}
                            </div>
                        </div>
                        {/* <!-- /. Payment Step 1 --> */}
                    </div>
                    {/* <!-- /. Tab Main --> */}
                </div>
            </div>
            {/* <!-- /. Last Column --> */}

        </div>
    </div>
</div>
)
}

export default CheckOut