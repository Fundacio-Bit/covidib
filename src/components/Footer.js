/** @jsx jsx */
import { jsx, Container, Flex, Box, Text } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import logo from "../static/logo.svg";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          source
        }
      }
    }
  `);

  const { source } = data.site.siteMetadata;

  return (
    <footer
      sx={{
        width: "100%",
        variant: "layout.footer",
      }}
    >
      <Container px={4} py={3} my="auto">
        <Flex>
          <Box px={4} py={3} my="auto">
            <span>
              <img src={logo} height="100" width="100" alt="" />
            </span>
            <Text variant="p" color="muted" py={2}>
              {"Govern de les Illes Balears"},&nbsp;
              <a href={source}>caib.es</a>
            </Text>
            <Text variant="p" color="muted">
              Font: Conselleria de Salut i Consum
            </Text>
          </Box>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
