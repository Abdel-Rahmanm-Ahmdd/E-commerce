import './productDetails.css'
function ProductDetailsLoading() {
    return (
        <div className="loading">
            <div className="container">
                <div className="details-content">
                    <div className="images">
                        <div className="big-img">
                            <p className="big-img-loading skeleton"></p>
                        </div>
                        <div className="small-img">
                            <p className='sm-img-loading skeleton'></p>
                            <p className='sm-img-loading skeleton'></p>
                            <p className='sm-img-loading skeleton'></p>
                        </div>
                    </div>
                    <div className="info">
                        <h2 className='titleLoading skeleton'></h2>
                        <p className="price skeleton"></p>
                        <p className="stock skeleton"></p>
                        <p className="ele-loading skeleton"></p>
                        <p className="ele-loading skeleton"></p>
                        <p className="ele-loading skeleton"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsLoading;