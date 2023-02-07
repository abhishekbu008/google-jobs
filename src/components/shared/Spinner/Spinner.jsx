import React from "react";

function Spinner() {
  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="border-[10px] border-t-[10px] border-solid border-t-blue-600 w-20 h-20 animate-spin "
          style={{ borderRadius: "50%" }}
        ></div>
      </div>
    </div>
  );
}

export default Spinner;
