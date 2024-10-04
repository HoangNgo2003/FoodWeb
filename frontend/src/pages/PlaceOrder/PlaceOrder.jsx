import React, {useContext} from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";


const PlaceOrder = () => {
  
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div>
      <form className="place-oder">
        <div className="place-oder-left">
          <p className="tittle">Thông tin / địa chỉ giao hàng</p>
          <div className="multi-fields">
            <input type="text" placeholder="Tên" />
            <input type="text" placeholder="Tên đệm" />
          </div>
          <input type="email" placeholder="Địa chỉ Email" />
          <input type="text" placeholder="Tên Đường" />
          <div className="multi-fields">
            <input type="text" placeholder="Thành Phố" />
            <input type="text" placeholder="Quận" />
          </div>
          {/* <div className="multi-fields">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Quốc Gia" />
          </div> */}
          <input type="text" placeholder="Số điện thoại"/>
        </div>
        <div className="place-oder-right">
        <div className="cart-total">
          <h2>Tổng số tiền</h2>
          <div>
            <div className="cart-total-details">
              <p>Tổng tiền</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí Giao Hàng</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Thành tiền</b>
              <b>${(getTotalCartAmount()===0?0:getTotalCartAmount()+2)}</b>
            </div>
          </div>
          <button>THANH TOÁN</button>
        </div>
        </div>
      </form>
    </div> 
  );
};

export default PlaceOrder;
