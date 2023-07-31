import React from "react";
import { useRef, useEffect } from "react";

const OtpInput = () => {
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (value) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };
  return (
    <div>
      {inputRefs.map((inputRef, index) => (
        <input
          key={index}
          ref={inputRef}
          type="text"
          maxLength={1}
          onChange={(event) => handleInputChange(index, event)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
