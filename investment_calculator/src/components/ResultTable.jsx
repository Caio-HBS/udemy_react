import React from "react";

export default function ResultTable(props) {
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>$2,260</td>
          <td>$60</td>
          <td>$60</td>
          <td>$2,200</td>
        </tr>
      </tbody>
    </table>
  );
}
