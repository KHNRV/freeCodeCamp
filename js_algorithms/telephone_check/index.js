function telephoneCheck(str) {
  const verificationTemplates = [
    "555-555-5555",
    "(555)555-5555",
    "(555) 555-5555",
    "555 555 5555",
    "5555555555",
  ];

  const number = str.match(/[0-9]/g);
  const hasCountryCode = number.length === 11;
  const hasUSCountryCode = number.length === 11 && number[0] === "1";

  if (hasCountryCode === true && hasUSCountryCode === false) {
    return false;
  }

  const numberFormat = str.replace(/[0-9]/g, "5");

  if (hasCountryCode) {
    return (
      verificationTemplates
        .map((template) => `5 ${template}`)
        .includes(numberFormat) ||
      verificationTemplates
        .map((template) => `5${template}`)
        .includes(numberFormat)
    );
  } else {
    return verificationTemplates.includes(numberFormat);
  }
}
