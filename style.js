// let text = "пРивет Как Дела?"
// let textoLowerCase = text.toLowerCase();
// let textArray = text[0]
// let textToUpperCase = textArray.toUpperCase();
// let textSlice = textoLowerCase.slice(1);
// let textEnd = textToUpperCase + textSlice;
// console.log(textEnd);

// let text2 = "пРивет Как Дела?"
// let textoLowerCase = text2.toLowerCase().slice(1);
// let textoUpperCase = text2[0].toUpperCase();
// let textEnd = textoUpperCase + textoLowerCase;

// let text2End = text2[0].toUpperCase() + text2.toLowerCase().slice(1);
// console.log(text2End);

// let result = function getNamber(namber1, namber2) {
//     return namber1 + namber2;
// }
// console.log(result(2,6));

// function getNamber(namber1, namber2) {
//     console.log(namber1 * namber2);
// }
//
// getNamber(4,6);

//Создали объект cat внутри которого есть пара, ключ и значение.Ключ это - "name", а значение это - "garmonia"
// let cat = {
//     "legs": 4,
//     "name": "garmonia",
//     "age": 6,
//     "color": "grey"
// };

// let cat = {
//     name: "garmonia",
//     age: 6,
//     color: "gray"
// };
//
// console.log(cat.name);

// let dog = {
//     name: "Оладушек",
//     age: 6,
//     color: "Белый",
//     bark: "Гав тяф тяф!"
// };
//
// let cat = {
//     name: "garmonia",
//     age: 8,
//     color: "Черепаховый"
// };
// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// let cat = {};
// cat['legs'] = 3;
// cat['name'] = "garmonia";
// cat['color'] = 'Черепаховый';
// console.log(Object.keys(cat));

// let cat = {};
// cat.legs = 3;
// cat.name = "garmonia";
// cat.color = "Черепаховый";
// console.log(cat);
// console.log(Object.keys(cat));

// let dinosaurs = [
//     {name: "reks", period: "verh"},
//     {name: "Stegozavr", period: "verhneurski"},
//     {name: "plateozavr", period: "trisovi"}
// ];
//
// console.log(dinosaurs[0].name);
//
// let dog = [];
// dog.push ("Один");
// dog.push ("Два");
// dog.push ("Три");
//
// console.log(dog);

// let anna = {name: "Anna", age: 20, luckyNumbers: [2, 4, 8, 16]};
// let dave = {name: "Dave", age: 18, luckyNumbers: [3, 9, 40]};
// let kate = {name: "Kate", age: 22, luckyNumbers: [1, 2, 3]};
//
// let friends = [anna, dave, kate];
//
// console.log(friends[1].luckyNumbers[2]);


// let oweMoney = {};
// oweMoney["Джимми"] = 5;
// oweMoney["Анна"] = 7;
// oweMoney.Катя = 9;
// console.log(oweMoney["Джимми"]);
// oweMoney.Джимми += 3;
// console.log(oweMoney["Джимми"]);
// console.log(oweMoney);


// let movies = {
//     Немо: {
//         releaseDate: 2003,
//         duration: 100,
//         actors: ["Albert", "Ellen"],
//         format: "DVD"
//     },
//     "Звездные войны": {
//         releaseDate: 1983,
//         duration: 134,
//         actors: ["MArk", "Ford", "Fisher"],
//         format: "DVD"
//     },
//     "Гарри Поттер": {
//         releaseDate: 2005,
//         duration: 157,
//         actors: ["Den", "Emma", "Grint"],
//         format: "Blu-ray"
//     }
// };
//
// let car = {
//     releaseDate: 2006,
//     duration: 117,
//     actors: ["Ilson", "Xant", "Pol"],
//     format: "Blu-ray"
// }
//
// movies["Тачки"] = car;
//
// console.log(Object.keys(movies));


