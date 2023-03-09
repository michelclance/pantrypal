import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
        flexDirection: "column"
      }}
    >
      <p style={{
          color: "black",
          fontSize: "24px",
          fontFamily: "Roboto, sans-serif",
          textShadow: "1px 1px 1px rgba(0,0,0,0.5)"
        }}
      >
        let the AI is cook...
      </p>
      <img src="/images/loading.gif" alt="loading..." />
    </div>
  );
};

export default Loader;




