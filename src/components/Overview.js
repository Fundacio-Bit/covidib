/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import numbro from "numbro";
import last from "lodash/last";

import DataBox from "./DataBox";

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
    <Grid columns={[2, 3, 4, 5]} gap={[1, 2, 3]}>
      <DataBox
        title={t("nous_positius")}
        data={numbro(currentNode.nous_positius).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("percentatge_increment")}
        data={`${numbro(currentNode.percentatge_increment).format({
          thousandSeparated: true,
        })}%`}
      />
      <DataBox
        title={t("total_curats")}
        data={numbro(currentNode.curats).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("total_exitus")}
        data={numbro(currentNode.exitus).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("positius_actius")}
        data={numbro(currentNode.positius_actius).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("positius_acumulats")}
        data={numbro(currentNode.positius_acumulats).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("hospitalitzats_avui")}
        data={numbro(currentNode.hospitalitzats).format({
          thousandSeparated: true,
        })}
      />
      <DataBox title={t("uci_avui")} data={currentNode.uci} />
      <DataBox
        title={t("professionals_positius")}
        data={numbro(currentNode.professionals_positius).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("proves_laboratori")}
        data={numbro(currentNode.proves_laboratori).format({
          thousandSeparated: true,
        })}
      />
      <DataBox
        title={t("uvac_actius")}
        data={numbro(currentNode.uvac_actius).format({
          thousandSeparated: true,
        })}
      />
    </Grid>
  );
};

export default Overview;
