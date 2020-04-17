import React from "react"

/**
 *
 * @param {number} current - Current Value
 * @param {number} prev - previous value
 * @param {string} direction - direction which should be positive ("up" or "down")
 */
// const dayDiff = (current, prev, direction) => {
//   let diff = current - prev
//   if ((direction === "up" && diff > 0) || (direction === "down" && diff < 0)) {
//     return (
//       <p style={{ color: "green" }}>
//         ({diff >= 0 ? "+" : ""}
//         {diff} %)
//       </p>
//     )
//   } else {
//     return (
//       <p style={{ color: "rgb(203, 36, 49)" }}>
//         ({diff >= 0 ? "+" : ""}
//         {diff} %)
//       </p>
//     )
//   }
// }

const Overview = ({ currentNode, prevDayNode, islands, hospitalized, uci, positiveProfs, watchedProfs, uvac }) => (
  <section id="overview">
    <h2>CASOS {islands}</h2>
    <ul>
      <li>
        {hospitalized}
        <p>Hospitalitzats</p>
        {/* <p>({uci} UCI)</p> */}
        {/* {prevDayNode &&
          dayDiff(2, 1, "up")} */}
      </li>
      <li>
        {positiveProfs}
        <p>Professionals positius</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.closedIssues, prevDayNode.closedIssues, "up")} */}
      </li>
      <li>
        {watchedProfs}
        <p>Professionals en vigilància</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.openPRs, prevDayNode.openPRs, "down")} */}
      </li>
      <li>
        {uvac}
        <p>UVAC</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.mergedPRs, prevDayNode.mergedPRs, "up")} */}
      </li>
    </ul>
  </section>
)

export default Overview
