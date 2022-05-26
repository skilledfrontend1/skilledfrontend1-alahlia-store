const Footer =()=>{
    return(
        <footer className="main-footer">
        <div className="top-titles">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <div>
                            <h5 className="title">Al Ahlia Product</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <h5 className="title">Blend Machine & juicers</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <h5 className="title">Ice Machines</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <h5 className="title">Equipment</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <h5 className="title">New Products</h5>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div>
                            <h5 className="title">Featured Products</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="content-list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <div>
                            <h5 className="title-mobile">Al Ahlia Product</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Bar Cooler</a></li>
                            <li><a href="#">Cake Display</a></li>
                            <li><a href="#">Coffee Machines</a></li>
                            <li><a href="#">Cooking Range & Hot Line</a></li>
                            <li><a href="#">Crepe</a></li>
                            <li><a href="#">Dishwashers</a></li>
                            <li><a href="#">Divider & Mixer</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <div>
                            <h5 className="title-mobile">Blend Machine & juicers</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Blender Equipment</a></li>
                            <li><a href="#">Hamilton</a></li>
                            <li><a href="#">Orange Juicer</a></li>
                            <li><a href="#">Santos Juicer</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-4 d-none-mobile">
                        <div>
                            <h5 className="title-mobile">Ice Machines</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Ice Cream Machines</a></li>
                            <li><a href="#">Ice Making Machines</a></li>
                            <li><a href="#">Ice Cube</a></li>
                            <li><a href="#">Ice Flakes</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-4 d-none-mobile">
                        <div>
                            <h5 className="title-mobile">Equipment</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Kitchen Equipment</a></li>
                            <li><a href="#">Kitchen Hood</a></li>
                            <li><a href="#">Laundry Equipment</a></li>
                            <li><a href="#">Machine Equipment</a></li>
                            <li><a href="#">Popcorn Machines</a></li>
                            <li><a href="#">Waffle Machine</a></li>
                            <li><a href="#">Slush machines</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-4 d-none-mobile">
                        <div>
                            <h5 className="title-mobile">New Products</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Coffee Grinder-Doser</a></li>
                            <li><a href="#">Water softener</a></li>
                            <li><a href="#">Burano B033DV6</a></li>
                            <li><a href="#">Juice triple Dispenser</a></li>
                            <li><a href="#">Ice Cream Machine</a></li>
                            <li><a href="#">Soft ice cream machine</a></li>
                            <li><a href="#">Ice Cream Table Top</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 col-sm-4 d-none-mobile">
                        <div>
                            <h5 className="title-mobile">Featured Products</h5>
                        </div>
                        <ul className="list-unstyled">
                            <li><a href="#">Ice Cream Table Top</a></li>
                            <li><a href="#">Soft ice cream machine</a></li>
                            <li><a href="#">Coffee Grinder-Doser</a></li>
                            <li><a href="#">Water softene</a></li>
                            <li><a href="#">Burano B033DV6</a></li>
                            <li><a href="#">Juice triple Dispenser</a></li>
                            <li><a href="#">Ice Cream Machine</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div className="copy-right-area">
            <div className="container-fluid">
                <div className="content">
                    <div className="d-flex align-items-center">
                        <div>
                            <p>&copy; Alahlia Store. All Rights Reserved</p>
                        </div>

                        <div>
                            {/* <img src="assets/images/Icons/copy.png" alt=""> */}
                        </div>
                    </div>

                    <ul className="list-unstyled">
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Warranty Policy</a></li>
                        <li><a href="#">Sell with us</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Consumer Rights</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer