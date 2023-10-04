import React from "react";

function Title(){
    function doNothing(){
        alert("success");
      }
    return(
        <div className="title">
                  <h1>Electronics</h1>
                  <button onClick={() => doNothing()} className="viewAll">
                  viewAll
                </button>
          </div>
    )
}

export default Title;