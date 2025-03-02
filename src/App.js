import React, { useContext } from "react";
import Category from "./components/category/Category";
import Area from "./components/area/Area";
import { AreaContext } from "./components/context/AreaContext";
import { getListCharms } from "./components/common/GetList";
import "./app.scss";

function App() {
  const { selectCharm } = useContext(AreaContext);
  const listCharms = getListCharms();

  return (
    <div className="app-container d-flex justify-content-between container">
      <div className="categories-nails col-4">
        <Category />
      </div>
      <div className="area-nails col-8">
        <div className="area">
          <Area />
        </div>
        <div
          className="list-items d-flex gap-3 align-items-center my-3 justify-content-between"
          style={{ overflow: "auto", whiteSpace: "nowrap", width: "100%" }}
        >
          {listCharms.map((item, index) => (
            <img
              src={item}
              alt=""
              key={index}
              style={{ border: "1px solid #ddd" }}
              onClick={() => selectCharm(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
