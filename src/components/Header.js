/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Image, Box, Flex, Text, Heading } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../util/LanguageSwitcher";
import favicon from "../static/favicon.ico";
import last from "lodash/last";

import logo from "../static/goib.png";

const Centered = ({ props, children }) => (
  <div
    {...props}
    sx={{
      maxWidth: "container",
      my: "auto",
    }}
  >
    {children}
  </div>
);

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          repoNameWithOwner
        }
      }
      allDataJson(sort: { order: DESC, fields: data }, limit: 1) {
        nodes {
          data(formatString: "DD MMMM", locale: "es")
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  const date = last(data.allDataJson.nodes).data;
  const { t } = useTranslation();
  return (
    <header
      sx={{
        width: "100%",
        variant: "layout.header",
      }}
    >
      <Helmet title={title}>
        <html lang={`es`} />
        <meta
          name="description"
          content="COVID-19 data panel for Balearic Islands"
        />
        <link rel="icon" type="image/png" href={favicon} />
      </Helmet>
      <Container px={4} py={3}>
        <Flex>
          <Image src={logo} variant="caibLogo" />
          <Box px={4} py={3} my="auto">
            <Flex>
              <Centered>
                <Heading as="h1">{title}</Heading>
              </Centered>
              <Centered>
                <Text variant="subtitle">{t("situ_actual")}</Text>
              </Centered>
            </Flex>
            <div
              sx={{
                paddingTop: 2,
              }}
            >
              <Text variant="p" color="muted">
                {t("darrera_act")}: {date}
              </Text>
              <Text variant="p" color="muted">
                {t("act_dades")}: {date}
              </Text>
            </div>
          </Box>
          <div sx={{ mx: "auto" }} />
          <Centered>
            <LanguageSwitcher />
          </Centered>
        </Flex>
      </Container>
    </header>
  );
};

export default HeaderComponent;
