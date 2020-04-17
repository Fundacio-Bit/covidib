import React from 'react'

const Overview = ({ currentNode }) => (
  <section id="overview">
    <h2>SITUACIÓ ACTUAL A LES ILLES BALEARS</h2>
    <ul>
      <li>
        {currentNode.nous_positius}
        <p>Nous positius</p>
        <p>({currentNode.percentatge_increment} %)</p>
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