// let scores = {};
// scores["Anna"] = 0;
// scores["Kate"] = 0;
// scores["Dave"] = 0;
// scores.Anna += 3;
// scores.Kate += 2;
// scores.Dave += 5;
// console.log(scores);


// let myCrazyObject = {
//     "name": "Нелепый объект",
//     "some array": [7, 9, {purpose: "путаница", number: 123}, 3.3],
//     "random animal": "Банановая акула"
// };
//
// console.log(myCrazyObject["some array"][2].number);


// let x = 123;
// let a = String(x);
// console.log(a);
// console.log(typeof a);

// let date = new Date();
// console.log(date);
// console.log(typeof date);
// console.log(date.length);

// let x = 5;
// let a = x.toString(x);
// console.log(a);
// console.log(typeof(a));

// let x = "5";
// let y = "6";
// let a = Number(x);
// let b = parseInt(y);
// console.log(a);
// console.log(typeof(a));
// console.log(b);
// console.log(typeof(b));


// let randomNumer = Math.trunc(Math.random() * 10 + 1);
// console.log(randomNumer);

// const result = "I like \"Star wars\" movie";
// const ferstName = "Suse";
// const lastName = "Ken";

// console.log(result);
// console.log(result.length);
// console.log(result.slice(7));
// console.log(typeof(result));
//
// console.log(lastName.concat(ferstName));
// console.log(result.toUpperCase());
// console.log(result.toLowerCase());

// console.log(ferstName[2]);
// console.log(ferstName.charAt(2));
// console.log(result.indexOf('s'));
// console.log(result.charAt(16));

// const longString = 'Hi, I\'m a long string'
//
// let result = longString.charAt(longString.length - 1);
// let x = longString.length;
// console.log(longString);
// console.log(result);
// console.log(x);
//
// console.log(longString.substring(10, 14));
// console.log(longString.split(' '));

// const colors = 'red, orange, green, blue';
// let colorsGame = colors.split(',');
// console.log(colorsGame);
// console.log(colorsGame[2]);
//
// console.log(colors.replace('red', 'yellow'));

// let result = colors.includes('grey');
//
// console.log(result);




// // Шаблонные строки new approach (template literals or template strings)
//
// const brand = 'Toyota';
// const model = 'Camry';
// const color = 'black';
// const year = '2008';
//
// let carHtml;
//
// carHtml = `
//     <h3>Car Description</h3>
//     <ul>
//         <li>Brand: ${brand}</li>
//         <li>Model: ${model}</li>
//         <li>Color: ${color}</li>
//         <li>Year: ${year}</li>
//         <li>TestNumber: ${10 + 7}</li>
//         <li>DoorNumver: ${getDoorsNumver()}</li>
//         <li>Tax: ${year < 2010 ? '20%' : '10%'}</li>
//     </ul>
// `
// function getDoorsNumver () {
//     return 5;
// }
// document.body.innerHTML = carHtml;
//
//
// // Конец примера шаблонных строк.



// const myFavoritCalor = 'yellow';
// alert('My favorite color is ' + myFavoritCalor);

// let myFavoritCalor;
// myFavoritCalor = prompt('Whot you Favorits colors?');
// console.log(myFavoritCalor);

// let firstName;
// let lastName;
// let age;
//
// firstName = prompt('What is your first name?');
// lastName = prompt('What is your last name?');
// age = prompt('What is your age?');
// console.log('My first name: ' + firstName + ', my last name: ' + lastName + ', my age: ' + age);

//
// let result;
//
// const height = prompt('Your height?');
// const weight = prompt('Your wihgt?');
//
// const growthSquared = Math.pow(height, 2);
// const resultToFixed = weight / growthSquared;
//
// result = resultToFixed.toFixed(2);
//
// const areYouOverweight = result >= 25;
// console.log(areYouOverweight);
//
// if(result < 25) {
//     console.log('your to norm');
// } else console.log('your fat');
//
// alert('Ваша масса тела: ' + result);




