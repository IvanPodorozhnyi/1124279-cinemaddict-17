
import dayjs from 'dayjs';
const getRandomInteger = (a = 0, b = 1, floor = true) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  if (floor) {
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  } else {
    return (lower + Math.random() * (upper - lower + 1)).toFixed(1);
  }
};


const humanizeDate = (date, format) => dayjs(date).format(format);

const getTimeFromMins = (mins) => {
  if (mins > 60) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return `${hours  }h ${  minutes  }m`;
  }
  return `${mins} m`;

};


const formatingDate = () => ({
  realease: 'D MMMM YYYY',
  comment: 'YYYY/MM/DD HH:MM',
  realeaseYear: 'YYYY',
});
export {getRandomInteger, humanizeDate, getTimeFromMins, formatingDate};
