import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import numbro from "numbro";
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
          {numbro(currentNode.nous_positius).format({
            thousandSeparated: true,
          })}
          <p>{t("nous_positius")}</p>
        </li>
        <li>
          {numbro(currentNode.percentatge_increment).format({
            thousandSeparated: true,
          })}
          %<p>{t("percentatge_increment")}</p>
        </li>
        <li>
          {numbro(currentNode.curats).format({
            thousandSeparated: true,
          })}
          <p>{t("total_curats")}</p>
        </li>
        <li>
          {numbro(currentNode.exitus).format({
            thousandSeparated: true,
          })}
          <p>{t("total_exitus")}</p>
        </li>
        <li>
          {numbro(currentNode.positius_actius).format({
            thousandSeparated: true,
          })}
          <p>{t("positius_actius")}</p>
        </li>
      </ul>
      <ul>
        <li>
          {numbro(currentNode.positius_acumulats).format({
            thousandSeparated: true,
          })}
          <p>{t("positius_acumulats")}</p>
        </li>
        <li>
          {numbro(currentNode.hospitalitzats).format({
            thousandSeparated: true,
          })}
          <p>{t("hospitalitzats_avui")}</p>
        </li>
        <li>
          {currentNode.uci}
          <p>{t("uci_avui")}</p>
        </li>
        <li>
          {numbro(currentNode.professionals_positius).format({
            thousandSeparated: true,
          })}
          <p>{t("professionals_positius")}</p>
        </li>
        <li>
          {numbro(currentNode.proves_laboratori).format({
            thousandSeparated: true,
          })}
          <p>{t("proves_laboratori")}</p>
        </li>
        <li>
          {numbro(currentNode.uvac_actius).format({
            thousandSeparated: true,
          })}
          <p>{t("uvac_actius")}</p>
        </li>
      </ul>
    </section>
  );
};

export default Overview;
