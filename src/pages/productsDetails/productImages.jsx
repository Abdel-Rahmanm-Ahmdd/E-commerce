function ProductImages({product}) {
    return (
        <>
            <div className="images">
                <div className="big-img">
                <img id="bigger-img" src={product.images[0]} alt="" />
                </div>
                <div className="small-img">
                {product.images.map((img, index) => {
                    return (
                    <img
                        src={img}
                        key={index}
                        onClick={() =>
                        (document.getElementById("bigger-img").src = img)
                        }
                    />
                    );
                })}
                </div>
            </div>
        </>
    );
}

export default ProductImages;
