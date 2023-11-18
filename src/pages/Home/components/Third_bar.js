import Newdiv from "./Newdiv"
import "../../../tp.css";

const allSpots = [
    {
      "images":"",
      "name" : "Jerry",
      "mrt" : "15000",
      "category" : "單&雙"
    },
  ]


const Third_bar = ({ thirdBar, loading, nodata }) => {
    console.log(allSpots)
  return (
    <div>
        <div className="newdiv">
            {/* {nodata?
            <div>沒有此關鍵字的資料</div>
            :null
            } */}
            {/* items */}
            {allSpots?
            allSpots.map((item) => {
                const { images, name, mrt, category } = item;
                return (
                    <Newdiv 
                        images = {images}
                        name = {name}
                        mrt = {mrt}
                        category = {category}
                    />
                );
            })
            :null
            }
        </div>
        {/* loading 效果 */}
        {/* {loading?
        <div className="loading_wrapper">
            <div style={{ color: "#61bfd6" }} className="loading la-ball-newton-cradle la-3x">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        :null
        } */}
    </div>
  )
}

export default Third_bar
