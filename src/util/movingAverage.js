import last from "lodash/last";

/**
  * @desc infers a series of daily deaths count from a cumulative series of deaths.
  * @param Array $dailyCumulativeCountsArray - an array of objects that represents a
  * deaths time series.
  * @return Array - a series of daily deaths count .
*/
const calculateDailyDeathsCountSeries = (dailyCumulativeCountsArray) => {
  //first cumulative array element should be taken as is
  let dailyCountsArraySeries = [
    {
      deaths_per_date: dailyCumulativeCountsArray[0].exitus,
      data: dailyCumulativeCountsArray[0].data}
  ]
  //first cumulative array element should be processed
  for (let i = 1; i < dailyCumulativeCountsArray.length; i++) {
    dailyCountsArraySeries.push(
      {
        deaths_per_date: (dailyCumulativeCountsArray[i].exitus - dailyCumulativeCountsArray[i-1].exitus),
        data: dailyCumulativeCountsArray[i].data
      }
    );
  }
  return dailyCountsArraySeries
}

/**
  * @desc calculates a moving average series for a given time window.
  * @param Array $dailyCountsArray - an array of objects that represents a
  * deaths time series.
  * @param window $int - the number of days that should be considered to calculate the moving average.
  * @return Array - a series of moving averages per day.
*/

const calculateMovingAverageSeries = (nodes, window) => {
  let resultingSeries = [];
  let dailyCountsArraySeries = calculateDailyDeathsCountSeries(nodes)
  for (let i = 0; i < dailyCountsArraySeries.length + 1 - window; i++) {
    let dataInWindow = dailyCountsArraySeries.slice(i, i + window);
    let lastDateInWindow = last(dataInWindow).data
    // 1.198.576 inhabitants in Balearic Islands
    // Source INE, July 2019 data: https://www.ine.es/jaxiT3/Datos.htm?t=9681#!tabs-mapa
    // to calculate deaths per million inhabitants we apply a 1/1.198576 factor
    let deathsMillionPerDateInWindow = dataInWindow.map((item) => {
      return (item.deaths_per_date/1.198576); });
    let sum = deathsMillionPerDateInWindow.reduce(
      (previous, current) => (current += previous)
    );
    let avg = (sum / deathsMillionPerDateInWindow.length).toFixed(2);
    resultingSeries.push({moving_avg: avg, data: lastDateInWindow});
  }
  return resultingSeries;
};

export default calculateMovingAverageSeries