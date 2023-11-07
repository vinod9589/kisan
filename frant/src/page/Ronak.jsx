import React from "react";

function Ronak() {
  const vinod = new Array(300).fill().map((i, n) => n + 1);
  return (
    <>
      {vinod.map((i, n) =>
            <div
              className=""
              style={{ width: 30, height: 30, border: "1px solid red" }}
            >
              {i}hi
            </div>
       )}
    </>
  );
}

export default Ronak;
