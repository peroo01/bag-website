import img1 from "../assets/homepg.jpg"
export default function HomepageBody() {
    return (
        <>
            <section className="grid-container">
                <div className="item-1 box">
                    <h1>Get ready for year end buisness travel</h1>
                    <p>prepare for year end buisness travel with ease. Maximize productivity,streamline plans, and enjoy stress-free journeys.</p>
                    <button>Shop Now</button>
                </div>
                <div className="item-2 box ">
                    <img src={img1} alt="" />
                </div>
                <div className="item-3 twin box">
                    <i className="bx bx-truck" />
                    <h2>Free shipping</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rerum!</p>
                </div>
                <div className="item-4 twin box">
                    <i className="bx bx-user-hexagon" />
                    <h2>Secure checkout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rerum!</p>
                </div>
            </section>
        </>
    )
}