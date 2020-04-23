import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import geodata from "../../static/muni2.json";

const colorScale = scaleLinear().domain([0, 500]).range(["#ffedea", "#d42256"]);

// TODO: improve data structure to avoid re-searching (create
// a dictionary)
const findMunicipality = (geoNode, elm) =>
  elm.zipcode === geoNode.properties.codigo_postal ||
  elm.mapping_municipality === geoNode.properties.municipio;

const Map = ({ setContent }) => {
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
    <ComposableMap
      data-tip=""
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-3.0, -39.3, 0],
        scale: 12000,
      }}
      height={340}
    >
      {data.allMapdataJson.nodes.length > 0 && (
        <Geographies geography={geodata}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.allMapdataJson.nodes.find((elm) =>
                findMunicipality(geo, elm)
              );
              return (
                <Geography
                  onMouseEnter={() => {
                    const municipality = data.allMapdataJson.nodes.find((elm) =>
                      findMunicipality(geo, elm)
                    );
                    setContent({
                      municipio: municipality.municipis,
                      casos: municipality.total_casos,
                      taxa_10000: municipality.taxa_10000,
                      poblacio: municipality.poblacio,
                    });
                  }}
                  onMouseLeave={() => {
                    setContent({});
                  }}
                  key={geo.rsmKey}
                  geography={{ ...geo, ...d }}
                  style={{
                    default: {
                      fill: d ? colorScale(d["total_casos"]) : "#F5F4F6",
                      outline: "none",
                    },
                    hover: {
                      fill: "#d42256",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#d42256",
                      outline: "none",
                    },
                  }}
                  stroke="#d394a7"
                  strokeWidth={0.5}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default Map;
