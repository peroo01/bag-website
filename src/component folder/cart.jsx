import QtyBtn from "./qtybutton"
export default function Cart({cartItems,func,close,open,deleteFunc}) {
    let subtotal = 0;
    let discount = 0;
    let total = 0;
    const deliveryFee = 30;
    const discountPercentage = 15;
    
    cartItems.forEach( ({qty,price}) => {
        subtotal += qty * price
        discount = ( discountPercentage * subtotal ) / 100  
        total = subtotal - discount + deliveryFee
    })

    const cartItemDisplay = cartItems.map( (item,index) => (
        <div key={index}>
            <div className="cart-item">
                <i className="bx bx-trash delete" data-id={item.id} onClick={deleteFunc} />
                <div className="cartimgcon">
                    <img src={item.src} alt="product-img" />
                </div>
                <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Size:<span>{item.size}</span></p>
                    <p>Color:<span>{item.color}</span></p>
                    <div className="cart-price">
                        <h5>${item.price}</h5>
                        <QtyBtn func={func} qty={item.qty} id={item.id} open={open} />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    ))
    
    return (
        <section className="cart-menu">
            <div className="cart">
                <i className="bx bx-x close-btn" onClick={close}/>
                <h2> Your Cart</h2>
                <div className="cart-details">
                    <div className="cart-list">{cartItemDisplay}</div>
                    <div className="payment-section">
                        <h4>Order Summary</h4>
                        <div><p>Subtotal</p><span>${subtotal}</span></div>
                        <div><p>Discount</p><span className="red">-${discount}</span></div>
                        <div><p>Delivery Fee</p><span>${deliveryFee}</span></div>
                        <hr />
                        <div className="total"><p id="black">Total</p><span>${total}</span></div>
                        <div className="promo-code" >
                            <input type="text" placeholder="Add promo code" />
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}