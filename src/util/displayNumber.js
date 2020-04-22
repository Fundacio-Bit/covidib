import numbro from "numbro";

function displayNumber(number) {
  return numbro(number).format({
    thousandSeparated: true,
  });
}

export default displayNumber;
