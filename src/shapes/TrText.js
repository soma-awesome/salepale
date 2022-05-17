import { Text, Transformer } from "react-konva";
import { useRef, useEffect, useState } from "react";
import { TextEditor } from "./TextEditor";

const TrText = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const [text, setText] = useState("텍스트");
  const [editorEnabled, setEditorEnabled] = useState(false);
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        text={text}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            fontSize: node.attrs.fontSize * scaleX,
            width: node.width() * scaleX,
            height: node.height() * scaleY,
          });
        }}
        onDblClick={() => {
          setEditorEnabled(true);
        }}
        visible={!editorEnabled}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
          keepRatio={true}
          enabledAnchors={[
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right",
          ]}
        />
      )}
      {editorEnabled && (
        <TextEditor
          value={text}
          textNodeRef={shapeRef}
          onChange={setText}
          onBlur={() => {
            setEditorEnabled(false);
          }}
        />
      )}
    </>
  );
};

export default TrText;
