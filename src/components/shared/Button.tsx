import React from "react";

interface IProps {
  text: string;
  callback?: () => void;
  width?: string | number;
  borderRadius?: string;
  type?: "button" | "submit" | "reset" | undefined;
  align?: "start" | "end" | "left" | "right" | "center" | "justify";
}
export const Button: React.FC<IProps> = ({
  callback,
  text,
  width,
  borderRadius,
  type,
  align,
}) => {
  return (
    <button
      type={type}
      style={{
        border: "1px solid #133774",
        width: width,
        borderRadius: borderRadius ? borderRadius : "3px",
        textAlign: align,
      }}
      onClick={callback}
      className="custom-btn"
    >
      {text}
    </button>
  );
};
