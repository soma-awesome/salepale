import React, { forwardRef, useState, useRef } from "react";
import { Rect, Group, Text } from "react-konva";
import { TextEditor } from "./TextEditor";

export const EditorSt = () => {
  const [text, setText] = useState("aabbcc");
  const [editorEnabled, setEditorEnabled] = useState(false);
  const textRef = useRef();

  return (
    <Group draggable>
      <Text
        text={text}
        ref={textRef}
        width={100}
        onDblClick={() => {
          setEditorEnabled(true);
        }}
        visible={!editorEnabled}
      />
      {editorEnabled && (
        <Group>
          <TextEditor
            value={text}
            textNodeRef={textRef}
            onChange={setText}
            onBlur={() => {
              setEditorEnabled(false);
            }}
          />
        </Group>
      )}
    </Group>
  );
};
