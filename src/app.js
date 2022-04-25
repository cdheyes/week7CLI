const yargs = require("yargs");

const { Movie, movieArray } = require("./utils");




function app (yargsObj) {
    if (yargsObj.add) {
        let movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movieArray);
    } else {
        console.log("incorrect command")
    }
};

app(yargs.argv);