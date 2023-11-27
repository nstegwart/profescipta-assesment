
export const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  export const formatHargaWithoutCurrency = (number) => {
   return number.toLocaleString('id-ID', { maximumFractionDigits: 0 });
 }

 export const onlyNumber = (number) => {
  if (number === '0') {
    return '';
  }
  return number.replace(/[^0-9]/g, '');
};
export const generateRandomNumber =()=> {
  const min = 10000; // Nilai minimum untuk bilangan 5 digit
  const max = 99999; // Nilai maksimum untuk bilangan 5 digit
  return Math.floor(Math.random() * (max - min + 1)) + min;
}