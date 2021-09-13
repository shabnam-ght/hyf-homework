const { movies } = require(`./movies`);
const shortNames = movies.filter((titles)=>titles.title.length<5).map((titles)=>titles.title);
console.log(shortNames);
const longNames = movies.filter((titles)=> titles.title.length>15).map((titles)=>titles.title);
console.log(longNames);
const rangedMovies = movies.filter((years)=> years.year>1980 && years.year<1989).length
console.log(rangedMovies);
const movieWithTag=movies;
movieWithTag.forEach(item => item.tag=calcTag(item.rating));
console.log(movieWithTag);

function calcTag(rating){
  if(rating>=7){
    return 'good';
  }else if(rating>=4){
    return 'average';
  }else{
    return 'bad';
  }
};

const moviesHigherSix=movies.filter(movie=>movie.rating>6).map(movie=>movie.rating);
console.log(moviesHigherSix);
const duplicatedWords=movies.filter(movie=>checkTitle(movie.title)).map(movie => movie.title);
console.log(duplicatedWords);

const contain=movies.filter((value)=> {
  const title= value.title.toLowerCase();
  if (title.includes("surfer")){
      return true;
  }else if (title.includes("alien")){
      return true;
  }else if(title.includes("benjamin")){
return true;}});



const duplicatedTitles = [];
movies
    .map(movie => movie.title.split(' '))
    .forEach(title => title.filter((word, index) => {
        if(title.indexOf(word) != index){
            duplicatedTitles.push(title.join(' '))
        }         
    }));
console.log(duplicatedTitles);





