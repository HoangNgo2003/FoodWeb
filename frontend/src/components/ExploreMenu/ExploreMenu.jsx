import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Khám phá thực đơn của chúng tôi</h1>
      <p className="explore-menu-text">
        Chào mừng đến với nhà hàng của chúng tôi! Chúng tôi cung cấp nhiều món
        ăn đa dạng được chế biến từ các nguyên liệu tươi ngon, địa phương. Hãy
        khám phá những món ăn ngon miệng của chúng tôi bên dưới.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>setCategory((prev) =>prev === item.menu_name ? "All" : item.menu_name)}key={index} className="explore-menu-list-item">
              <img
                className={category === item.menu_name ? "active" : ""}src={item.menu_image}alt=""/>
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
