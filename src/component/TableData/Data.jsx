import React, { useEffect } from "react";
import { tableData } from "../../utils/Helper";

import "./Data.css";

function Data() {
  const getTableDataFromApi = async () => {
    const response = await tableData();
  };

  useEffect(() => {
    getTableDataFromApi();
  });

  /*
   * There is error with the Api thats why there is custome table  , code of getting data from the api is above ,
   *
   */

  return (
    <div>
      <span className="login_title">Home</span>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Data;
