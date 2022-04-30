import React from 'react'

export default function Example() {

    const arry = ["1","89","78","1234","2","3","5","6","17","11","31","81"]

    var firstIndex = "";
   var isMatch=false;
    for (var a = 0; a < arry.length; a++) {
        for (var b = a+1; b < arry.length; b++) {
            if (arry[a] === arry[b]){
                firstIndex = arry[a];
                isMatch=true;
                break;
          }
        }
           if (isMatch) {break;}
    }
  console.log("deded",firstIndex);
  return (
    <div>



        <>
        <h1>harshil sakhiya</h1>
        </>
    </div>
  )
}
