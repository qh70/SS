import React, {useState, useEffect, useRef } from "react"
import icon_close from "../static/icon_close.png";
import { API_HOST } from "../global/constants";

const Signin = ({ showOverlay, setShowOverlay, showOverlaySignup, setShowOverlaySignup }) => {

  const [dataLogin, setDataLogin] = useState([]);

  const [emailLogin, setEmailLogin] = useState("test@gmail.com")
  function emailLoginChange(e){
    setEmailLogin(e.target.value)

  }
  const [passwordLogin, setPasswordLogin] = useState("test")
  function passwordLoginChange(e){
    setPasswordLogin(e.target.value)
  }

  function login(){
    submittingStatus.current = true;
    setDataLogin(emailLogin,passwordLogin);
    console.log("2")
  }

  const submittingStatus = useRef(false);


  // 按下登入帳戶(dataLogin變化)
  useEffect(() => {
    console.log("1")
    if (!submittingStatus.current){
      return
    }
    fetch("https://strategy-zone.com/api/user", {
      method: "PATCH",
      body: JSON.stringify({
        email_login: emailLogin,
        password_login: passwordLogin,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    // .then(function(data){
    //   if(data["ok"]===true){console.log("2")}
    // });
    .then(data => {if(data["ok"]===true){
      console.log(data["ok"]);
      setTimeout(() => {
        window.location="/"
      }, 2000);
    }});
    // .then(data => (data["ok"]===true)?window.location="/":console.log(123));
    
    submittingStatus.current = false;
  }, [dataLogin])

  return (
    showOverlay?
    <div className="overlay_login">
        <div className="login_block" id="login_block">
            <div className="login_top"></div>
            <div className="login_title_area">
                <div className="login_title">登入會員帳號</div>
                <img className="icon_close" src={icon_close} onClick={() => setShowOverlay(!showOverlay)} />
            </div>
            <input className="type_email" type="text" placeholder="輸入電子信箱" value={emailLogin} onChange={emailLoginChange} />
            <input className="type_password" type="text" placeholder="輸入密碼" value={passwordLogin} onChange={passwordLoginChange} />
            <button className="login_btn" onClick={login}>登入帳戶</button>
            <div className="not_yet_account" onClick={() => {setShowOverlay(!showOverlay);setShowOverlaySignup(!showOverlaySignup)}}>還沒有帳戶？點此註冊</div>
        </div>
    </div>
  :null
  )
}

export default Signin
