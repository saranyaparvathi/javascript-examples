//Inheritance Example
class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [4];
    this._isCheckedOut = false;
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
 	set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    return ratingsSum/lengthOfArray;
  }
  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
    	this._ratings.push(rating);
    } else {
      console.log('Give valid rating!!')
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, movieCast, songTitles) {
    super(title);
    this._movieCast = movieCast;
    this._songTitles = songTitles;
  }
  
  shuffle() {
    let output = this._songTitles;
    for (let i = this._songTitles.length - 1; i >= 0; i--) {
     
        let randomIndex = Math.floor(Math.random()*(i+1)); 
        let itemAtIndex = output[randomIndex]; 
        output[randomIndex] = output[i]; 
        output[i] = itemAtIndex;
    }
    return output;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
const cd = new CD('DVD', ['John', 'Henry'], ['A', 'B', 'C', 'D']);
console.log(`Shuffling songs : ${cd.shuffle()}`)


