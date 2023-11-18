import React, {useState} from "react"
import Signin from "./Signin"
import Signup from "./Signup"
import "../tp.css";

const Nav_bar = ({ item2 }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlaySignup, setShowOverlaySignup] = useState(false);

    function go_to_index(){
        document.location = "/";
    }

    function booking_btn(){
        // let item2 = document.getElementById("item2");
        // if(item2.style.display === "block"){
             // show_login_area();
        // }
        // else{window.location = "/booking"}
    }

    function logout(){
        // let req=new XMLHttpRequest();
        // req.open("DELETE","/api/user")
        // req.onload=function(){
        //     window.location="/";
        // }
        // req.send();
    }


    return (
        <div className="empty_fixed_bar">
            <div className="nav_bar">
                <div className="taipei_oneday_tourist" onClick={go_to_index}>台北一日遊</div>
                <span className="item1" id="item1" onClick={booking_btn}>預定行程</span>
                {item2?
                <span className="item2" id="item2">
                    <span onClick={() => setShowOverlay(true)}>登入</span>/<span onClick={() => setShowOverlaySignup(true)}>註冊</span>
                </span>
                :null}
                <span className="logout" id="logout" onClick={logout}>登出系統</span>
            </div>
            {showOverlay?<Signin showOverlay = {showOverlay} setShowOverlay = {setShowOverlay} showOverlaySignup = {showOverlaySignup} setShowOverlaySignup = {setShowOverlaySignup}/>:null}
            {showOverlaySignup?<Signup showOverlay = {showOverlay} setShowOverlay = {setShowOverlay} showOverlaySignup = {showOverlaySignup} setShowOverlaySignup = {setShowOverlaySignup}/>:null}
        </div>
    )
}

export default Nav_bar
