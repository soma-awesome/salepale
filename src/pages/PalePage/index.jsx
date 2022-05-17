import TrRectangle from "../../shapes/TrRectangle";
import TrCircle from "../../shapes/TrCircle";
import TrText from "../../shapes/TrText";
import TrImage from "../../shapes/TrImage";
import { Stage, Layer } from "react-konva";
import { useState, useEffect } from "react";
import { EditorSt } from "../../shapes/EditableText";

export function PalePage() {
  const [objects, setObjects] = useState([]);
  const [selectedId, selectShape] = useState(null);

  useEffect(() => {});

  const onClick = (e) => {
    let newObjects = [...objects];
    let targetName = e.target.name;
    let x = Math.ceil(Math.random() * 500);
    let y = Math.ceil(Math.random() * 500);

    if (targetName === "rect") {
      newObjects.push({
        name: "rect",
        x: x,
        y: y,
        width: 50,
        height: 50,
        fill: "red",
        id: "rect" + objects.length.toString(),
      });
    } else if (targetName === "circle") {
      newObjects.push({
        name: "circle",
        x: x,
        y: y,
        radius: 50,
        fill: "black",
        id: "circle" + objects.length.toString(),
      });
    } else if (targetName === "text") {
      newObjects.push({
        name: "text",
        x: x,
        y: y,
        fontSize: 40,
        id: "text" + objects.length.toString(),
      });
    } else if (targetName === "static-image") {
      newObjects.push({
        name: "static-image",
        x: x,
        y: y,
        id: "simage" + objects.length.toString(),
      });
    }
    setObjects(newObjects);
  };

  const onInputChange = (e) => {
    let newObjects = [...objects];
    let x = Math.ceil(Math.random() * 500);
    let y = Math.ceil(Math.random() * 500);

    var URL = window.webkitURL || window.URL;
    var url = URL.createObjectURL(e.target.files[0]);

    var img = new Image();
    img.src = url;

    newObjects.push({
      name: "my-image",
      x: x,
      y: y,
      image: img,
      id: "mimage" + objects.length.toString(),
    });

    setObjects(newObjects);
  };

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const rendering = () => {
    let elements = [];
    objects.forEach((elem, index) => {
      if (elem.name === "rect") {
        elements.push(
          <TrRectangle
            key={index}
            shapeProps={elem}
            isSelected={elem.id === selectedId}
            onSelect={() => {
              selectShape(elem.id);
            }}
            onChange={(newAttrs) => {
              let newObjects = objects.slice();
              newObjects[index] = newAttrs;
              setObjects(newObjects);
            }}
          />
        );
      } else if (elem.name === "circle") {
        elements.push(
          <TrCircle
            key={index}
            shapeProps={elem}
            isSelected={elem.id === selectedId}
            onSelect={() => {
              selectShape(elem.id);
            }}
            onChange={(newAttrs) => {
              let newObjects = objects.slice();
              newObjects[index] = newAttrs;
              setObjects(newObjects);
            }}
          />
        );
      } else if (elem.name === "text") {
        elements.push(
          <TrText
            key={index}
            shapeProps={elem}
            isSelected={elem.id === selectedId}
            onSelect={() => {
              selectShape(elem.id);
            }}
            onChange={(newAttrs) => {
              let newObjects = objects.slice();
              newObjects[index] = newAttrs;
              setObjects(newObjects);
            }}
          />
        );
      } else if (elem.name === "static-image") {
        elements.push(
          <TrImage
            key={index}
            imgsrc={"https://konvajs.org/assets/lion.png"}
            shapeProps={elem}
            isSelected={elem.id === selectedId}
            onSelect={() => {
              selectShape(elem.id);
            }}
            onChange={(newAttrs) => {
              let newObjects = objects.slice();
              newObjects[index] = newAttrs;
              setObjects(newObjects);
            }}
          />
        );
      } else if (elem.name === "my-image") {
        elements.push(
          <TrImage
            key={index}
            imgsrc={elem.imgsrc}
            shapeProps={elem}
            isSelected={elem.id === selectedId}
            onSelect={() => {
              selectShape(elem.id);
            }}
            onChange={(newAttrs) => {
              let newObjects = objects.slice();
              newObjects[index] = newAttrs;
              setObjects(newObjects);
            }}
          />
        );
      }
    });
    return elements;
  };

  return (
    <>
      <button name="circle" onClick={onClick}>
        원 추가 버튼
      </button>
      <button name="rect" onClick={onClick}>
        사각형 추가 버튼
      </button>
      <button name="text" onClick={onClick}>
        텍스트 추가 버튼
      </button>
      <button name="static-image" onClick={onClick}>
        고정 이미지 추가 버튼
      </button>
      <input type="file" onChange={onInputChange}></input>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>{rendering()}</Layer>
      </Stage>
    </>
  );
}
