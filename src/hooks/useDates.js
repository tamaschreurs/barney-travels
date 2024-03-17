const shortMonthNames = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
];

const useDates = () => {
  const ymdToMonthText = (inputString) => {
    if (typeof inputString !== 'string' || inputString.length !== 8) {
      return;
    }

    const year = inputString.substring(0, 4);
    const month = inputString.substring(4, 6);

    const monthNum = parseInt(month);

    const outputText = `${shortMonthNames[monthNum - 1]} ${year}`;

    return outputText;
  };

  const ymdToDmy = (inputString) => {
    if (typeof inputString !== 'string' || inputString.length !== 8) {
      return;
    }

    const year = inputString.substring(0, 4);
    const month = inputString.substring(4, 6);
    const day = inputString.substring(6, 8);

    const outputText = `${day}/${month}/${year}`;

    return outputText;
  };

  const ymdToMonthRange = (startDate, endDate) => {
    const startText = ymdToMonthText(startDate);
    const endText = ymdToMonthText(endDate);

    if (startText === endText) {
      return startText;
    }

    const rangeText = `${startText} - ${endText}`;

    return rangeText;
  };

  return { ymdToMonthText, ymdToMonthRange, ymdToDmy };
};

export default useDates;
