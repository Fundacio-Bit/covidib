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

const Overview = ({ currentNode, prevDayNode }) => (
  <section id="overview">
    <h2>SITUACIÓ ACTUAL A LES ILLES BALEARS</h2>
    <ul>
      <li>
        {currentNode.nous_positius}
        <p>Nous positius</p>
        <p>({currentNode.Increment} %)</p>
      </li>
      <li>
        {currentNode.curats}
        <p>Curats</p>
      </li>
      <li>
        {currentNode.exitus}
        <p>Exitus</p>
      </li>
      <li>
        {currentNode.positius_actius}
        <p>Positius actius</p>
      </li>
      <li>
        {currentNode.positius_acumulats}
        <p>Positius acumulats</p>
      </li>
      <li>
        {currentNode.hospitalitzats}
        <p>Hospitalitzats</p>
      </li>
      <li>
        {currentNode.uci}
        <p>UCI</p>
      </li>
      <li>
        {currentNode.professionals_positius}
        <p>Professionals positius</p>
      </li>
    </ul>
  </section>
)

export default Overview