// let age;
// let accompanied = true;
//
// function getAge(age, accompanied) {
//     if(age === 12 || age < 12 && accompanied === true) {
//         return console.log("Вы можете идти на сеанс");
//     } else return console.log("Вам нельзя идти на сеанс");
// }
//
// console.log(getAge(11, false));

// null - означает что в переменной пусто
// undefined - озночает что в переменной пока ещё не присвоено значение

// let dinosaursAndNumbers = [3, "динозавры","трицератопс", "стегозавр", 3627.5, 10];
// dinosaursAndNumbers.push("Новый вид");
// console.log(dinosaursAndNumbers);

// let animals = [];
// animals[0] = "Первый";
// animals[1] = "Второй";
// animals[2] = "Третий";
// animals.push("Пятый");      //push кладет вконец
// animals.unshift("Шестой");  //unshift кладет вперед
// animals.pop();              //pop заберает последний элемент
// console.log(animals);
// animals.shift();            //shift заберает первый элемент
// console.log(animals);
// animals.unshift("Шестой");
// animals.unshift("Седьмой");
// console.log(animals);
// let lastAnimal = animals.pop();
// console.log(lastAnimal);
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);
// animals.unshift(lastAnimal);
// console.log(animals);

// let theFirstArray = ["first", "second", "third"];
// let theSecondArray = ["fourth", "fifth", "sixth"];
// let theThirdArray = ["seventh", "Eighth", "Ninth"];
// let twoArray = theFirstArray.concat(theSecondArray, theThirdArray);
// console.log(twoArray);

// let colors = ["grey", "blue", "red", "blue"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("yellow"));
// console.log(colors[2]);
// console.log(colors[4]);
// console.log(colors.join(" : "));     //Метод join может соединить все элементы массива в одну строку.
// let age = [12, 15, 75];
// console.log(age.join(" "));

// let landmarks = [];
// landmarks.push("Мой дом");          //Метод push кладет в начало массива
// landmarks.push("Дорожка к дому");
// landmarks.push("Мигающий фонарь");
// landmarks.push("Протекающий гидрант");
// landmarks.push("Пожарная станция");
// landmarks.push("Приют для кошек");
// landmarks.push("Моя бывшая школа");
// landmarks.push("Дом подруги");
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));
// landmarks.pop();
// console.log(landmarks.join(", "));

// let matRandomNamber = Math.random() * 10;       //Метод Math.random() возврощает случайное число от 0 до 1
// let matFloorNamber = Math.floor(matRandomNamber);
// let matFloorNamber = Math.floor(Math.random() * 10);
// console.log(matFloorNamber);

// let randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
// let randomIndex = Math.floor(Math.random() * 4);
// randomWords[Math.floor(Math.random() * 4)]
// console.log(randomWords[Math.floor(Math.random() * 4)]);

// let phrases = ["Звучит неплохо",
// "Да, это определенно надо сделать",
// "Не думаю, что это хорошая идея",
// "Может, не сегодня?",
// "Компьютер говорит нет",
// "Мне выпить еще молочного коктейля?"];
// let game = phrases[Math.floor(Math.random() * phrases.length)];
// console.log(game);

// let randomBodyParts = ["глаз", "нос", "череп"];
// let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// let randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
// // let randomInsult = ["У тебя ", randomBodyPart, " словно ", randomAdjective, randomWord, "!!!"].join(" ");
// console.log(randomInsult);

// let phrases = [3, 2, 1];
// console.log(phrases);
// let one = phrases.shift();
// console.log(one);
// let two = phrases.shift();
// console.log(two);
// let three = phrases.shift()
// console.log(three);
// console.log(three);
// let game = [phrases[0], "больше, чем", phrases[1], "больше, чем",  phrases[2], "?"].join(" ");
// console.log(game);

