import "../../../tp.css";

const Second_bar = ({ setAllSpots, setLoading, keyWord, setKeyWord, setKeywordBTN, setNextPage, setNodata }) => {
    
    function keywordChange(e) {
        setKeyWord(e.target.value);
      }

    async function fetchKeywordData(setAllSpots, setNextPage, setNodata) {
        const res = await fetch("https://strategy-zone.com/api/attractions?page=0&keyword="+keyWord+"")
        const keywordData = await res.json();
        if(keywordData.message==="沒有此關鍵字的資料"){
            setNodata(true);
            setAllSpots(false);
            setLoading(false);
        }
        else{
            setNodata(false);
            setAllSpots(keywordData.data);
            setNextPage(keywordData.nextPage);
            setLoading(false);
        }
    }

    function btn(){
        setKeywordBTN(true);
        setAllSpots([]);
        setLoading(true);
        fetchKeywordData(setAllSpots, setNextPage, setNodata);
        // let req=new XMLHttpRequest();
        // req.open("get","/api/attractions?page=0&keyword="+search_tourist_name_value+"")
        // req.onload=function(){
        //     attractions_data=JSON.parse(this.responseText)
        //     if(attractions_data["message"]=="沒有此關鍵字的資料"){
        //         newdiv.innerHTML="沒有此關鍵字的資料"
        //     }
        //     else{
        //         for(let j=0;j<12;j++){
        //             if(attractions_data["data"][j]!=undefined){
        //                 let div1=document.createElement("a");
        //                 div1.className="picline1";
        //                 div1.href="/attraction/"+attractions_data["data"][j]["id"];
        //                 newdiv.appendChild(div1);
        //                 //img
        //                 let image=document.createElement("img");
        //                 image.className="first4pics";
        //                 image.src=attractions_data["data"][j]["images"][0];
        //                 div1.appendChild(image);
        //                 // up_word
        //                 let up_word=document.createElement("div");
        //                 up_word.className="up_word";
        //                 up_word.innerHTML=attractions_data["data"][j]["name"]
        //                 div1.appendChild(up_word);

        //                 // down_word_zone
        //                 let down_word_zone=document.createElement("div");
        //                 down_word_zone.className="down_word_zone"
        //                 div1.appendChild(down_word_zone)
        //                 // down_word_left
        //                 let down_word_left=document.createElement("div");
        //                 down_word_left.className="down_word_left";
        //                 down_word_left.innerHTML=attractions_data["data"][j]["mrt"];
        //                 down_word_zone.appendChild(down_word_left);
        //                 // down_word_right
        //                 let down_word_right=document.createElement("div");
        //                 down_word_right.className="down_word_right";
        //                 down_word_right.innerHTML=attractions_data["data"][j]["category"];
        //                 down_word_zone.appendChild(down_word_right);
        //             }
        //         }
        //     }
        //     btn_function="yes";
        //     keyword_nextPage=attractions_data["nextPage"];
        // }
        // req.send();  
    }

    return (
        <div className="second_bar_background">
            <div className="three_items_in_one_div">
                <div className="easy_enjoy">輕鬆享受台北一日悠閒</div>
                <div className="explore_every_corner">探索每個角落，體驗城市的深度旅遊行程</div>
                <div className="insert_and_btn">
                    <input className="search_tourist_name" placeholder="輸入景點名稱查詢" value={keyWord} onChange={keywordChange}>
                    </input>
                    <button className="btn" onClick={btn}>
                        <img src={require("../../../static/icon_search.png")} style={{ cursor: "pointer" }}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Second_bar
