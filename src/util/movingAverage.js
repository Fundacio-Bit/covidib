import last from "lodash/last";

/**
  * @desc calculates a moving average series for a given time window.
  * @param Array $dailyCountsArray - an array of objects {deaths_per_million, date} that represents a daily-based time series.
  * @param window $int - the number of days that should be considered to calculate the moving average.
  * @return Array - a series of moving averages per day.
*/

const calculateMovingAverageSeries = (dailyCountsArray, window) => {
  let resultingSeries = [];
  for (let i = 0; i < dailyCountsArray.length + 1 - window; i++) {
    let dataInWindow = dailyCountsArray.slice(i, i + window);
    console.log(dataInWindow)
    let lastDateInWindow = last(dataInWindow).data
    let deaths_per_million = dataInWindow.map((item) => {
      return item.deaths_per_million; });
    let sum = deaths_per_million.reduce(
      (previous, current) => (current += previous)
    );
    let avg = (sum / deaths_per_million.length).toFixed(2);
    resultingSeries.push({moving_avg: avg, data: lastDateInWindow});
  }
  console.log(resultingSeries)
  return resultingSeries;
};

export default calculateMovingAverageSeries