import React, { useContext } from "react";
import { getListM } from "../common/GetList";
import { AreaContext } from "../context/AreaContext";

const Category = () => {
  const { setNailNow } = useContext(AreaContext);
  const listNails = getListM();

  return (
    <div className="categories text-center" style={{ width: "100%" }}>
      <div className="list-vuong">
        <div className="text-center">
          <span>Loai 1</span>
        </div>
        <div>
          {listNails.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              style={{
                width: "30%",
                cursor: "pointer",
                border: "1px solid #ddd",
                margin: "5px",
              }}
              onClick={() => setNailNow(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
