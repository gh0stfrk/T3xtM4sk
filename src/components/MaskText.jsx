import { useState } from "react";
import React from "react";
import { FaCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { maskText, unmaskText } from "../script/maskWords";
import "react-toastify/dist/ReactToastify.css";

function MaskText() {
  const [plainText, setPlainText] = useState("");
  const [operationType, setOperationType] = useState("mask");

  const onValueChange = (event) =>{
    setOperationType(event.target.value);
  }

  const showToastMessage = () =>{
    toast("Text copied to clipboard", {autoClose: 800, closeOnClick: true})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (operationType === "mask") {
      setPlainText(maskText(plainText));
    }else{
      setPlainText(unmaskText(plainText));
    }
  }

  return (
    <>
      <div className="flex items-center flex-col">
      <ToastContainer position="top-center"/>
        <div className="flex gap-3 rounded-xl flex-wrap flex-shrink">
          <form className="flex flex-col gap-3 w-screen p-3 md:w-full md:flex-row md:flex-wrap" method="POST" onSubmit={handleSubmit}>
            <textarea
              required
              className="border border-black rounded-md p-5 min-h-64 md:w-full"
              onChange={(e) => {
                setPlainText(e.target.value);
              }}
              name="text"
              id="text"
              placeholder="Type your message here"
              value={plainText}
            ></textarea>
            <div className="flex gap-3 flex-col md:flex-row md:justify-between md:w-full">
              <div className="flex gap-2 align-center items-center justify-between">
                <CopyToClipboard text={plainText}>
                  <FaCopy size={20} color="#00df9a" onClick={showToastMessage}/>
                </CopyToClipboard>
                <div className="flex gap-2">
                  <input type="radio" name="type" id="mask" value="mask" defaultChecked onBlur={onValueChange} />
                  <label htmlFor="mask">Mask</label>
                  <input type="radio" name="type" id="unmask" value="unmask" onBlur={onValueChange}/>
                  <label htmlFor="unmask">Unmask</label>
                </div>
              </div>

              <input  className="bg-[#00df9a] px-4 py-2 rounded-lg text-white hover:text-white hover:bg-black" type="submit" value="Process" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MaskText;
