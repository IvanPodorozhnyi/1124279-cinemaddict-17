import {
  getRandomInteger
} from '../until.js';

const QUANTITY_COMENTS = {
  min: 1,
  max: 20
};
const TOTAL_RATING = {
  min: 1,
  max: 9
};
const RUN_TIME = {
  min: 50,
  max: 240
};
const titles = [
  'The Shawshank Redemption',
  'Forrest Gump ',
  'Schindlers List',
  'The Godfather ',
  'The Green Mile',
  'Hotel Rwanda',
  'Goodfellas ',
  '3:10 to Yuma',
  'Scarface ',
  'The Bucket List ',
  'The Terminal ',
  'Million Dollar Baby',
  'The Bridges of Madison County ',
  'Driving Miss Daisy '
];
const ages = [
  '0',
  '3',
  '7',
  '12',
  '16',
  '18'
];

const genres = [
  'Comedy',
  'Action',
  'Detective',
  'Fantasy',
  'Animated film',
  'Drama',
  'Musical',
  'Thriller',
  'Horror',
  'Cartoon'
];

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. ',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. ',
  ' Sed sed nisi sed augue convallis suscipit in sed felis. ',
  ' Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. ',
  'In rutrum ac purus sit amet tempus. ',
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee. '
];

const generateRandomString = (data, max) => {

  let str  = '';
  for (let i = 0; i <= getRandomInteger(0, max); i++) {
    str += `${data[getRandomInteger(0, data.length - 1)]} `;
  }
  return str;
};

const generatePoster = () => {
  const postersNames = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg',
  ];

  return `images/posters/${postersNames[getRandomInteger(0, postersNames.length - 1)]}`;
};

const generateRandomData = (data) => data[getRandomInteger(0, data.length - 1)];

const generateComments = () => {
  const arr = [];
  for (let i = 1; i < getRandomInteger(QUANTITY_COMENTS.min, QUANTITY_COMENTS.max); i++) {
    arr.push(getRandomInteger(QUANTITY_COMENTS.min, QUANTITY_COMENTS.max));
  }
  return arr;

};

const generateRandomArr = (data, max) => {
  const arr = [];

  for (let i = 0; i < max; i++) {
    const element = data[getRandomInteger(0, data.length)];
    if (arr.includes(element) === false) {
      arr.push(element);
    }

  }
  return arr;
};

const randomBooleanValue = () => Math.random() < 0.5;

export const generateMovie = () => ({
  id: getRandomInteger(QUANTITY_COMENTS.min, QUANTITY_COMENTS.max),
  comments: generateComments(),
  filmInfo: {
    title: generateRandomData(titles),
    alternativeTitle: generateRandomData(titles),
    totalRating: getRandomInteger(TOTAL_RATING.min, TOTAL_RATING.max, false),
    poster: generatePoster(),
    ageRating: generateRandomData(ages),
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano'
    ],
    actors: [
      'Morgan Freeman'
    ],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
    },
    runtime: getRandomInteger(RUN_TIME.min, RUN_TIME.max),
    genre: generateRandomArr(genres, 2),
    description: generateRandomString(descriptions, 3),
  },
  userDetails: {
    watchlist: randomBooleanValue(),
    alreadyWatched: randomBooleanValue(),
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: randomBooleanValue()
  }

});

const smiles = ['smile', 'sleeping', 'puke', 'angry'];

export const generateComment = () => ({
  id: getRandomInteger(QUANTITY_COMENTS.min, QUANTITY_COMENTS.max),
  author: 'Ilya O\'Reilly',
  comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
  date: '2022-05-11T16:12:32.554Z',
  emotion: smiles[getRandomInteger(0, smiles.length - 1)],
});

