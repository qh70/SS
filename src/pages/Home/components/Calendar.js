import { useEffect } from 'react';
import moment from 'moment';
var excludeDates=['2019-01-17','2019-01-22'];
function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        let currentDateString=moment(currentDate).format('YYYY-MM-DD');
        if(!excludeDates.includes(currentDateString)){
            dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        }
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}
var dates=getDates(new Date('2023-12-01'),new Date('2023-12-31'));

const trydates = [
    {
        "12" : {
            "1" : "E",
            "2" : "U",
            "3" : "D",
            "4" : "F",
            "5" : "E",
            "6" : "U",
            "7" : "D",
            "8" : "F",
            "9" : "E"
            },
        "1" : {
            "1" : "E"
        },
        "2" : {
            "1" : "E"
        },
        "3" : {
            "1" : "E"
        }
    }
]




const Calendar = () => {

    useEffect(()=>{
        fetch("http://localhost:3000/Jerry/")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        }).catch(err=>{console.error(err)})
    }, [])

    //

    const today = new Date()
    // const whatday = today.getDay()
    const month = today.getMonth()
    const year = today.getFullYear()
    const monthNames = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    let divCollectionOfDay = []
    for (let i = 0 ; i < 7 ;i ++){
        // let day = <div className="greyNotTodaysDay">{dayNames[i]}</div>
        // if (i === whatday){
        //     day = <div className="blackTodaysDay">{dayNames[i]}</div>
        // }
        let day = <div className="blackTodaysDay">{dayNames[i]}</div>
        divCollectionOfDay = [...divCollectionOfDay, day]
    }

    // 設定閏月的規則
    const isLeapYear = (year) => {
        return (year % 4 ===0 && year % 100 !== 0 && year % 400 !==0) || (year % 100 === 0 && year % 400 ===0)
    }

    //抓閏月

    const getFebDays = (year) => {
        return isLeapYear(year) ? 29 :28
    }

    // 抓 calendar css   
    
    // 產生年月
    const daysOfMonth = [31, getFebDays(2024), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // const generateCalendar = (month, year) => {
    //     let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // }

    // 抓現在的日期
    // const firstDay = new Date(year, month, 1)

    // daysOfMonth[i] 某月有幾天
    // firstDay.getDay() 這個月第一天是禮拜幾
    
    // 十二月
    let divCollecttionOfThisMonth12 = []
    const firstDayOf12 = new Date(2023, 11, 1).getDay() // 12月的第一天是禮拜幾
    for (let i=0; i < daysOfMonth[11] + firstDayOf12; i++){
        // console.log(trydates[0]["12"][6])
        let newday = <div></div>
        if (i >= firstDayOf12) { // 顯示這個月所有日期
            newday = 
                <div className="calendarDayBlock">
                    {trydates[0]["12"][i-firstDayOf12+1] === "E" ? <div className="calendayDay">{i - firstDayOf12+1}</div>
                    :trydates[0]["12"][i-firstDayOf12+1] === "U" ? <div className="calendayDayYellow">{i - firstDayOf12+1}</div>
                    :trydates[0]["12"][i-firstDayOf12+1] === "D" ? <div className="calendayDayWhite">{i - firstDayOf12+1}</div>
                    :trydates[0]["12"][i-firstDayOf12+1] === "F" || trydates[0]["1"][i-firstDayOf12+1] === undefined ? <div className="calendayDayRed">{i - firstDayOf12+1}</div>
                    :null
                    }
                </div>
        }
        divCollecttionOfThisMonth12 = [...divCollecttionOfThisMonth12, newday]
    }

    // 一月
    let divCollecttionOfThisMonth1 = []
    const firstDayOf1 = new Date(2024, 0, 1).getDay() // 1月的第一天是禮拜幾
    for (let i=0; i < daysOfMonth[0] + firstDayOf1; i++){
        let newday = <div></div>
        if (i >= firstDayOf1) { // 顯示這個月所有日期
            newday = 
                <div className="calendarDayBlock">
                    {trydates[0]["1"][i-firstDayOf1+1] === "E" ? <div className="calendayDay">{i - firstDayOf1+1}</div>
                    :trydates[0]["1"][i-firstDayOf1+1] === "U" ? <div className="calendayDayYellow">{i - firstDayOf1+1}</div>
                    :trydates[0]["1"][i-firstDayOf1+1] === "D" ? <div className="calendayDayWhite">{i - firstDayOf1+1}</div>
                    :trydates[0]["1"][i-firstDayOf1+1] === "F" || trydates[0]["1"][i-firstDayOf1+1] === undefined ? <div className="calendayDayRed">{i - firstDayOf1+1}</div>
                    :null
                    }
                </div>  
        }
        divCollecttionOfThisMonth1 = [...divCollecttionOfThisMonth1, newday]
    }

    // 二月
    let divCollecttionOfThisMonth2 = []
    const firstDayOf2 = new Date(2024, 1, 1).getDay() // 2月的第一天是禮拜幾
    for (let i=0; i < daysOfMonth[1] + firstDayOf2; i++){
        let newday = <div></div>
        if (i >= firstDayOf2) { // 顯示這個月所有日期
            newday = 
                <div className="calendarDayBlock">
                    {trydates[0]["2"][i-firstDayOf2+1] === "E" ? <div className="calendayDay">{i - firstDayOf2+1}</div>
                    :trydates[0]["2"][i-firstDayOf2+1] === "U" ? <div className="calendayDayYellow">{i - firstDayOf2+1}</div>
                    :trydates[0]["2"][i-firstDayOf2+1] === "D" ? <div className="calendayDayWhite">{i - firstDayOf2+1}</div>
                    :trydates[0]["2"][i-firstDayOf2+1] === "F" || trydates[0]["2"][i-firstDayOf2+1] === undefined ? <div className="calendayDayRed">{i - firstDayOf2+1}</div>
                    :null
                    }
                </div>
        }
        divCollecttionOfThisMonth2 = [...divCollecttionOfThisMonth2, newday]
    }

     // 三月
     let divCollecttionOfThisMonth3 = []
     const firstDayOf3 = new Date(2024, 2, 1).getDay() // 2月的第一天是禮拜幾
     for (let i=0; i < daysOfMonth[2] + firstDayOf3; i++){
        let newday = <div></div>
        if (i >= firstDayOf3) { // 顯示這個月所有日期
        newday = 
            <div className="calendarDayBlock">
                {trydates[0]["3"][i-firstDayOf3+1] === "E" ? <div className="calendayDay">{i - firstDayOf3+1}</div>
                :trydates[0]["3"][i-firstDayOf3+1] === "U" ? <div className="calendayDayYellow">{i - firstDayOf3+1}</div>
                :trydates[0]["3"][i-firstDayOf3+1] === "D" ? <div className="calendayDayWhite">{i - firstDayOf3+1}</div>
                :trydates[0]["3"][i-firstDayOf3+1] === "F" || trydates[0]["3"][i-firstDayOf3+1] === undefined ? <div className="calendayDayRed">{i - firstDayOf3+1}</div>
                :null
                }
            </div>
        }
        divCollecttionOfThisMonth3 = [...divCollecttionOfThisMonth3, newday]
     }
    


  return (
    <div className="calendar">
        <div className="calendarMonthNyear">
            <div className="wordCalendar">Calendar</div>
            <div className="monthNyearPicker">
                <div className="monthNyear">12月2023</div>
                {/* <img className="downArrowInCalendarInBackendDashboard" src={require("../../../static/DownArrow.png")} />
                <img className="downArrowInCalendarInBackendDashboard" src={require("../../../static/UpArrow.png")} /> */}
            </div>
        </div>
        <div className="calendarBody">
            {/* 星期 */}
            <div className="calendarWeekDay">
                {divCollectionOfDay}
            </div>
            {/* 日期 */}
            <div className="calendarDays">
                {divCollecttionOfThisMonth12}
            </div>
        </div>
        <div style={{background: "red"}}>1</div>
        <div className="calendarMonthNyear">
            <div className="wordCalendar">Calendar</div>
            <div className="monthNyearPicker">
                <div className="monthNyear">1月2024</div>
            </div>
        </div>
        <div className="calendarBody">
            {/* 星期 */}
            <div className="calendarWeekDay">
                {divCollectionOfDay}
            </div>
            {/* 日期 */}
            <div className="calendarDays">
                {divCollecttionOfThisMonth1}
            </div>
        </div>
        <div style={{background: "red"}}>1</div>
        <div className="calendarMonthNyear">
            <div className="wordCalendar">Calendar</div>
            <div className="monthNyearPicker">
                <div className="monthNyear">2月2024</div>
            </div>
        </div>
        <div className="calendarBody">
            {/* 星期 */}
            <div className="calendarWeekDay">
                {divCollectionOfDay}
            </div>
            {/* 日期 */}
            <div className="calendarDays">
                {divCollecttionOfThisMonth2}
            </div>
        </div>
        <div style={{background: "red"}}>1</div>
        <div className="calendarMonthNyear">
            <div className="wordCalendar">Calendar</div>
            <div className="monthNyearPicker">
                <div className="monthNyear">3月2024</div>
            </div>
        </div>
        <div className="calendarBody">
            {/* 星期 */}
            <div className="calendarWeekDay">
                {divCollectionOfDay}
            </div>
            {/* 日期 */}
            <div className="calendarDays">
                {divCollecttionOfThisMonth3}
            </div>
        </div>
      
    </div>
  )
}

export default Calendar
