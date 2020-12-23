import { green } from "@material-ui/core/colors";
import axios from "axios";
import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [30, 20, 40],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
const data1 = {
  labels: ["Green", "Blue", "Yellow"],
  datasets: [
    {
      data: [30, 250, 300],
      backgroundColor: [green, "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: [green, "#36A2EB", "#FFCE56"],
    },
  ],
};
export default function Result(params) {
  useEffect(() => {
    axios
      .get(
        "http://13.235.90.125:2112/api/v1/poll/intern/result/5e52915a0a4c116be65486ac"
      )
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Pie data={data} />
      <Pie data={data1} />
    </div>
  );
}
