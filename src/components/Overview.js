import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import last from "lodash/last";

const Overview = () => {
  const data = useStaticQuery(graphql`
    {
      allDataJson(sort: { fields: data, order: DESC }, limit: 1) {
        nodes {
          nous_positius
          percentatge_increment
          positius_actius
          positius_acumulats
          professionals_positius
          proves_laboratori
          uci
          uvac_actius
          curats
          exitus
          hospitalitzats
        }
      }
    }
  `);
  const { t } = useTranslation();
  const currentNode = last(data.allDataJson.nodes);
  return (
    <section id="overview">
      <h2>{t("situ_actual")}</h2>
      <ul>
        <li>
          {currentNode.nous_positius}
          <p>{t("nous_positius")}</p>
        </li>
        <li>
          {currentNode.percentatge_increment}%
          <p>{t("percentatge_increment")}</p>
        </li>
        <li>
          {currentNode.curats}
          <p>{t("total_curats")}</p>
        </li>
        <li>
          {currentNode.exitus}
          <p>{t("total_exitus")}</p>
        </li>
        <li>
          {currentNode.positius_actius}
          <p>{t("positius_actius")}</p>
        </li>
      </ul>
      <ul>
        <li>
          {currentNode.positius_acumulats}
          <p>{t("positius_acumulats")}</p>
        </li>
        <li>
          {currentNode.hospitalitzats}
          <p>{t("hospitalitzats_avui")}</p>
        </li>
        <li>
          {currentNode.uci}
          <p>{t("uci_avui")}</p>
        </li>
        <li>
          {currentNode.professionals_positius}
          <p>{t("professionals_positius")}</p>
        </li>
        <li>
          {currentNode.proves_laboratori}
          <p>{t("proves_laboratori")}</p>
        </li>
        <li>
          {currentNode.uvac_actius}
          <p>{t("uvac_actius")}</p>
        </li>
      </ul>
    </section>
  );
};

export default Overview;
