import React, {useState} from "react"
import icon_close from "../static/icon_close.png";
import "../tp.css";


const Signup = ({ showOverlay, setShowOverlay, showOverlaySignup, setShowOverlaySignup }) => {
    function signup(){

    }
    function login_after_popup(){

    }
  return (
    showOverlaySignup?
    <div className="overlay_signup" id="overlay_signup">
        <div className="signup_block" id="signup_block">
            <div className="signup_top"></div>
            <div className="signup_title_area">
                <div className="signup_title">註冊會員帳號</div>
                <img className="icon_close" src={icon_close} onClick={() => setShowOverlaySignup(!showOverlaySignup)} />
            </div>
            <input className="signup_type_name" type="text" id="name_signup" placeholder="輸入姓名" />
            <div id="name_signup_error_message">錯誤訊息</div>
            <input className="signup_type_email" type="email" id="email_signup" placeholder="輸入電子信箱" />
            <div id="email_signup_error_message">錯誤訊息</div>
            <input className="signup_type_password" type="password" id="password_signup" placeholder="輸入密碼" />
            <div id="password_signup_error_message">錯誤訊息</div>
            <div className="signup_btn" onClick={signup}>註冊新帳戶</div>
            <div id="signup_failed">Email 已經註冊帳戶</div>
            <div id="signup_succeed">註冊成功</div>
            <div className="yet_account" onClick={() => {setShowOverlay(!showOverlay);setShowOverlaySignup(!showOverlaySignup)}}>已經有帳戶了？點此登入</div>
        </div>
    </div>
    :null
  )
}

export default Signup
