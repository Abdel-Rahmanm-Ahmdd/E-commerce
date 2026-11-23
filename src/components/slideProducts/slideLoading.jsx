import './slideProduct.css'
function SlideLoading() {
    return (
        <div className="loading">
            <div className="container">
                <div className="top-slide">
                    <h2 className="skeleton"></h2>
                    <p className="skeleton"></p>
                </div>
                <div className="products-loading">
                    <div className="product">
                        <div className="img-loading skeleton"></div>
                        <div className="content skeleton"></div>
                        <div className="content skeleton"></div>
                    </div>
                    <div className="product">
                        <div className="img-loading skeleton"></div>
                        <div className="content skeleton"></div>
                        <div className="content skeleton"></div>
                    </div>
                    <div className="product">
                        <div className="img-loading skeleton"></div>
                        <div className="content skeleton"></div>
                        <div className="content skeleton"></div>
                    </div>
                    <div className="product four">
                        <div className="img-loading skeleton"></div>
                        <div className="content skeleton"></div>
                        <div className="content skeleton"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideLoading;