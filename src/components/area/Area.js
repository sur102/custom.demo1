import React, { useContext, useEffect, useRef, useState } from "react";
import { AreaContext } from "../context/AreaContext";
import { getCharmByIndex } from "../common/GetList";
import { Rnd } from "react-rnd";

const Area = () => {
  const { nailNow, listCharms, setListCharms } = useContext(AreaContext);
  const menuRef = useRef(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const [activeId, setActiveId] = useState(null);

  const handleContextMenu = (event, id) => {
    event.preventDefault();
    setContextMenu({ x: event.pageX, y: event.pageY });
    setSelectedId(id);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".draggable-item")) {
      setActiveId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // nhấn ra ngoài là mất cái bảng delete
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setContextMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDeleteCharm = () => {
    setListCharms(listCharms.filter((item) => item.id !== selectedId));
    setContextMenu(null);
  };

  return (
    <>
      <div
        id="area-drag"
        style={{
          width: "800px",
          height: "600px",
          border: "1px solid #ddd",
          // position: "relative",
          overflow: "auto",
          margin: "auto",
          marginTop: "20px",
          backgroundImage: `url(${nailNow})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          scrollbarWidth: "none",
          userSelect: "none",
        }}
      >
        {listCharms.map((charm) => (
          <Rnd
            key={charm.id}
            className="draggable-item"
            bounds="parent"
            default={{
              x: charm.x || 0,
              y: charm.y || 100,
              width: charm.width || 50,
              height: charm.height || 50,
            }}
            enableResizing={activeId === charm.id}
            onContextMenu={(e) => {
              handleContextMenu(e, charm.id);
            }}
            onMouseDown={() => setActiveId(charm.id)}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                outline: activeId === charm.id ? "2px dashed #2563eb" : "",
              }}
            >
              <img
                src={getCharmByIndex(charm.cate)}
                alt=""
                draggable="false"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Rnd>
        ))}
      </div>

      {contextMenu && (
        <div
          ref={menuRef}
          className="position-absolute bg-white border shadow-sm rounded"
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
            minWidth: "150px",
            color: "red",
          }}
        >
          <ul className="list-group">
            <li
              className="list-group-item list-group-item-action"
              onClick={handleDeleteCharm}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Area;
