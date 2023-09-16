// ==================TASK_1====================
var faculties = [
    {
        id: 1,
        faculty: "History department",
        subjects: ["The World History", "History of Rome"],
        countStudents: 44
    },
    {
        id: 2,
        faculty: "Department of Biology",
        subjects: ["biology", "chemistry"],
        countStudents: 50
    },
    {
        id: 3,
        faculty: "Faculty of Mathematics",
        subjects: ["mathematics", "geometry", "trigonometry"],
        countStudents: 72
    },
    {
        id: 4,
        faculty: "Faculty of Design",
        subjects: ["ui", "ux", "graphic design"],
        countStudents: 37
    },
];
var movies = [
    {
        id: 1,
        title: "Black Widow",
        year: 2021,
        released: "09 Jul 2021",
        runtime: "134 min",
        genre: ["Action", "Sci-Fi", "Adventure"],
        director: "Cate Shortland",
        writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
        actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
        plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
        country: "United States",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        imdbRating: 6.9,
        imdbVotes: 121932,
        type: "movie",
        boxOffice: "$138,027,361",
        production: "Marvel Studios",
    },
    {
        id: 2,
        title: "Harry Potter and the Deathly Hallows: Part 2",
        year: 2011,
        released: "15 Jul 2011",
        runtime: "130 min",
        genre: ["Adventure", "Drama", "Fantasy"],
        director: "David Yates",
        writer: "Steve Kloves, J.K. Rowling",
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        country: "United Kingdom, United States",
        poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        imdbRating: 8.1,
        imdbVotes: 790377,
        type: "movie",
        boxOffice: "$381,409,310",
        production: "Heyday Films, Moving Picture Company, Warner Bros.",
    },
];
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    },
];
function getUserNames(users) {
    return users.reduce(function (acc, cur) {
        return (!acc) ? cur.name : acc + ', ' + cur.name;
    }, '');
}
function calcUserCars(users) {
    return users.reduce(function (acc, cur) {
        return cur.cars ? acc += cur.cars.length : acc;
    }, 0);
    // let countCars: number = 0;
    // users.forEach(user => {
    // 	if (user.cars) countCars += user.cars.length;
    // });
    // return countCars;
}
function filterUsersByEducation(users) {
    return users.filter(function (user) { return user.hasEducation; });
}
function filterUsersByAnimals(users) {
    return users.filter(function (user) { return user === null || user === void 0 ? void 0 : user.animals; });
}
function getCarBrand(users) {
    var cars = [];
    users.map(function (user) {
        if (user.cars)
            user.cars.map(function (car) {
                if (!cars.includes(car))
                    cars.push(car);
                // cars.push(car); 
            });
    });
    return cars.join(', ');
    // return cars ? cars.reduce((acc: string, cur: string) => (!acc) ? cur : (acc + ', ' + cur), '') : null;
}
console.log(getUserNames(users));
console.log("\u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u043E\u0432 \u043C\u0430\u0448\u0438\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: ".concat(calcUserCars(users)));
console.log('Пользователи с образованием:');
console.log(filterUsersByEducation(users));
console.log('Пользователи с животными:');
console.log(filterUsersByAnimals(users));
console.log('Марки автомобилей:');
console.log(getCarBrand(users));
