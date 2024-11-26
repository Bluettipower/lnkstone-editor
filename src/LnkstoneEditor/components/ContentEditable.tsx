import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import React from "react";

interface LexicalContentEditableProps {
  placeholder: string;
}

const LexicalContentEditable: React.FC<LexicalContentEditableProps> = ({
  placeholder,
}) => {
  return (
    <ContentEditable
      aria-placeholder={placeholder}
      className="editor-cell"
      placeholder={<div className="editor-cell-placeholder">{placeholder}</div>}
    />
  );
};

export default LexicalContentEditable;