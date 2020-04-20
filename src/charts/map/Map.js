import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import geodata from "../../static/muni2.json";

const colorScale = scaleLinear().domain([0, 500]).range(["#ffedea", "#ff5233"]);

const Map = () => {
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
          mapping_municipality
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
        width={800}
        height={350}
      >
        {data.allMapdataJson.nodes.length > 0 && (
          <Geographies geography={geodata}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d =
                  data.allMapdataJson.nodes.find(
                    (s) => s.zipcode === geo.properties.codigo_postal
                  ) ||
                  data.allMapdataJson.nodes.find(
                    (s) => s.mapping_municipality === geo.properties.municipio
                  );
                if (!d) {
                  console.log(geo.properties.municipio, d);
                }
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={d ? colorScale(d["total_casos"]) : "#F5F4F6"}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    </section>
  );
};

export default Map;
