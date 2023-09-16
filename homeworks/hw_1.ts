// ==================TASK_1====================

// 1. Протипизировать данные:

// 1.1

interface IFaculties {
	id: number
	faculty: string
	subjects: string[]
	countStudents: number
}

const faculties: IFaculties[] = [
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

// 1.2

interface IMovies {
	id: number
	title: string,
	year: number,
	released: string,
	runtime: string,
	genre: string[],
	director: string,
	writer: string,
	actors: string[],
	plot: string,
	country: string,
	poster: string,
	imdbRating: number,
	imdbVotes: number,
	type: string,
	boxOffice: string,
	production: string,
}

const movies: IMovies[] = [
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

// ==================TASK_2====================

// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     2.1. Создать строку из имен пользователей через запятую
//     2.2. Посчитать общее количнство машин у пользователей
//     2.3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     2.4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     2.5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую*

interface IUser {
	name: string,
	phone: string,
	email: string,
	animals?: string[],
	cars?: string[],
	hasChildren: boolean,
	hasEducation: boolean,
}

const users: IUser[] = [
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

function getUserNames(users: IUser[]): string {
	return users.reduce((acc: string, cur: IUser) => {
		return (!acc) ? cur.name : acc + ', ' + cur.name
	} , '');
}

function calcUserCars(users: IUser[]): number {
	return users.reduce((acc: number, cur: IUser) => {
		return cur.cars ? acc+= cur.cars.length : acc;
	}, 0);
}

function filterUsersByEducation(users: IUser[]): IUser[] {
	return users.filter((user: IUser) => user.hasEducation);
}

function filterUsersByAnimals(users: IUser[]): IUser[] | null {
	return users.filter((user: IUser) => user?.animals);
}

function getCarBrand(users: IUser[]): string {	
	const cars: string[] = [];
	users.map((user: IUser) => {
		if (user.cars) user.cars.map((car: string) => {
			if (!cars.includes(car)) cars.push(car); 
		});
	});
	
	return cars.join(', ');
}

console.log(getUserNames(users));
console.log(`Общее количестов машин пользователей: ${calcUserCars(users)}`);
console.log('Пользователи с образованием:');
console.log(filterUsersByEducation(users));
console.log('Пользователи с животными:');
console.log(filterUsersByAnimals(users));
console.log('Марки автомобилей:');
console.log(getCarBrand(users));
