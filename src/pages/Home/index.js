import { useState,useEffect } from "react";
import Nav_bar from '../../components/Nav_bar';
import Second_bar from '../../pages/Home/components/Second_bar';
import Third_bar from '../../pages/Home/components/Third_bar';
import Calendar from "./components/Calendar";
import Footer from '../../components/Footer';

const Home = () => {
  const [ allSpots, setAllSpots ] = useState([
    {
      "images":"",
      "name" : "Jerry",
      "mrt" : "15000",
      "category" : "單&雙"
    }
  ]); 

  

  const [ nextPage, setNextPage ] = useState();

  const [ item2, setItem2 ] = useState(true);

  // 給第二層用
  const [ keywordBTN,setKeywordBTN ] = useState(false);

  const [ keyWord, setKeyWord ] = useState("");

  const [ nodata, setNodata ] = useState(false)

  // 給第三層用
  const [ thirdBar, setThirdBar ] = useState(false);

  const [ loading, setLoading ] = useState(true);

  // init
  async function fetchData(setAllSpots) {
    console.log("start first fetch")
    const res = await fetch("https://strategy-zone.com/api/attractions?page=0")
    const data = await res.json()
    // console.log(data.data)
    setAllSpots(data.data);
    setNextPage(data.nextPage)
    setThirdBar(true);
    setLoading(false); // 把 loading 功能開啟
    console.log("end first fetch")
  }

  // 沒有關鍵字，滑鼠滑到底部，fetch 下一頁資料
  async function fetchMoreData(setAllSpots) {
      setLoading(true);
      const res = await fetch("https://strategy-zone.com/api/attractions?page="+nextPage+"")
      const lastData = await res.json()
      // console.log(allSpots)
      // console.log(lastData.data)
      // console.log(allSpots.concat(lastData.data))
      setNextPage(lastData.nextPage)
      setAllSpots(allSpots.concat(lastData.data));
      setLoading(false)
  }

  // 沒有關鍵字，滑鼠滑到底部，fetch 下一頁資料
  async function fetchMoreKeywordData(setAllSpots) {
      console.log("before")
      setLoading(true);
      const res = await fetch("https://strategy-zone.com/api/attractions?page="+nextPage+"&keyword="+keyWord+"")
      const lastData = await res.json()
      // console.log(allSpots)
      // console.log(lastData.data)
      // console.log(allSpots.concat(lastData.data))
      setNextPage(lastData.nextPage)
      setAllSpots(allSpots.concat(lastData.data));
      setLoading(false)
      console.log("after")
  }

  useEffect (() => {
      fetchData(setAllSpots)
  }, [])

  window.onscroll = ()=>{
    let cHeight = document.documentElement.clientHeight; // 可視高度
    let sHeight = document.documentElement.scrollHeight; // 總高度
    let sTop = Math.floor(document.documentElement.scrollTop); // 捲進去的高度
    if(sHeight === cHeight + sTop) {
      console.log("end")
      console.log(loading,nextPage,keywordBTN)

      // 沒有keyword
      if(!loading&&nextPage!=null&&!keywordBTN){
        fetchMoreData(setAllSpots);
      }

      // 有 keyword，有下頁
      else if(!loading&&nextPage!=null&&keywordBTN){
        fetchMoreKeywordData(setAllSpots);
      }
    }
  }
  
  // useEffect(() => {
  //   let req=new XMLHttpRequest();
  //   req.open("get","https://strategy-zone.com/api/user");
  //   req.onload=function(){
  //     console.log(JSON.parse(this.responseText)["data"])
  //   };
  //   req.send();
  //   //=========================================
  //   // fetch("https://strategy-zone.com/api/user")
  //   // .then(res => res.json())
  //   // .then(data => console.log(data)
  //   //   // {if(data["data"] != null){setItem2(false)}}
  //   // )
  //   // let req=new XMLHttpRequest();
  //   // req.open("get","localhost:4000/api/user");
  //   // req.onload=function(){
  //   //     if(JSON.parse(this.responseText)["data"]!=null){
  //   //         console.log(JSON.parse(this.responseText)["data"])
  //   //         let item2=document.getElementById("item2");
  //   //         item2.style.display="none";
  //   //         let logout=document.getElementById("logout");
  //   //         logout.style.display="block";
  //   //     }
  //   //     else{
  //   //         console.log(this.responseText)
  //   //         let item2=document.getElementById("item2");
  //   //         item2.style.display="block";
  //   //         let logout=document.getElementById("logout");
  //   //         logout.style.display="none";
  //   //     }
  //   // };
  //   // req.send();
  //   // fetch("https://strategy-zone.com/api/user", {
  //   //   method: "DELETE"
  //   // })
  //   // .then(res => res.text())
  //   // .then(data => console.log(data)
  //   // )
  // }, [])
  

  return (
    <div>
      <Nav_bar item2 = {item2} />
      <Second_bar 
        setAllSpots={setAllSpots} setLoading={setLoading}
        keyWord={keyWord} setKeyWord={setKeyWord} 
        setKeywordBTN={setKeywordBTN} setNextPage={setNextPage} 
        setNodata={setNodata}
      />
      <Third_bar thirdBar={thirdBar} allSpots={allSpots} loading={loading} nodata={nodata}/>
      <Calendar />
      <Footer />
    </div>
  )
}

export default Home
