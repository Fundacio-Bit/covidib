/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Flex, Text } from "theme-ui";

const DataBox = ({ title, data, ...props }) => (
  <Flex
    sx={{
      width: 128,
      height: 128,
      backgroundColor: "primary",
      mx: [0, 1, 2, 3],
    }}
    {...props}
  >
    <Box sx={{ my: "auto", width: "100%" }}>
      <Text variant="dataValue">{data}</Text>
      <Text variant="dataLabel">{title}</Text>
    </Box>
  </Flex>
);

export default DataBox;