// const age = 18;
// const visitor = prompt('your age?');
// const haveAge = age - visitor;
//
// if (visitor >= age) {
//     alert('you can watch movie');
// } else {
//     // alert('you not can watch movie.' + ' Yor have ' + haveAge + ' years left');
//     alert(`you not can watch movie. Yor have ${haveAge} years left`);
// }




// const norm = 25;
// const height = prompt('your to height?');
// const weight = prompt('your to weight?');
// const bodyMass = Math.pow(height, 2);
// const resultMass = weight / bodyMass;
// const resultMoreOn = resultMass - norm;
//
// if(resultMass <= norm) {
//     alert('Your weight to norm');
//     console.log('Your weight to norm');
// } else {
//     alert(`Your weight more on ${resultMoreOn}`);
//     console.log(`Your weight more on ${resultMoreOn}`);
// }
// console.log(resultMass);



// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log();
// console.log(Boolean(10));
// console.log(Boolean('10'));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(3.5));

// let age = 1;
// if(age) {
//     console.log('new');
// } else {
//     console.log('not');
// }




//Три Boolean оператора - AND (&&), OR (||), NOT (!)

// //AND
// console.log(true && true);      //true
// console.log(true && false);     //false
// console.log(false && false);    //false
// console.log();
// //OR
// console.log(true || true);      //true
// console.log(true || false);     //true
// console.log(false || false);    //false
// console.log();
// //NOT
// console.log(!true);
// console.log(!false);


// let productionPlan;         //План производство
// let receivedOnWarehouse;    //Поступило на склад
// let sales;                  //Продано
// x = 10;
// console.log(x -= 5);




//Switch Statement

// const color = 'green';
// switch (color) {
//     case 'green':
//         console.log('Go!');
//         break;
//     case 'yellow':
//         console.log('get ready');
//         break
//     case 'red':
//         console.log('STOP!');
//         break
//     default:
//         console.log('Incorrect color!');
// }

// const weekday = 'saturday';
// switch (weekday) {
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     case 'wednesday':
//         console.log('wednesday');
//         break;
//     case 'thursday':
//         console.log('thursday');
//         break;
//     case 'friday':
//         console.log('friday');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('saturday');
//         break;
//     default:
//         console.log('This is not a weekday i know');
// }




// //Expressins производит значения
// 5 + 2
// 37
// true && false
//
// //Statements это как предложения, которые мы объясним компьютеру
// const number = 10;
// if(number > 0) {
//     const text = 'The number is positive';
// }


// //Тернарный оператор (сравниваем >= сравниваем ? true : false)
// const money = 100;
// const cost = 110;
// const canYouBuyIt = money >= cost ? 'You can buy it' : 'You can not buy it';
// console.log(canYouBuyIt);
// console.log(`You can ${money >= cost ? '' : 'not '}buy it`)



// const normalAge = 18;
// const age = prompt('Enter you age');
// const result = age >= normalAge ? alert('You can buy the alcohol') : alert('You can not buy the alcohol, you are too young');
// console.log(`You can ${age >= normalAge ? 'buy the alhogol' : 'not buy the alcohol, you are too young'}`);


// const age = 18;
// const result = prompt('You age?');
// const resultAge = result >= age ? 'You are drink' : 'You are not drink';
// alert(resultAge);
// console.log(resultAge);






// 'use strict' //активация строгого режима (Strict mode)
// let sertificat = false;
// const exam = true;
// if(exam) sertificat = true;
// if(sertificat) console.log('WOW!')




//Среднее значение вычисляется путем сложения всех элементов, а затем деления на количество элементов.
const arrayDept1 = [35467, 29842, 38501];
const arrayDept2 = [70533, 50121, 33899];

function getArrayDept() {
    let resultNamber = 0;
    for(let x = 0; x < arrayDept1.length; x++) {
    resultNamber += arrayDept1[x];
    }
    let result = resultNamber / arrayDept1.length;
    return result;
}
const getresult = getArrayDept(arrayDept1);
console.log(getresult);
