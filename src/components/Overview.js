import React from "react"

/**
 *
 * @param {number} current - Current Value
 * @param {number} prev - previous value
 * @param {string} direction - direction which should be positive ("up" or "down")
 */
const dayDiff = (current, prev, direction) => {
  let diff = current - prev
  if ((direction === "up" && diff > 0) || (direction === "down" && diff < 0)) {
    return (
      <p style={{ color: "green" }}>
        ({diff >= 0 ? "+" : ""}
        {diff} %)
      </p>
    )
  } else {
    return (
      <p style={{ color: "rgb(203, 36, 49)" }}>
        ({diff >= 0 ? "+" : ""}
        {diff} %)
      </p>
    )
  }
}

const Overview = ({ currentNode, prevDayNode }) => (
  <section id="overview">
    <h2>SITUACIÓ ACTUAL A LES ILLES BALEARS</h2>
    <ul>
      <li>
        16
        <p>Nous positius</p>
        {prevDayNode &&
          dayDiff(2, 1, "up")}
      </li>
      <li>
        862
        <p>Curats</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.Actius, prevDayNode.Actius, "up")} */}
      </li>
      <li>
        117
        <p>Exitus</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.Increment, prevDayNode.Increment, "down")} */}
      </li>
      <li>
        571
        <p>Positius actius</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.mergedPRs, prevDayNode.mergedPRs, "up")} */}
      </li>
      <li>
        1550
        <p>Positius acumulats</p>
        {/* {prevDayNode &&
          dayDiff(currentNode.CasosNous, prevDayNode.CasosNous, "up")} */}
      </li>
      <li>
        452
        <p>Hospitalitzats</p>
        {/* {prevDayNode && dayDiff(currentNode.PositivosAcumulados, prevDayNode.PositivosAcumulados, "up")} */}
      </li>
      <li>
        88
        <p>UCI</p>
        {/* {prevDayNode && dayDiff(currentNode.PositivosAcumulados, prevDayNode.PositivosAcumulados, "up")} */}
      </li>
      <li>
        180
        <p>Professionals positius</p>
        {/* {prevDayNode && dayDiff(currentNode.stars, prevDayNode.stars, "up")} */}
      </li>
    </ul>
  </section>
)

export default Overview
