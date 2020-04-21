/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";

const DataBox = ({ title, data }) => (
  <Flex sx={{ width: 128, height: 128, backgroundColor: "primary", mx: 3 }}>
    <Box sx={{ my: "auto", width: "100%" }}>
      <Text variant="dataValue">{data}</Text>
      <Text sx={{ width: "100%", textAlign: "center", px: 1 }}>{title}</Text>
    </Box>
  </Flex>
);

export default DataBox;
