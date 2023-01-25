import { defaultTheme } from "@/config/theme";
import { convertToRaw, EditorState } from "draft-js";
import dynamic from "next/dynamic";
import React, { MouseEvent, useState } from "react";
import { EditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const RichTextInput: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const raw = convertToRaw(editorState.getCurrentContent());
    console.log(raw);
  };

  return (
    <div style={{ width: "100%" }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarStyle={{
          backgroundColor: defaultTheme.secondary,
          borderColor: `${defaultTheme.tertiaryText} !important`,
        }}
        toolbar={{
          options: ["inline", "list", "textAlign"],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough"],
          },
          list: {
            options: ["unordered", "ordered"],
          },
        }}
        placeholder="Write the best thread you can"
        editorStyle={{
          backgroundColor: defaultTheme.secondary,
          color: defaultTheme.primaryText,
          borderRadius: "0.325rem",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          padding: "10px 20px",
        }}
      />
    </div>
  );
};

export default RichTextInput;
