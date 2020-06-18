
const DIAL_IT_IN = 125;
const MAX_LENGTH = 175;
const USER_DATA_URL = 'https://s3.amazonaws.com/heyzeusalmighty.com/trash-talker/wordStatsForSite.json';

class UserService {
  constructor() {
    console.log('newed up user service');
    this.userData = {};
  }

  getUserList() {
    return fetch(USER_DATA_URL)
      .then(res => res.json())
      .then(data => {
        this.userData = data;
        const users = Object.keys(data);
        const compare = (a, b) => {
        return (a.counts > b.counts) ? -1 : 1;
        };
        const ordered = users.sort(compare);
        console.log(ordered.length, ordered);
        return users.sort(compare);
      })
  }

  buildStartWords(wordStats) {
    const startWords = [];
    for(var prop in wordStats) {
        startWords.push(prop);
    }
    return startWords;
  }

  choice(a) {
    const i = Math.floor(a.length * Math.random());
    return a[i];
  }


  buildQuote(user) {
    const userThings = this.userData[user];
    if (!userThings) return 'None found';
    const { stats } = userThings;
    if (!stats) return 'None found';

    let terminals = {};
    const startWords = this.buildStartWords(stats);
    let word = this.choice(startWords) || '';
    let title = word;
    while (stats.hasOwnProperty(word)) {
      let nextWords = stats[word];
      word = this.choice(nextWords);
      title += " " + word;
      if (title.length > DIAL_IT_IN && terminals.hasOwnProperty(word)) break;
    }

    if (title.length > MAX_LENGTH) return this.buildQuote(user);
    return title.replace(/[/#"”“!$%^&*;:{}=\-_`~()]/g,"").trim();
  }
}

export default new UserService();