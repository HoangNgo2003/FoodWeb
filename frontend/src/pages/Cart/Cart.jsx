import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Sản phẩm</p>
          <p>Tên</p>
          <p>Đơn giá</p>
          <p>Số lượng</p>
          <p>Thành tiền</p>
          <p>Xóa</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price.toLocaleString("vi-VN")}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id])}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null; // Ensure a return statement
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate('/oder')}>TIẾP TỤC ĐẾN THANH TOÁN</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã khuyến mãi, hãy nhập tại đây</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Mã khuyến mãi" />
              <button>Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
