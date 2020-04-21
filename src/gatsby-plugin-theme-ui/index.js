export default {
  colors: {
    primary: "#d42256",
    background: "#f0f0f0",
    text: "#333",
    muted: "#999",
    gray: "#777",
  },
  fonts: {
    systemSans: "Bariol Regular, Arial, Helvetica, sans-serif",
    heading: "inherit",
  },
  // shadows: {
  //   main: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  // },
  sizes: {
    container: 1024,
    header: 240,
  },
  layout: {
    header: {
      color: "text",
      bg: "white",
      height: 180,
    },
    footer: {
      bg: "background",
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  images: {
    caibLogo: {
      width: 128,
      height: 128,
      mt: 20,
    },
  },
  text: {
    subtitle: {
      color: "gray",
      fontSize: 3,
      px: 4,
      mx: "auto",
    },
  },
  styles: {
    root: {
      fontFamily: "systemSans",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
  },
};
