import React from 'react'

const Overview = ({
  currentNode,
  prevDayNode,
  islands,
  hospitalized,
  uci,
  positiveProfs,
  watchedProfs,
  uvac
}) => (
  <section id="overview">
    <h2>CASOS {islands}</h2>
    <ul>
      <li>
        {hospitalized}
        <p>Hospitalitzats</p>
      </li>
      <li>
        {positiveProfs}
        <p>Professionals positius</p>
      </li>
      <li>
        {watchedProfs}
        <p>Professionals en vigilància</p>
      </li>
      <li>
        {uvac}
        <p>UVAC</p>
      </li>
      <li> </li>
    </ul>
  </section>
)

export default Overview
