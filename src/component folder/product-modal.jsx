import QtyBtn from "./qtybutton"
export default function Modal({currentProduct,close,qty,crement,addToCart}) {
    return (
        <section className="modal-con">
            <form className="modal" id={currentProduct.id} onSubmit={addToCart} >
                <i className="bx bx-x close-btn" onClick={close}/>
                <div className="modalimgcon">
                    <img src={currentProduct.src} alt="image" />
                </div>
                <div className="productinfo">
                    <h5>{currentProduct.name}</h5>
                    <div className="colors">
                        <div></div>
                    </div>
                    <div className="priceRange">
                        <p>{currentProduct.price}</p>
                        <div className="actionbtns">
                            <i className="bx bx-archive-arrow-up modalicon" />
                            <i className="bx bx-heart modalicon" />
                        </div>
                    </div>
                    <div className="options">
                        <div className="variations">
                            <select className="dd" name="size" id="size">
                                <option value="size">Size</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                            </select>
                            <select className="dd" name="colorsdd" id="colorsdd">
                                <option value="color">Color</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                                <option value="red">Red</option>
                            </select>
                        </div>
                        <div className="description">
                            <p>{currentProduct.description}</p>
                        </div>
                        <div className="qty">
                            <p>Quantity</p>
                            <QtyBtn
                                crement={crement}
                                qty={qty}
                            />
                            <button className="cart-btn-add">Add to cart</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}