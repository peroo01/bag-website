export default function QtyBtn({crement,qty,id,open,func}) {

    return (                           
        <div className="crement" >
            <button id="less" data-id={id} className="btn" onClick={open ? func:crement}><i className="bx bx-minus" /></button>
            <span>{qty}</span>
            <button id="add" data-id={id} className="btn"onClick={open ? func:crement}><i className="bx bx-plus" /></button>
        </div>
    )
}   