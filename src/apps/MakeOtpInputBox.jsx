import React, { useState, useRef, useEffect } from "react";

const OTP_SIZE = 8;

export default function MakeOtpInputBox() {
  const [inpArr, setInpArr] = useState(new Array(OTP_SIZE).fill(""));
  const refArr = useRef(new Array(OTP_SIZE).fill(""));
  useEffect(() => {
    refArr.current?.[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const otpValue = e.target.value.slice(-1).trim();
    if (isNaN(otpValue)) return;
    setInpArr((prev) => {
      const newInpArr = [...prev];
      newInpArr[index] = otpValue;
      return newInpArr;
    });
    if (otpValue) refArr.current?.[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    const otpValue = e.target.value;
    if (!otpValue && e.key === "Backspace") {
      refArr.current?.[index - 1]?.focus();
    }
  };

  return (
    <div>
      MakeOtpInputBox
      <div className="otp-container">
        {inpArr.map((inp, index) => {
          return (
            <input
              className="border-1 m-4 border-indigo-500/100 otp-input"
              type="text"
              key={index}
              ref={(inp) => {
                refArr.current[index] = inp;
              }}
              onChange={(e) => handleChange(e, index)}
              value={inp}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
}
