import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geodata from "../../static/muni2.json";

const colorScale = scaleLinear()
  .domain([0, 1100])
  .range(["#ffedea", "#ff5233"]);

const Map2 = () => {
  const data = useStaticQuery(graphql`
    {
      allMapdataJson {
        nodes {
          illa
          municipis
          poblacio
          taxa_10000
          total_casos
          zipcode
        }
      }
    }
  `);
  return (
    <section id="overview">
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-3.0, -39.3, 0],
          scale: 12000,
        }}
      >
        <Geographies geography={geodata}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.allMapdataJson.nodes.find(
                (s) => s.zipcode === geo.properties.codigo_postal
              );
              return <Geography key={geo.rsmKey} geography={geo} />;
            })
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
};

export default Map2;
