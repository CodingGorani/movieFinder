import axios from 'axios';

const url = {
  kobis:
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
  naver: 'https://openapi.naver.com/v1/search/movie.json',
  imdb: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
};

const config = (site) => {
  let setting = 0;
  return setting;
};

const _axios = (site) => {
  let selectedUrl;
  if (site) {
    selectedUrl = url[site];
  } else {
    selectedUrl = url.naver;
  }

  return axios.create({
    baseURL: selectedUrl,
    headers: {
      withCredentials: true,
    },
  });
};
