import React, { useContext } from "react";
import { Rnd } from "react-rnd";
import { AreaContext } from "../context/AreaContext";

const Draggle = ({ id, img, x, y, width, height, handleContextMenuOfArea }) => {
  const { handleContextMenu } = useContext(AreaContext);

  return (
    <Rnd
      className="run"
      bounds="parent"
      default={{
        x: x || 0,
        y: y || 100,
        width: width || 50,
        height: height || 50,
      }}
      style={
        {
          // border: "1px solid #007bff",
        }
      }
      enableResizing={
        {
          // top: true,
          // right: true,
          // bottom: true,
          // left: true,
          // topRight: true,
          // bottomRight: true,
          // bottomLeft: true,
          // topLeft: true,
        }
      }
      //   onResize={(e, direction, ref, d) => {
      //     console.log(direction);
      //     console.log(d);
      //   }}
      //   onDrag={(e, d) => {
      //     console.log(d);
      //   }}
      onContextMenu={(e) => handleContextMenuOfArea(e, id)}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <img
          src={img}
          alt=""
          draggable="false"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </Rnd>
  );
};

export default Draggle;
