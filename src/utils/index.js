//  empty array to store data
 const movieArray = [];

//  create movie class for title and actor object
//  'this' keyword refers to the object it belongs to

class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    
    //  small function to add cli input to moviearray

    add() {
        movieArray.push(this);
    }
};

// export objects to use elsewhere in app

module.exports = {Movie, movieArray};