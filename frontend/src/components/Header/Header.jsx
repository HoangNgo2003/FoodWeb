import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Đặt món yêu thích của bạn tại đây</h2>
        <p>
          Bạn đang thèm món ăn ngon? Khám phá những món yêu thích, từ món cổ
          điển đến quốc tế. Duyệt thực đơn, tùy chỉnh đơn hàng, và thưởng thức
          trải nghiệm ẩm thực thỏa mãn cơn thèm. Bữa ăn yêu thích của bạn chỉ
          cách một cú nhấp.
        </p>
        <button>Xem Menu</button>
      </div>
    </div>
  );
};

export default Header;
