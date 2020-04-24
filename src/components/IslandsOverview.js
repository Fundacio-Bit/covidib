/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid } from "theme-ui";
import { useTranslation } from "react-i18next";
import DataBox from "./DataBox";

const Overview = ({
  currentNode,
  prevDayNode,
  islands,
  hospitalized,
  uci,
  positiveProfs,
  watchedProfs,
  uvac,
}) => {
  const { t } = useTranslation();
  return (
    <div sx={{ py: 3 }}>
      <h2>
        {t("casos")} {islands}
      </h2>
      <Grid columns={[2, 3, 4, 5]} gap={[1, 2, 3]}>
        <DataBox title={t("hospitalitzats")} data={hospitalized} />
        <DataBox title={"UCI"} data={uci} />
        <DataBox title={t("professionals_positius")} data={positiveProfs} />
        <DataBox title={t("professionals_vigilancia")} data={watchedProfs} />
        <DataBox title={"UVAC"} data={uvac} />
      </Grid>
    </div>
  );
};

export default Overview;
