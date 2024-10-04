import React, {useState} from 'react'
import './LoginPoup.css'
import { assets } from '../../assets/assets'


const LoginPoup = ({setShowLogin}) => {

  const[currState,setCurrState] = useState ("Đăng nhập")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="logion-popup-title">
          <h2>{currState}</h2>
          <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState ==="Đăng nhập"?<></>:<input type="text" placeholder='Tên đăng nhập' required></input>}
          <input type="email" placeholder='Email của bạn' required/>
          <input type="password" placeholder='Mật khẩu' required/>
        </div>
        <button>{currState==="Đăng kí"?"Tạo tài Khoản":"Đăng nhập"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư !</p>
        </div>
        {currState==="Đăng nhập"
        ?<p>Tạo tài khoản mới ? <span onClick={()=>setCurrState("Đăng kí")}> Đăng ký</span></p>
        :<p>Bạn đã có tài khoản ? <span onClick={()=>setCurrState("Đăng nhập")}>Đăng nhập</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPoup
