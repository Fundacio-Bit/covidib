import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Map = () => {
  const [geo, setGeo] = useState({});
  useEffect(() => {
    const loadGeoJSON = async () => {
      const geodata = await import("../../static/municipality.json");
      setGeo(geodata);
    };
    loadGeoJSON();
  }, []);

  // useEffect(() => {
  //   async loadData() {
  //     const data = await import(`./${some_param}.json`);
  //     setInitial(data);
  //   }

  //   loadData();
  // }, [])

  if (!Object.keys(geo).length) {
    return <div />;
  }

  // debugger;
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/spain/spain-province.json";

  return (
    <section id="overview">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
};

export default Map;
