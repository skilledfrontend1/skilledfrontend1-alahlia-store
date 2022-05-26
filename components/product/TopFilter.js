const TopFilter = () =>{
     return (
        <div className="filter">
        <span>Filter</span>

        <div className="d-flex align-items-center" >
            <div>
                <div className="select">
                    <i className="fas fa-chevron-down"></i>
                    <select name="" id="">
                        <option value="" defaultChecked>Type</option>
                        <option value="">Defult</option>
                        <option value="">Featured</option>
                        <option value="">New</option>
                    </select>
                </div>

                <div className="select">
                    <i className="fas fa-chevron-down"></i>
                    <select name="" id="">
                        <option value="" defaultChecked>Serving</option>
                        <option value="">Defult</option>
                        <option value="">Featured</option>
                        <option value="">New</option>
                    </select>
                </div>

                <div className="select">
                    <i className="fas fa-chevron-down"></i>
                    <select name="" id="">
                        <option value="" >Color Family</option>
                        <option value="">Black</option>
                        <option value="">Red</option>
                        <option value="">Yellow</option>
                    </select>
                </div>

                <div className="select">
                    <i className="fas fa-chevron-down"></i>
                    <select name="" id="">
                        <option value="" >Price</option>
                        <option value="">300</option>
                        <option value="">700</option>
                        <option value="">400</option>
                    </select>
                </div>

            </div>


            <div>
                <div className="select">
                    <i className="fas fa-chevron-down"></i>
                    <select name="" id="">
                        <option value="" >Sort By</option>
                        <option value="">Defult</option>
                        <option value="">Featured</option>
                        <option value="">New</option>
                    </select>
                </div>
            </div>
        </div>
    </div>


     )
}

export default TopFilter 