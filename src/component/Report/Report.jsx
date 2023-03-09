import React, { useState } from "react";
import { reportPostApi } from "../../utils/Helper";
import "./Report.css";

function Report() {
  const [number, setNumber] = useState("");
  const [jpg, setJpg] = useState("");

  const handleGenerateResponse = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(jpg);
    reader.onload = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");

      const jsonObj = {
        name: jpg.name,
        size: jpg.size,
        type: jpg.type,
        data: base64String,
      };
      reportPostApi(parseInt(number), jsonObj);
    };
  };

  /*
   * There is issue with the api regarding the data post , data is in correct format .
   *
   */

  return (
    <div>
      <span className="login_title">Report</span>
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Enter a value between 1 and 10
            </label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Attach a JPG image
            </label>
            <input
              type="file"
              class="form-control"
              id="fileInput"
              accept="image/jpeg"
              onChange={(e) => setJpg(e.target.files[0])}
            />
          </div>

          <button
            className="report_btn"
            onClick={(e) => handleGenerateResponse(e)}
          >
            Generate Report
          </button>
        </form>
        <div className="report_text"></div>
      </div>
    </div>
  );
}

export default Report;
