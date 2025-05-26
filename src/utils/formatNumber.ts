const formatNumber = (num: number): string => {
  if (!num) return '۰';
  return num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
};

export default formatNumber;
