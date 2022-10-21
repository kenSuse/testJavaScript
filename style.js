// //Преобразовать строку в число или число в строку
// const number = Number('80');
// console.log(number);
// const string = String('80');
// console.log(string);




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
// const arrayDept1 = [35467, 29842, 38501];
// const arrayDept2 = [70533, 50121, 33899];
//
// function getArrayDept() {
//     let resultNamber = 0;
//     for(let x = 0; x < arrayDept1.length; x++) {
//     resultNamber += arrayDept1[x];
//     }
//     let result = resultNamber / arrayDept1.length;
//     return result;
// }
// const getresult = getArrayDept(arrayDept1);
// console.log(getresult);





//Метод Math.floor() - Округляет аргумент до ближайшего меньшего целого



//Функции

// function printText() {
//     console.log('Hello!');
// }
// printText();
// printText();
// printText();


// function colorizer(item, color, colorCode) {
//     const colorizedItem = `The ${item} is ${color}. The code of the color is ${colorCode}`;
//     return colorizedItem;
// }
// const messegeFrromCororizer = colorizer('desk', 'green', 954565);
// console.log(`We have the following message: ${messegeFrromCororizer}`);
// const messegeFrromCororizer2 = colorizer('desk', 'red', 459632);
// console.log(`We have the following message: ${messegeFrromCororizer2}`);







//Declaration vs Expression

//Declaration Функция может быть вызвана до того как она была задекларирована (В случае если это действительно необходимо)
// const myAge1 = getAge1(1986, 2022);
// console.log(myAge1);

// function getAge1(birthYear, yearNow) {
//     return yearNow - birthYear;
// }

// //Expression Функция вызывается после её определения.
// const getAge2 = function(birthYear, yearNow) {
//     return yearNow - birthYear;
// }
// const myage2 = getAge2(1986, 2022);
// console.log(myage2);


//Стрелочные функции
// const getAge3 = (birthYear, yearNow) => yearNow - birthYear;
// const myAge3 = getAge3(1986, 2022);
// console.log(myAge3);
//
// const canBuyAlcohol = (birthYear, yearNow) => {
//     const age = yearNow - birthYear;
//     const isPersonOlderThan18 = age >= 18 ? true : false;
//     return isPersonOlderThan18;
// }
// const resultAge = canBuyAlcohol(2006, 2022);
// console.log(resultAge);

//Вызов функции в другой функции
// function colorMixer(color1, color2) {
//     const newColor = `The ${color1} is ${color2}`;
//     return newColor;
// }
// function colorizer(item, color1, color2) {
//     const color = colorMixer(color1, color2);
//     const colorizedItem = `The ${item} is: ${color}.`;
//     return colorizedItem;
// }
// const resultColor = colorizer('car', 'red', 'orange');
// console.log(resultColor);
// console.log(colorizer('house', ' white', 'grey'));

//Задача отдела продаж
// const getAverage = (month1, month2, month3) => (month1 + month2 + month3) / 3;
//
// function printBonus(month1, month2, month3, month4, month5, month6) {
//     const dep1Aversales = getAverage(month1, month2, month3);
//     const dep2Aversales = getAverage(month4, month5, month6);
//     console.log(dep1Aversales);
//     console.log(dep2Aversales);
//     let c = 0;
//     let p = 0;
//     let integerNumber = 0;
//     if (dep1Aversales > dep2Aversales) {
//         c = dep1Aversales - dep2Aversales;
//         p = c / dep2Aversales * 100;
//
//         integerNumber = Math.floor(p);
//         if (integerNumber > 30) {
//             return `Отдел 1 получил бонус в размере ${integerNumber}%`
//         } else return 'Лидирующего отдела нет.'
//     } else if (dep2Aversales > dep1Aversales) {
//         c = dep2Aversales - dep1Aversales;
//         p = c / dep1Aversales * 100;
//         integerNumber = Math.floor(p);
//         if (integerNumber > 30) {
//             return `Отдел 2 получил бонус в размере ${integerNumber}%`
//         } else return 'Лидирующего отдела нет.'
//     } else return 'Лидирующего отдела нет.'
// }
// const result = printBonus(35467, 29842, 38501, 35467, 50121, 38501);
// console.log(result);



//Expression. функция вызывается после её создания. const printBonus = function (dep1Aversales, dep2Aversales) {}
//Declaration. Функция вызывается до её создания. function printBonus(dep1Aversales, dep2Aversales) {}

// const getAverage = (month1, month2, month3) => (month1 + month2 + month3) / 3;
// function printBonus(dep1Aversales, dep2Aversales) {
//     let c = 0;
//     let p = 0;
//     let integerNumber = 0;
//     if (dep1Aversales > dep2Aversales) {
//         c = dep1Aversales - dep2Aversales;
//         p = c / dep2Aversales * 100;
//         integerNumber = Math.floor(p);
//         if (integerNumber >= 30) {
//             return `Отдел 1 получил бонус в размере ${integerNumber}%`
//         } else {
//             return `Отрыв у отдела 1 составил ${integerNumber}%.`
//         }
//     } else if (dep2Aversales > dep1Aversales) {
//         c = dep2Aversales - dep1Aversales;
//         p = c / dep1Aversales * 100;
//         integerNumber = Math.floor(p);
//         if (integerNumber >= 30) {
//             return `Отдел 2 получил бонус в размере ${integerNumber}%`
//         } else {
//             return `Отрыв менее у отдела 2 составил ${integerNumber}%.`
//         }
//     } else {
//         return 'Лидирующего отдела нет.'
//     }
// }
// const dep1Aversales1 = getAverage(35467, 29842, 38501);
// const dep2Aversales1 = getAverage(70533, 50121, 33899);
// const dep1Aversales2 = getAverage(50301, 21984, 19207);
// const dep2Aversales2 = getAverage(72381, 41562, 29465);
// const result1 = printBonus(dep1Aversales1, dep2Aversales1);
// const result2 = printBonus(dep1Aversales2, dep2Aversales2);
// console.log(result1);
// console.log(result2);







//Array (Массивы)

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log(colors);
// colors[5] = 'dark blue';
// console.log(colors);
// colors[colors.length] = 'indigo';
// console.log(colors);
//
// const stringNumber = [];
// stringNumber[0] = 'one';
// stringNumber[1] = 'two';
// stringNumber[2] = 'three';
// console.log(stringNumber);

// const stringNumber = new Array('one', 'two', 'three');
// console.log(stringNumber);
//
// const anyItems = [4, true, new Date(), 'one'];
// console.log(anyItems);


//Методы массивов
// const numbers = [23, 24, 87, 99];
// let result;
//
// result = numbers.length;
// console.log(result);
//
// result = Array.isArray(numbers);        // метод Array.isArray() проверяет является это массивом или нет.
// console.log(result);
//
// result = numbers.indexOf(87);            // метод indexOf() ищит индекс по значению.
// console.log(result);
//
// result = numbers.push(64);             // метод push(значение) добавляет в конец массива новое значение и возврощает в переменную result длинну массива. Можно помещать несколько значений push(64, 35, 45)
// console.log(result);
// console.log(numbers);
//
// result = numbers.pop();                // метод pop() забирает последнее значение в массиве и забранное значение возврощается в переменную result
// console.log(result);
// console.log(numbers);
//
// result = numbers.unshift(10, 25, 96);            // метод unshift(значение) кладет в начало массива значение. Можно помещать несколько значений unshift(58, 45. 96, 32)
// console.log(result);
// console.log(numbers);
//
// result = numbers.shift();                // метод shift() забирает первое значение из массива и возврощает это значение в переменную result
// console.log(result);
// console.log(numbers);
//
// result = numbers.splice(0, 1);          // метод splice(0, 1) забирает из массива выбранные значение. В данном случае:  с первого индекса(0) сколько всего значений будет забрано(1)
// console.log(result);
// console.log(numbers);
//
// result = numbers.reverse();             // метод reverse() разварачивает все значения в массиве. как result так и в numbers возврощается перевернутый массив.
// console.log(result);
// console.log(numbers);
//
// result = numbers.slice(1, 4);           // метод slice(1, 4) копирует часть массива и возвращает в result новый массив.
// console.log(result);
// console.log(numbers);
//
// result = numbers.concat(result);        // массив concat(result) склеивает два массива и возврощает в result один массив.
// console.log(result);
// console.log(numbers);

// let one = [1,2,3];          //Массив является ссылкой на объект. Если меняется в копии массива то меняется и в основном массиве
// let two = one;
// two.pop();
// console.log(one);
// console.log(two);





//Tips Calculator Task
// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;
//
// const bills = [11, 20, 47];
// const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];
// const billTips = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//
// console.log(tips);
// console.log(billTips);


//Tips Calculator Task
// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;
//
// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
// const tips = [];
// const total = [];
//
// for (let x = 0; x < bills.length; x++) {
//     tips.push(calculateTips(bills[x]));
//     total.push(bills[x] + tips[x]);
// }
//
// function calculateAverage(arr) {
//     let sum = 0;
//     for (let x = 0; x < arr.length; x++) {
//         sum += arr[x];
//     }
//     return Math.trunc(sum /= arr.length);
// };
// console.log(calculateAverage(total));



//Объекты
// myData = {
//     ferstname: 'Youra',
//     lastname: 'Suse',
//     age: 36,
//     familyMembers: ['one', 'two', 'three']
// };
// console.log(myData.familyMembers[1]);
// console.log(myData.familyMembers.length);
// console.log(myData['ferstname']);

// const baseName = 'name';
// console.log(myData['last' + baseName]);
//
// const userInput = prompt('What do you want to know anout Youra? Choose between ferstname, lastname, age, familyMembers');
// if(myData[userInput]) {
//     console.log(myData[userInput]);
// } else {
//     console.log('Такого значения нет');
// }

//Создаем ноыве свойства с помощью оператора доступа и квадратных скобок.
// myData.location = 'Rossia';
// myData['telegram'] = '@tel';
// const telegram = 'telegram';
// myData.telegram = '@telegram';
// console.log(myData);
// console.log(myData.ferstname + ' has ' + myData.familyMembers.length + ' family members and the first one is ' + myData.familyMembers[0]);
// console.log(`${myData.ferstname} has ${myData.familyMembers.length} family members and the first one is ${myData.familyMembers[0]}`);

//Методы объектов
// myData = {
//     ferstname: 'Youra',
//     lastname: 'Suse',
//     berthYear: 1986,
//     familyMembers: ['one', 'two', 'three'],
//     drivrKicense: true,
//     // calcAge: function () {                           //Любая функция которая находится в объекте называется методом объекта
//     //     // console.log(this);
//     //     return 2022 - this.berthYear;
//     // }
//     calcAge: function () {
//         this.age = 2022 - this.berthYear;
//     }
// };
// console.log(myData.calcAge(myData.berthYear));                //В первом варианте мы используем оператор доступа (.) - точка
// console.log(myData['calcAge'](myData['berthYear']));          //Во втором варианте мы используем [] - квадратные скобки, но в таком случае необходимо указать название значения или функции как строку - ['calcAge']
// console.log(myData.calcAge());
// myData.calcAge();
// console.log(myData.age);

// myData = {
//     ferstname: 'YouRa',
//     lastname: 'Suse',
//     berthYear: 1986,
//     job: 'programming instructor',
//     familyMembers: ['one', 'two', 'three'],
//     drivrKicense: true,
//     calcAge: function () {
//         // this.age = 2022 - this.berthYear;
//         return 2022 - this.berthYear;
//     },
//     getSamore: function () {
//         return `${this.ferstname} is a ${this.calcAge()}-years old ${this.job} and he has ${(this.drivrKicense) ? 'a' : 'no'} driver license`;
//     }
// };
// // myData.calcAge();
// // console.log(myData.age);
// console.log(myData.getSamore());
// myData.drivrKicense = false;
// console.log(myData.getSamore());


//Задача по объекта
// jack = {
//     ferstName: 'Jack',
//     lastName: 'White',
//     weight: 91,
//     height: 1.93,
//     BMI: function () {
//         this.bmi = this.weight / (Math.pow(this.height, 2));
//         return this.bmi;
//     }
// };
// mike = {
//     ferstName: 'Mike',
//     lastName: 'Black',
//     weight: 79,
//     height: 1.70,
//     BMI: function () {
//         this.bmi = this.weight / (Math.pow(this.height, 2));
//         return this.bmi;
//     }
// };
// console.log(jack.BMI());
// console.log(mike.BMI());
// if(jack.bmi > mike.bmi) {
//     console.log(`BMI ${jack.ferstName} ${jack.lastName} (${jack.bmi}) higher than ${mike.ferstName} ${mike.lastName} (${mike.bmi})!`);
// } else if (mike.bmi > jack.bmi) {
//     console.log(`BMI ${mike.ferstName} ${mike.lastName} (${mike.bmi}) hegher than ${jack.ferstName} ${jack.lastName} (${jack.bmi})!`);
// } else {
//     console.log(`BMI ${mike.ferstName} and ${jack.ferstName} equal (${mike.bmi})!`);
// }


//Условия и циклы
// let myName = 'ken';
// if(myName === 'ken') {
//     console.log('Hello to me');
// } else if (myName === 'dad') {
//     console.log(`Hello ${myName}`);
// } else if (myName === 'mam') {
//     console.log(`Hello ${myName}`);
// }
// else {
//     console.log('Hello strenger');
// };
// for(let x = 3; x < 10000; x *= 3) {
//     console.log(x);
// };


// const animals = ['кот', 'рыба', 'лемур', 'комодский варан'];
// for(let x = 0; x < animals.length; x++) {
//     animals[x] += ' - прекрасное животное';
// };
// console.log(animals);


// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьюя';
// let randomString = '';
// while (randomString.length < 9) {
//     let randomString2 = (Math.floor(Math.random() * alphabet.length));
//     randomString += alphabet[randomString2];
// };
// console.log(randomString);


// const input = 'javascript is awesome';
// let output = '';
// for(let x = 0; x < input.length; x++) {
//     if(input[x] === 'a') {
//         output += 4;
//     } else if (input[x] === 'e') {
//         output += 3;
//     } else if (input[x] === 'i') {
//         output += 1;
//     } else if (input[x] === 'o') {
//         output += 0;
//     } else {
//         output += input[x];
//     }
// }
// console.log(output);


// const likeCats = confirm('Нравятся ли Вам кошки?');
// const result = (likeCats) ? 'Ты класная кошка!' : 'Что ж, не переживай. Всё равно ты молодец!';
// alert(result);



// const drawCats = function (howManyTimes, whatToDraw) {
//     const mas1 = [];
//     for(let x = 0; x < howManyTimes; x++) {
//         mas1.push(`${x} ${whatToDraw} `);
//     }
//     return mas1;
// };
// const result = drawCats(10, '=^.^=');
// console.log(result.join());



// function pickRandomWord(word) {
//     return word[Math.trunc(Math.random() * word.length)];
// };
// function generateRandomInsult() {
//     const randomBodyParts = ["глаз", "нос", "череп"];
//     const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//     return `У тебя ${pickRandomWord(randomBodyParts)} словно ${pickRandomWord(randomAdjectives)} ${pickRandomWord(randomWords)}!!!`;
// };
// const result = generateRandomInsult();
// console.log(result);


// function add(n1, n2) {
//     return n1 + n2;
// };
// function multiply(a1, a2) {
//     return a1 * a2;
// };
// // const resultAdd = add(9824, 777);
// // console.log(multiply(36325, resultAdd));
// console.log(multiply(36325, add(9824, 777)));


// function areArraysSame(arr1, arr2) {
//     let result = [];
//     for (let x = 0; x < arr1.length; x++) {
//         if (arr1[x] === arr2[x]) {
//             result.push(arr1[x]);
//         }
//         else {
//             return false;
//         }
//     }
//     if (arr1.length === result.length && arr1.length === arr2.length) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));




// //Game висилица
// //Создаем массив с словами
// const words = ['май', 'весна', 'живот', 'привет', 'пока'];
// //Функция pickWord() возвращает случайно выбранное слово из массива words
// function pickWord() {
//     return words[Math.trunc(Math.random() * words.length)];
// };
// //Функция setupAnswerArray() Возвращает итоговый массив для заданного слова word
// function setupAnswerArray(wrd) {
//     let answerArray = [];
//     for (let a = 0; a < wrd.length; a++) {
//         answerArray.push('_');
//     }
//     return answerArray;
// };
// //С помощью alert отображает текущее состояние игры
// function showPlayerProgress(arr) {
//     return alert(arr.join(' '));
// };
// //Запрашивает ответ игрока с помощью prompt
// function getGuess() {
//     return prompt('Угадайте букву или нажмите отмена для выхода из игры');
// };
// //Обновляет answerArray согласно ответу игрока (guess) возвращает число, обозначающее, сколько раз буква guess встречается в слове, чтобы можно было обновить значение remainingLetters
// function updateGameState(guess, word, answerArray) {
//     let result = 0;
//     for (let a = 0; a < word.length; a++) {
//         if (word[a] === guess.toLowerCase()) {
//             if (answerArray[a] != guess.toLowerCase()) {
//                 answerArray[a] = word[a];
//                 result++;
//             }
//         }
//     }
//     attempts--;
//     return result;
// };
// //С помощью alert показывает игроку отгаданное слово и поздравляет его с победой или проигрышем
// function showAnswerAndCongratulatePlayer() {
//     if (remainingLetters === 0) {
//         alert(answerArray.join(' '));
//         alert(`Вы выиграли! Было загадано слово - ${word}`);
//     } else {
//         alert(`Вы проиграли. Было загадано слово - ${word}`);
//     };
// };
//
// const word = pickWord();
// const answerArray = setupAnswerArray(word);
// let remainingLetters = word.length;
// let attempts = remainingLetters * 3;
// while (remainingLetters > 0 && attempts > remainingLetters) {
//     showPlayerProgress(answerArray);
//     const guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert('Пожалуйста, введите одиночную букву.');
//     } else {
//         const correctGuesses = updateGameState(guess, word, answerArray);
//         remainingLetters -= correctGuesses;
//     }
// };
// showAnswerAndCongratulatePlayer(answerArray);



// const humidities = [32, 45, 29, 19, 'eror', 58, 71, 103, 47, 33, 42, 51, 49];
// const humidities2 = [32, 45, 29, 19, 58, 71, 103, 47, 33, 42, 165, 51, 49];
//
// function calculateHumiditiesAmplitude(hum1, hum2) {
//     const hum = hum1.concat(hum2);
//     let max = hum[0];
//     let min = hum[0];
//     for (let x = 1; x < hum.length; x++) {
//         const currentHum = hum[x];
//         if (typeof currentHum !== 'number') continue;   // continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации.
//         if (currentHum > max) {
//             max = currentHum;
//         }
//         if (currentHum < min) {
//             min = currentHum;
//         }
//     };
//     console.log(`min ${min}, max ${max}`);
//     return max - min;
// };
// const result = calculateHumiditiesAmplitude(humidities, humidities2);
// console.log(result);


// function celciusToKelvin() {
//     measurement = {
//         type: 'temp',
//         init: 'celsius',
//         value: Number(prompt('Temperature in Celcius: '))
//     };
//     console.table(measurement);                 //Вывод данных в таблице.
//     debugger;
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     return measurement.value + 273;
// };
// console.log(celciusToKelvin());



//1. Приложение должно отобразить строку с прогнозируемой влажностью из заданного массива.
//2. Необходимо создать функцию которая должна принимать в параметрах массив чисел влажности и возвращать строку о влажности.
//2.1. В функции необходимо создат цикл for для перебора всех цифр и записать их в итоговую переменную которую вернет функция
// const data1 = [49, 51, 63];
// const data2 = [31, 29, 43, 58, 52];
// function printHumiditesForecast(arr) {
//     let resultPrint = '... ';
//     for(let a = 0; a < arr.length; a++) {
//         resultPrint += `${arr[a]}% humidity in ${a + 1} days ... `;
//     }
//     return resultPrint;
// };
// console.log(printHumiditesForecast(data2));










//DOM and JQUERY
// document.querySelector('.hello-h1').textContent = ' ';
// const result = document.querySelector('.hello-h1');
// console.log(result.innerHTML);
// const newHeadingText = prompt('Введите новый заголовок');
// result.innerHTML = newHeadingText;
// result.textContent = newHeadingText;

// const newHeadingText = prompt('Введите новый заголовок');
// $('.hello-h1').text(newHeadingText);
// $('body').append('<p>Это новый параграф</p>');
// for(let x = 0; x < 2; x++) {
//     let hobby = prompt(`Напишите одно из своих хобби! ${x + 1} from 2`);
//     $('body').append(`<p> ${hobby} </p>`);
// }
// $('h1').fadeOut(3000);

// $('h1').text('Этот текст скоро исчезнет').fadeOut(3000);
// $('.hello-h1').slideUp(3000).SlideDown(2000);
// $('.hello-h1').fadeOut(3000);
// $('.hello-h1').fadeIn(2000);
// for (let x = 0; x < 5; x++) {
//     $('.hello-h1').fadeOut(3000);
//     $('.hello-h1').fadeIn(2000);
// };

// ('.hello-h1').show();
// ('.hello-h1').hide();

// const people = ['ken', 'chack', 'lysi'];
// for(let x = 0; x < people.length; x++) {
//     $('body').append(`<p>${people[x]}</p>`);
// };
// const nameh1 = document.querySelector('.hello-h1');
// nameh1.innerHTML = 'Мои друзья';
//
// $('p').hide().fadeIn(3000);
// $('p').append(` лучший!`);


// for(let x = 1; x <= 5; x++) {
//     $('.hello-h1').fadeOut(`${x}000`).fadeIn(`${x}000`);
// }


// $('.hello-h1').fadeOut().delay(5000).fadeIn();
// $('.hello-h1').fadeTo(2000, 0.5);

// const timeUp = function () {
//     alert('Время вышло!');
// }
// const result = setTimeout(timeUp, 5000);
// clearTimeout(result);

// let counter = 5;
// const printMessege = function() {
//     console.log(`Ты смотришь в консоль уже ${counter} секунд`);
//     counter += 5;
// };
// const intervalID = setInterval(printMessege, 5000);

// let leftOffset = 0;
// const moveHeading = function () {
//     $('.hello-h1').offset({ left: leftOffset });
//     leftOffset++;
//     if (leftOffset > 200) {
//         leftOffset = 0;
//     }
// };
// setInterval(moveHeading, 30);

// const clickHandler = function(event) {
//     console.log(`Клик ${event.pageX}  ${event.pageY}`);
// };
// $('h1').click(clickHandler);

// $('html').mousemove(function (event) {
//     $('.hello-h1').offset({
//         left: event.pageX,
//         top: event.pageY
//     })
// });

// $('html').click(function (event) {
//     $('.hello-h1').offset({
//         left: event.pageX,
//         top: event.pageY
//     })
//     console.log(`${event.pageX} ${event.pageY}`);
// });




//Игра "Кликни по заголовку"
// const stopH1 = document.querySelector('.hello-h1');
//
// let leftOffset = 0;
// let direction = 'вправо';
//
// const moveHeading = function () {
//     if (direction == 'вправо') {
//         $('.hello-h1').offset({ left: leftOffset });
//         leftOffset++;
//         if (leftOffset >= 200) {
//             direction = 'вниз';
//             leftOffset = 0;
//         }
//     } else if (direction === 'вниз') {
//         $('.hello-h1').offset({ top: leftOffset });
//         leftOffset++;
//         if (leftOffset >= 200) {
//             direction = 'влево';
//             leftOffset = 200;
//         }
//     } else if (direction === 'влево') {
//         $('.hello-h1').offset({ left: leftOffset });
//         leftOffset--;
//         if (leftOffset <= 0) {
//             direction = 'вверх';
//             leftOffset = 200;
//         }
//     } else if (direction === 'вверх') {
//         $('.hello-h1').offset({ top: leftOffset });
//         leftOffset--;
//         if (leftOffset <= 0) {
//             direction = 'вправо';
//             leftOffset = 0;
//         }
//     }
// };
//
// let numberRepitSpeed = 40;
// let result = setInterval(moveHeading, numberRepitSpeed);
//
// let cursorPush = 1;
// stopH1.addEventListener('click', function () {
//     clearInterval(result);
//     stopH1.textContent = cursorPush;
//     console.log(cursorPush);
//     cursorPush += 1;
//     numberRepitSpeed /= 2;
//     console.log(numberRepitSpeed);
//     if (cursorPush > 10) {
//         stopH1.textContent = 'Вы победили!';
//     } else {
//         result = setInterval(moveHeading, numberRepitSpeed);
//     }
// });




//Игра найди клад
//Получаем случайное число
// const getRandomNumber = function (size) {
//     return Math.trunc(Math.random() * size);
// };
// //Вычисляем расстояние от клика (event) до клада (target)
// const getDistance = function (event, target) {
//     let diffX = event.offsetX - target.x;
//     let diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX * diffX) + (diffY * diffY));
// };
// //Получить для расстояния строку подсказки
// const getDistanceHint = function (distance) {
//     if (distance < 10) {
//         return 'Обожжешься!';
//     } else if (distance < 20) {
//         return 'Очень горячо!';
//     } else if (distance < 40) {
//         return 'Горячо';
//     } else if (distance < 80) {
//         return 'Тепло';
//     } else if (distance < 160) {
//         return 'Холодно';
//     } else if (distance < 320) {
//         return 'Очень холодно';
//     } else if (distance < 500) {
//         return 'Очень-очень холодно!';
//     }
//     else {
//         return 'Замерзнешь!';
//     }
// };
// //Создаем переменные
// const widht = 800;
// const height = 800;
// let clicks = 0;
// let gameOwer = 20;
// //Случайная позиция клада
// const target = {
//     x: getRandomNumber(widht),
//     y: getRandomNumber(height)
// };
// //Добавляем элементу img обработчик клика
// $('.map').click(function (event) {
//     clicks++;
//     gameOwer--;
//     //Получаем расстояник от места клика до клада
//     let distance = getDistance(event, target);
//     //Преобразуем расстояние в подсказку
//     let distanceHint = getDistanceHint(distance);
//     //Записываем в элемент distance новую подсказку
//     $('.distance').text(distanceHint + `. У Вас осталось: ${gameOwer} кликов`);
//     //Если клик был достаточно близко, поздравляем с победой
//     if (distance < 8) {
//         alert('Клад найден! Сделано кликов:' + clicks);
//     }
//     if (clicks === 20) {
//         alert('КОНЕЦ ИГРЫ');
//     }
// });



//Сортировка
// const arrayNumber = [17, 65, 78, 32, 96, 02, 47, 65, 98, 157];
// function bubbleSortConcept(arrayNumber) {
//     for (let x = 0; x < arrayNumber.length; x++) {
//         for (let y = 0; y < x; y++) {
//             if (arrayNumber[x] > arrayNumber[x + 1]) {
//                 let temp = [arrayNumber[x]];
//                 arrayNumber[x] = arrayNumber[x + 1];
//                 arrayNumber[x + 1] = temp;
//             }
//         }
//     }
//     return arrayNumber;
// };
// const result = bubbleSortConcept(arrayNumber);
// console.log(result.join());

// const arrayNumber = [17, 65, 78, 32, 96, 02, 47, 65, 98, 157];
// arrayNumber.sort(function(a, b) {
//     return a - b;
// });
// console.log(arrayNumber.reverse());


// function encrypt(text) {
//   let resultString = '';
//   for (let x = 0; x < text.length; x++) {
//     if ((x % 2) !== 0) {
//       resultString += text[x] + text[x - 1];
//     }
//   }
//   if ((text.length % 2) !== 0) {
//     return resultString + text[text.length - 1];
//   } else {
//     return resultString;
//   }
// }
// console.log(encrypt('omev!'));


// //Каждое третье (number) число делает символ заглавным
// function  makeItFunny(text, number) {
//     let count = 0;
//     let newStr = '';
//     while(count < text.length) {
//         if((count + 1) % number === 0) {
//             newStr += text[count].toUpperCase();
//         } else {
//         newStr += text[count];
//         }
//         count++;
//     }
//    return newStr;
// };
// console.log(makeItFunny('I never look back', 3));
//
//
// //Меняет местами второй с первым символами. Если длинна строки не чётная тогда добавляется последний символ в новую строку
// function  encrypt(text) {
//     let resString = '';
//     let count = 0;
//     for(let x = 0; x < text.length; x++) {
//         if(count % 2 !== 0) {
//             resString += text[count] + text[count - 1];
//         }
//         count++;
//     }
//     if(text.length % 2 !== 0) {
//         resString += text[text.length - 1];
//     }
//     return resString;
// };
// console.log(encrypt('move'));



//STAGE 7

// const japaneseRestaurant = {
//     name: 'Banzai',
//     location: '108 Markham Woods Rd, Londwood, USA',
//     categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//     appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamane', 'Sushi rice'],
//     mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//     workingHours: {
//         wed: {
//             open: 10,
//             close: 23,
//         },
//         fri: {
//             open: 10,
//             close: 23,
//         },
//         sun: {
//             open: 12,
//             close: 23,
//         }
//     },
//     orderFood: function (appetizersIndex, mainMenuIndex) {
//         return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//     },
//     foodDelivery: function ({ mainMenuIndex = 0, appetizersIndex = 0, address, deliveryTime = '18:00' }) {
//         console.log(`Your order on the way to uou! ${this.mainMenu[mainMenuIndex]} and ${this.appetizers[appetizersIndex]} will be arrived to ${address} at ${deliveryTime}`);
//     },
// };
//
// japaneseRestaurant.foodDelivery({
//     mainMenuIndex: 1,
//     appetizersIndex: 2,
//     address: '8 Markham Woods Rd, Londwood, USA',
//     deliveryTime: '14:00',
// });
// japaneseRestaurant.foodDelivery({
//     address: '8 Markham Woods Rd, Londwood, USA',
// });

//Деструктуризация — это способ распаковки из массивов и объектов в отдельные переменные.
//Деструктуризация массивов (arrays) - []
//Деструктуризация объектов (objects) - {}


//Деструктуризация Объектов
// const {categories, name: restName, workingHours: hours} = japaneseRestaurant;
// console.log(categories, restName, hours.sun);

//Default values
// const {menu = [], appetizers: starterMenu = []} = japaneseRestaurant;
// console.log(menu, starterMenu);

//Изменение переменных
// let x = 3;
// let y = 5;
// const obj = {x: 11, y:22, z: 33};
// ({x, y} = obj);
// console.log(x, y);

//Вложенные объекты
// const {workingHours: hours} = japaneseRestaurant;
// const {sun} = japaneseRestaurant.workingHours;
// const {sun: {open: openHours, close: closeHours}} = hours;
// console.log(openHours, closeHours);


//Деструктуризация массивов
// const arr = [3, 5, 9, 4];
//
// const [a, b, c, d] = arr;
// console.log(a, b, c, d);
//
// let [a1, , a3] = japaneseRestaurant.categories;
// console.log(a1, a3);

//Swaping variables. Обмен значениями
// const temp = a1;
// a1 = a3;
// a3 = temp;
// console.log(a1, a3);

// [a3, a1] = [a1, a3];
// console.log(a1, a3);

//Reterning 2 values from function
// console.log(japaneseRestaurant.orderFood(2, 1));
// const [appetizers, mainFood] = japaneseRestaurant.orderFood(2, 1);
// console.log(appetizers, mainFood);

//Вложенная деструктуризация
// const nestedArr = [1, 2, [7, 9]];
// console.log(nestedArr[2][1]);
// const [ , , c1] = nestedArr;
// console.log(c1);
// const [q1, , [c1, c2]] = nestedArr;
// console.log(q1, c1, c2);

//Default values
// const unknownArr = [3, 5];
// const [n1 = 0, n2 = 0, n3 = 0, n4 = 0] = unknownArr;
// console.log(n1, n2, n3, n4);






//Оператор Spread

// const arr = [1, 3, 5];
//
// //Плохой подход
// const newArr = [8, 9, arr[0], arr[1], arr[2]];
// console.log(newArr);
//
// //Верный подход с помощью оператора Spread
// const newArrSpread = [7, 9, ...arr];
// console.log(newArrSpread);
// //Выводим в консоль все элементы по отдельности с помощью оператора Spread
// console.log(...newArrSpread);


// const japaneseRestaurant = {
//     name: 'Banzai',
//     location: '108 Markham Woods Rd, Londwood, USA',
//     categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//     appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamane', 'Sushi rice'],
//     mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//     workingHours: {
//         wed: {
//             open: 10,
//             close: 23,
//         },
//         fri: {
//             open: 10,
//             close: 23,
//         },
//         sun: {
//             open: 12,
//             close: 23,
//         }
//     },
//     orderFood: function (appetizersIndex, mainMenuIndex) {
//         return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//     },
//     foodDelivery: function ({ mainMenuIndex = 0, appetizersIndex = 0, address, deliveryTime = '18:00' }) {
//         console.log(`Your order on the way to uou! ${this.mainMenu[mainMenuIndex]} and ${this.appetizers[appetizersIndex]} will be arrived to ${address} at ${deliveryTime}`);
//     },
//     orderSushi: function (ing1, ing2, ing3) {
//         console.log(`your order ${ing1}, ${ing2}, ${ing3}!`);
//     }
// };

// const newMenu = [...japaneseRestaurant.mainMenu, 'Miso Salmon'];
// console.log(...newMenu);

//Array copying. Копирование массива
// const categoriesCopy = [...japaneseRestaurant.categories];
// console.log(categoriesCopy);
// console.log(...categoriesCopy);

//Merge array. Слияние массивов
// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(menu);

//Iterable - arays, string, maps, sets. OBJECTS aren't iterable.(Объекты не являются iterable) Iterable - то что может быть перебранным.

// const ingridients = [prompt(`Ingridient 1 for your sushi?`), prompt(`Ingridient 2 for your sushi?`), prompt(`Ingridient 3 for your sushi?`)];
// japaneseRestaurant.orderSushi(...ingridients);

//Object
// const newJapaneseRestaurant = { ...japaneseRestaurant, owner: 'Suzuki', foundationDate: 2002 };
// console.log(newJapaneseRestaurant);

// const japaneseRestaurantCopy = {...japaneseRestaurant};
// japaneseRestaurantCopy.name = 'Suzuki Sushi';
// console.log(japaneseRestaurantCopy.name);
// console.log(japaneseRestaurant.name);







//Паттерн Rest и Параметры Rest

// const japaneseRestaurant = {
//     name: 'Banzai',
//     location: '108 Markham Woods Rd, Londwood, USA',
//     categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//     appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamane', 'Sushi rice'],
//     mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//     workingHours: {
//         wed: {
//             open: 10,
//             close: 23,
//         },
//         fri: {
//             open: 10,
//             close: 23,
//         },
//         sun: {
//             open: 12,
//             close: 23,
//         },
//         sat: {
//             open: 0,
//             close: 24,
//         }
//     },
//     orderFood: function (appetizersIndex, mainMenuIndex) {
//         return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//     },
//     foodDelivery: function ({ mainMenuIndex = 0, appetizersIndex = 0, address, deliveryTime = '18:00' }) {
//         console.log(`Your order on the way to uou! ${this.mainMenu[mainMenuIndex]} and ${this.appetizers[appetizersIndex]} will be arrived to ${address} at ${deliveryTime}`);
//     },
//     orderSushi: function (ing1, ing2, ing3) {
//         console.log(`your order ${ing1}, ${ing2}, ${ing3}!`);
//     },
//     orderNoodls: function (noodls, ...nextIngridients) {
//         console.log(`Your order - ${noodls}`);
//         console.log(`Дополнение к основному заказы:`);
//         for (let a = 0; a < nextIngridients.length; a++) {
//             console.log(nextIngridients[a]);
//         }
//         if (nextIngridients == 0) {
//             console.log('Ваш заказ без дополнительных ингредиентов');
//         }
//     }
// };


//Оператор Spreat распаковывает массив в то время как паттерн Rest наоборот упаковывает несколько элементов в массив.
//Оператор Spreat (...) указывается с право от знака присваивания.

// const arr = [1, 2, ...[5, 7, 9]];

//Оператор Rest указывается с лева от знака присваивания (=). Rest - Это остаток или оставшиеся элементы массива. Используется для создания массива из оставшихся элементов.

//1.Rest pattern with destructuring

//Rest pattern with arrays
// const [a1, a2, ...items] = [1, 2, 3, 5];
// console.log(a1,a2, items);

// const [appetizers1, , appetizers2, ...otherFood] = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];
// console.log(appetizers1, appetizers2, otherFood);

//Rest pattern with object
// const {sun, sat, ...working} = japaneseRestaurant.workingHours;
// console.log(sun, sat, working);


//2.Rest pattern with fanctions

// function sum(...sum) {
//     console.log(sum);
//     let result = 0;
//     for (let a = 0; a < sum.length; a++) {
//         result += sum[a];
//     }
//     return result;
// };
// console.log(sum(2, 5));
// console.log(sum(2, 5, 7, 6, 2));
//
// const numbersArray = [3, 44, 2];
// console.log(sum(...numbersArray));
//
// japaneseRestaurant.orderNoodls('Color Noodle', 'Chicken', 'Onion', 'Meat');
// japaneseRestaurant.orderNoodls('nuodls one')




//Вычисление логических выражений по сакращенной схеме

//Логические операторы могут использовать любые тапы данных, могут возвращать любые типы данных.
//OR(||)
// console.log(5 || 'Hello!');
// console.log('' || 'Hello!');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || '' || 0 || 'Hey!' || 23 || null);
//
// japaneseRestaurant.guestsNumbers = 8;
// const guests = japaneseRestaurant.guestsNumbers ? japaneseRestaurant.guestsNumbers : 5;
// console.log(guests);
//
// const guests2 = japaneseRestaurant.guestsNumbers || 5;
// console.log(guests2);

//AND (&&)
// console.log(0 && 'Hello!');
// console.log(1 && 'Hello!');
// console.log('hey' && 34 && 0 && 44 && null);
//
// if(japaneseRestaurant.orderNoodls) {
//     japaneseRestaurant.orderNoodls('Something');
// }
//
// japaneseRestaurant.orderNoodls && japaneseRestaurant.orderNoodls('Something');

//Итого:
// Оператор OR (||) будет возвращать  первое trues значение всех операндов. Если они являются false значениями,  будет возвращен последний из этих операндов.
// Оператор AND (&&) будет возвращать первое false значение если все значения являются trues то будет возвращено последнее trues значение.



//Оператор нулевого слияния (??)
//Nullish values: null and undefined (NOT 0 or '')

// japaneseRestaurant.guestsNumbers = 0;
// const guests3 = japaneseRestaurant.guestsNumbers ?? 5;
// console.log(guests3);




//TASK 1

//Object game
// const game = {
//     team1: 'REAL MADRID',
//     team2: 'BARCELONA',
//     players: [
//         [
//             'Courtois',
//             'Vazquez',
//             'Militao',
//             'Nacho',
//             'Mendy',
//             'Casemiro',
//             'Valverde',
//             'Modrich',
//             'Kroos',
//             'Vinicius',
//             'Benzema',
//         ],
//         [
//             'Stegen',
//             'Mingueza',
//             'Araujo',
//             'Lenglet',
//             'Dest',
//             'Busquets',
//             'Jong',
//             'Alba',
//             'Messi',
//             'Pedri',
//             'Dembele',
//         ],
//     ],
//     score: '2:1',
//     scored: ['Kroos', 'Benzema', 'Mingueza'],
//     date: 'Apr 10th, 2021',
//     odds: {
//         team1: 1.48,
//         draw: 2.53,
//         team2: 4.25,
//     },
// };
// //Создаем отдельные массивы с игроками для каждой команды
// const [player1, player2] = game.players;
// //Первый игрок — вратарь, остальные — полевые игроки
// const [Courtois, ...fieldPlayersTeam1] = player1;
// const [Stegen, ...fieldPlayersTeam2] = player2;
// //Создайте массив allPlayers, содержащий всех игроков обеих команд (22 игрока)
// const allPlayers = [...player1, ...player2];
// //Создайте новый массив (players1Total), содержащий всех исходных игроков team1, а также «Марсело», «Иско», «Асенсио», «Диас» и «Одриосола».
// const players1Total = [...player1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
// //На основе объекта game.odds создайте по одной переменной для каждого шанса
// //Простой вариант
// // const {team1, draw, team2} = game.odds;
// //Сложный вариант
// const {odds: {team1, draw, team2}} = game;
// //Функция printGoals, которая принимает произвольное количество имен игроков
// function printGoals(...nameField) {
//     for(let a = 0; a< nameField.length; a++) {
//         console.log(nameField[a]);
//     }
//     console.log(`${nameField.length} гола было забито!`);
// }
// printGoals(...game.scored);
// printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
// //Команда с более низким коэффициентом выиграет с большей вероятностью
// team1 < team2 && console.log(`${game.team1} game won!!!`);
// team2 < team1 && console.log(`${game.team2} game won!!!`);







//Массив дней недели
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// const workingHours = {
//     //подставляем имена дней беря их из массива weekdays
//     [weekdays[2]]: {
//         open: 10,
//         close: 23,
//     },
//     [weekdays[4]]: {
//         open: 10,
//         close: 23,
//     },
//     [weekdays[5]]: {
//         open: 12,
//         close: 23,
//     },
//     [weekdays[6]]: {
//         open: 0,
//         close: 24,
//     }
// };
//
// const japaneseRestaurant = {
//     name: 'Banzai',
//     location: '108 Markham Woods Rd, Londwood, USA',
//     categories: ['Japanese', 'Sushi', 'Vegetarian', 'Organic'],
//     appetizers: ['Seaweed salad', 'Tempura shrimp', 'Edamane', 'Sushi rice'],
//     mainMenu: ['Sushi', 'Ramen', 'Tempura'],
//
//     //Добавление объекта в japaneseRestaurant
//     workingHours,
//
//     //Старый вариант отображения метода в объекте
//     // orderFood: function (appetizersIndex, mainMenuIndex) {
//     //     return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//     // },
//
//     //Новый вариант
//     orderFood(appetizersIndex, mainMenuIndex) {
//         return [this.appetizers[appetizersIndex], this.mainMenu[mainMenuIndex]];
//     },
//     foodDelivery({ mainMenuIndex = 0, appetizersIndex = 0, address, deliveryTime = '18:00' }) {
//         console.log(`Your order on the way to uou! ${this.mainMenu[mainMenuIndex]} and ${this.appetizers[appetizersIndex]} will be arrived to ${address} at ${deliveryTime}`);
//     },
//     orderSushi(ing1, ing2, ing3) {
//         console.log(`your order ${ing1}, ${ing2}, ${ing3}!`);
//     },
//     orderNoodls(noodls, ...nextIngridients) {
//         console.log(`Your order - ${noodls}`);
//         console.log(`Дополнение к основному заказы:`);
//         for (let a = 0; a < nextIngridients.length; a++) {
//             console.log(nextIngridients[a]);
//         }
//         if (nextIngridients == 0) {
//             console.log('Ваш заказ без дополнительных ингредиентов');
//         }
//     }
// };
// console.log(japaneseRestaurant);




// const menu = [...japaneseRestaurant.appetizers, ...japaneseRestaurant.mainMenu];

//Цикл for of
// for(const a of menu) {
//     console.log(a);
// }
//Цикл for of по индексу
// for(const x of menu.entries()) {
//     console.log(`${x[0] + 1} ${x[1]}`);
// }
// console.log([...menu.entries()]);

//Улучшеный цикл по идексу .entries()
// for(const [index, food]  of menu.entries()) {
//     console.log(index + 1, food);
// }




// if (japaneseRestaurant.workingHours.thu) {
//     console.log(japaneseRestaurant.workingHours.thu.open);
// }
// if(japaneseRestaurant.workingHours.fri) {
//     console.log(japaneseRestaurant.workingHours.fri.open);
// }


//Опциональная последовательность или Опциональная цепочка

//Опциональная последовательность для свойств

//Происходит проверка есть ли в thu? если есть оно выводится в консоль если его нет возврощается undefined
// console.log(japaneseRestaurant.workingHours.thu?.open);
// console.log(japaneseRestaurant.workingHours?.thu?.open);
//
// const weekdaysOfDay = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of weekdaysOfDay) {
//     const result = japaneseRestaurant.workingHours[day]?.open ?? 'not open';
//     result === 'not open' ? console.log(`${day} never open`) : console.log(`${day} open ${result} hours`);
// }

//Опциональная последовательность для методов объекта
// console.log(japaneseRestaurant.orderFood?.(1, 2) ?? 'Method does not exist');
// console.log(japaneseRestaurant.orderFood2?.(1, 2) ?? 'Method does not exist');

//Опциональная последовательность для массивов
// const post = [
//     {
//         name: 'JS is cool!',
//         userName: 'Ted',
//     },
//     {
//         name: 'JS is shit!',
//         userNAme: 'Dick',
//     },
// ];
// console.log(post[0]?.name ?? 'not object');
// console.log(post[1]?.name ?? 'not object');
// console.log(post[2]?.name ?? 'not object');

//Проверка на пустой массив
// const users = [];
// console.log(users[0]?.name ?? 'The array is empty');


//Перебор имен
// const props = Object.keys(workingHours);
// console.log(props);
// console.log(`${japaneseRestaurant.name} open ${props.length} days in a week.`);
//
// for(const day of Object.keys(workingHours)) {
//     console.log(day);
// }

//Перебор значений
// const val = Object.values(workingHours);
// console.log(val);

//Перебор по имени и значению
// const entries = Object.entries(workingHours);
// console.log(entries);
//
// for(const entri of entries) {
//     console.log(entri);
// }

// for(const [day, {open, close}] of entries) {
//     console.log(`Restoran ${japaneseRestaurant.name} в ${day} работает с ${open} до ${close}`);
// }


//TASK 2

// const game = {
//     team1: 'REAL MADRID',
//     team2: 'BARCELONA',
//     players: [
//         [
//             'Courtois',
//             'Vazquez',
//             'Militao',
//             'Nacho',
//             'Mendy',
//             'Casemiro',
//             'Valverde',
//             'Modrich',
//             'Kroos',
//             'Vinicius',
//             'Benzema',
//         ],
//         [
//             'Stegen',
//             'Mingueza',
//             'Araujo',
//             'Lenglet',
//             'Dest',
//             'Busquets',
//             'Jong',
//             'Alba',
//             'Messi',
//             'Pedri',
//             'Dembele',
//         ],
//     ],
//     score: '2:1',
//     scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema', 'Kroos'],
//     date: 'Apr 10th, 2021',
//     odds: {
//         team1: 1.48,
//         draw: 2.53,
//         team2: 4.25,
//     },
// };
//
// //1.
// for (const [count, name] of game.scored.entries()) {
//     console.log(`Goal ${count + 1} - ${name}`);
// }
//
// //2.
// const sum = Object.values(game.odds);
// let resultSum = 0;
// for (const res of sum) {
//     resultSum += res;
// }
// console.log(resultSum / sum.length);
//
// //3.
// for (const [name, odd] of Object.entries(game.odds)) {
//     const nweTeextString = `${name}` === 'draw' ? `draw:` : `${game[name]} victory:`;
//     console.log(`Rate for ${nweTeextString} ${odd}`);
// }
//
// //4.
// const goalScorers = {};
// for (const a of game.scored) {
//     goalScorers[a] ? goalScorers[a]++ : goalScorers[a] = 1;
// }
// console.log(goalScorers);






//SET (Множество)
// Отличия множества от массива
// 1.Все элементы множества  уникальны
// 2.Порядок определение элементов в массиве не определенный.

// const orders = new Set(['Sushi', 'Ramen', 'Sushi', 'Tempura', 'Ramen', 'Sushi']);
// console.log(orders);
//
// console.log(new Set('Hello!'));
// console.log(new Set());
//size является свойством (нет круглых скобок)
// console.log(orders.size);
//has проверяет есть такое значение в множестве и выводит true || false
// console.log(orders.has('Sushi'));
// console.log(orders.has('pizza'));
//
// orders.add('Edamame');
// orders.add('Edamame');
// orders.delete('Tempura');
// console.log(orders);
// orders.clear();
// console.log(orders);
//Перебор элментов в Set и вывод каждого в консоль
// for(const order of orders) {
//     console.log(order);
// }

//Удаляем дублирующие значение
// const mealIngridients = ['Rice', 'Pepper', 'Garlic', 'Pepper', 'Garlic', 'Meat', 'Meat', 'Garlic'];
// const resultIngridients = new Set(mealIngridients);
// console.log(resultIngridients);
//Помещаем Set в массив с помощью оператора Spreat
// const mailIngrUnique = [...resultIngridients];
// console.log(mailIngrUnique);
//Узнать колличество в массиве не повторяющихся элементов
// console.log(new Set(mealIngridients).size);
// console.log(new Set('Striing texxt nammberr').size);



//Map
//Создаем пустой объект MEP
// const restaurant = new Map();
//Добавляем новый элемент при помощи set. Первое значение - ключ, второе - значение
// restaurant.set('name', 'Bench');
// restaurant.set(1, 'London, England');
// restaurant.set(2, 'Paris, France');
// restaurant.set('categories', ['Japanese', 'Sushi', 'Vegetarian', 'Organic']).set('open', 10).set('close', 24).set(true, 'Bench is open :)').set(false, 'Banch is closed :(');
//Получаем данные по ключу
// console.log(restaurant.get('name'));
// console.log(restaurant.get(true));

// const currentTime = 9;
// console.log(restaurant.get(currentTime > restaurant.get('open') && currentTime < restaurant.get('close')));

//has Проверяет есть ли какойто ключ в этой Mep
// console.log(restaurant.has('categories'));
//Удалить элемент по ключу
// restaurant.delete(1);
// console.log(restaurant);
// console.log(restaurant.size);
// restaurant.clear();

// console.log(restaurant.set(document.querySelector('h1'), 'Heading'));

// const arr = [1, 2, 3];
// restaurant.set(arr, 'hello!');
// console.log(restaurant.get(arr));


//Массив дней недели
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//
// const workingHours = {
//     //подставляем имена дней беря их из массива weekdays
//     [weekdays[2]]: {
//         open: 10,
//         close: 23,
//     },
//     [weekdays[4]]: {
//         open: 10,
//         close: 23,
//     },
//     [weekdays[5]]: {
//         open: 12,
//         close: 23,
//     },
//     [weekdays[6]]: {
//         open: 0,
//         close: 24,
//     }
// };
//Создаём Map масив в котором будут массивы (много элементов) с ключем и значением
// const question = new Map([['question', 'What is the most popular programming language for front-end?'], [1, 'JavaScript'], [2, 'Java'], [3, 'Python'], ['correctAnswer', 1], [true, 'Correct answer :D'], [false, 'This is incorrect :( Try again!']]);
// console.log(question);

// console.log(Object.entries(workingHours));
//Преобразуем объект workingHours в workingHoursMap (Map)
// const workingHoursMap = new Map(Object.entries(workingHours));
// console.log(workingHoursMap);

//Выводим значение по ключу question
// console.log(question.get('question'));
//Проходим по Map и везде где в ключе установлено число выводим в консоль ключ и значение
// for(const [key, value] of question) {
//     if(typeof key === 'number') {
//         console.log(`${key}: ${value}`);
//     }
// }
//Запрашиваем у пользователя ответ и выводим варианты ответов
// const answer = Number(prompt(`Choose the option number`));
//Проверяем ответ и выводим результат в консоль
// console.log(question.get(question.get('correctAnswer') === answer));

//Converting maps to arrays. Конвертируем в массивы
// const res = [...question];
// console.log(res);

//для Map мы можем получать entries, keys, values
//для keys и values можно указать оператор Spread (...) В этом случае мы получим результат в массивах
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());



//TASK3

// const events = new Map([
//     [19, 'Goal'],
//     [21, 'Substitution'],
//     [43, 'Goal'],
//     [56, 'Substitution'],
//     [69, 'Yellow card'],
//     [73, 'Substitution'],
//     [75, 'Yellow card'],
//     [79, 'Substitution'],
//     [81, 'Red card'],
//     [93, 'Goal'],
// ]);
//
//
//
// const game = {
//     team1: 'REAL MADRID',
//     team2: 'BARCELONA',
//     players: [
//         [
//             'Courtois',
//             'Vazquez',
//             'Militao',
//             'Nacho',
//             'Mendy',
//             'Casemiro',
//             'Valverde',
//             'Modrich',
//             'Kroos',
//             'Vinicius',
//             'Benzema',
//         ],
//         [
//             'Stegen',
//             'Mingueza',
//             'Araujo',
//             'Lenglet',
//             'Dest',
//             'Busquets',
//             'Jong',
//             'Alba',
//             'Messi',
//             'Pedri',
//             'Dembele',
//         ],
//     ],
//     score: '2:1',
//     scored: ['Kroos', 'Benzema', 'Mingueza'],
//     date: 'Apr 10th, 2021',
//     odds: {
//         team1: 1.48,
//         draw: 2.53,
//         team2: 4.25,
//     },
// };

//Создайте массив gameEvents с различными игровыми событиями, которые могут произойти (без дубликатов)
// const gameEvents = [...new Set(events.values())];
// console.log(gameEvents);

//После окончания игры выяснилось, что желтая карточка с 75-й минуты была несправедливой. Поэтому удалите это событие из журнала игровых событий.
// events.delete(75);
// console.log(events);
//Подсчитайте и запишите в консоль следующее: «В среднем событие происходило каждые 11 минут» (имейте в виду, что в игре 90 минут).
// console.log(`On average, an event happened every ${90 / events.size} minutes`);
//Прокрутите карту событий и запишите каждый элемент в консоль, отметив, находится ли он в первой или во второй половине (после 45 минут) игры например:
//[ПЕРВЫЙ ТАЙМ] 19: Гол
// for(const [key, value] of events) {
//     const half = key<= 45 ? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${key}: ${value}`);
// }






//STRING
// const airline = 'SkyUp Airline';
// const airpline = 'Boeing 737';
// console.log(airpline[0]);
// console.log(airline[1]);
// console.log(airline[2]);
// console.log('SkyUp'[0]);
// //length узнать длину строки
// console.log(airpline.length);
// console.log('Boeing 737'.length);
// //indexOf() На какой позиции находится элемент (Если их несколько будет отображен индекс первого элемента)
// console.log(airpline.indexOf(' '));
// console.log(airpline.indexOf('7'));
// //Будет отображен последний элемент
// console.log(airpline.lastIndexOf('7'));
// //Метод slice()замены нового массива, восстановление части исходного массива.
// console.log(airpline.slice(7));
// console.log(airpline.slice(0, 6));
// console.log(airpline.slice(0, airpline.indexOf(' ')));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airpline.slice(airpline.indexOf(' ') + 1));
// console.log(airline.slice(3, -2));
//
// const checkMiddleSeat = function (seat) {
//     //B and E are middle seat
//     const seatLetter = seat.slice(-1);
//     if (seatLetter === 'A' || seatLetter === 'E') {
//         console.log('This is a middle seat');
//     } else {
//         console.log('This is not a middle seat');
//     }
// }
// checkMiddleSeat('21A');
// checkMiddleSeat('7B');
// checkMiddleSeat('14E');

// const x = new String('Hello!');
// console.log(typeof x);
// console.log(typeof x.slice(2));
//
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
//
// // const passengerName = 'lInDA';
// // const passengerNameLower = passengerName.toLowerCase();
// // const passengerNameFixed = passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
// // console.log(passengerNameFixed);
//
// function getPassengerName(stringName) {
//     const passengerNameLower = stringName.toLowerCase();
//     const passengerNameFixed = passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
//     return passengerNameFixed;
// }
// console.log(getPassengerName('lInDA'));
//
// //Email validation
// const email = 'someemail@gmail.com';
// const loginEmail = ' SomeEmail@Gmail.com \n';
// //Метод trim() убирает пробелы в начале и конце строки
// // const loginEmailNormalized = loginEmail.toLowerCase().trim();
// // console.log(loginEmailNormalized);
//
// const loginEmailFixed = function(emailAdress) {
//     const emailNormalized = emailAdress.toLowerCase().trim();
//     (emailNormalized === email) ? console.log('email is correct') : console.log('email is not correct');;
// };
// loginEmailFixed(loginEmail);
//
// //Замена части строки
// const ticketPriceEU = '197,23€';
// //Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель
// const ticketPriceUS = ticketPriceEU.replace(',', '.').replace('€', '$');
// console.log(ticketPriceUS);
// //Замена всех символов (replaceAll) работает через консоль браузера
// const announcement = 'All passengers of flight EG234 come to boarding door 18. Boarding door 18!';
// const result = announcement.replaceAll('door', 'gate');
// console.log(result);

//Methods return boolean
// console.log(airpline);
// //includes метод проверяет содержится эта часть строки в основной строке
// console.log(airpline.includes('737'));
// console.log(airpline.includes('738'));
// //Метод startsWith проверяет начинается ли строка с этой части строки
// console.log(airpline.startsWith('Bo'));
// console.log(airpline.startsWith('Do'));
// //Метод endsWith проверяет заканчивается ли строка этой частью строки
// console.log(airpline.endsWith('737'));
// console.log(airpline.endsWith('748'));
//
// if (airpline.startsWith('Boeing')) {
//     console.log('You gonna fly on Boeng!');
// }
//
// //Exemple
// const checkLuggage = function (luggage) {
//     const luggageLower = luggage.toLowerCase();
//     if (luggageLower.includes('gun') || luggageLower.includes('knife')) {
//         console.log('You are not allowed on doard');
//     } else {
//         console.log('Welcome to the board!');
//     }
// };
// checkLuggage('Food, jeans, socks and Swiss Knife');
// checkLuggage('Laptop, and food');
// checkLuggage('Camera, food, Gun for protection');


//Метод split()принимает шаблон и делит его String на упорядоченный список подстрок путем поиска шаблона, помещает эти подстроки в массив и возвращает массив.
// console.log('My+name+is+Youra'.split('+'));
// console.log('My name is Youra'.split(' '));
//
// const MyName = 'ken suse';
// const [firstName, lastName] = MyName.split(' ');
// console.log(firstName, lastName);
// //Метод join()создает и возвращает новую строку путем объединения всех элементов массива (или объекта, подобного массиву ), разделенных запятыми или заданной строкой-разделителем
// console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));
//
//
// const capitalizeName = function (names) {
//     //Преобразуем строку в массив строк
//     const nameSplit = names.split(' ');
//     const namesCapitalizes = [];
//     for (const n of nameSplit) {
//         //перебераем слова в цикле и изменяем первую букву на заглавную добавляя в новый массив
//         // namesCapitalizes.push(n[0].toUpperCase() + n.slice(1));
//         namesCapitalizes.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     //Преобразуем массив в строку разделяя слова пробелом.
//     console.log(namesCapitalizes.join(' '));
// }
// capitalizeName('ken suse');
// capitalizeName('jack white tiger jr.');
//
// //Padding padStart() padEnd()
// const message = 'Hi there!';
// console.log(message.padStart(20, '_'));
// console.log(message.padEnd(20, '_'));
//
// const maskCreditCard = function (cardNamber) {
//     const strCardNamber = cardNamber + '';
//     const last4 = strCardNamber.slice(-4);
//     console.log(strCardNamber.length);
//     console.log(last4.padStart(strCardNamber.length, '*'));
// }
// maskCreditCard(12345678910121);
// maskCreditCard('1234567891011227');
//
// //Метод repeat()создает и возвращает новую строку, содержащую указанное количество копий строки, для которой он был вызван, объединенных вместе.
// const greeting = 'Hi!';
// console.log(greeting.repeat(50));
//
// const howMuchYouLoveSomebady = function(loveNamber) {
//     console.log(`I love you ${'+'.repeat(loveNamber)}`);
// }
// howMuchYouLoveSomebady(10);



//TASK4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
//
// document.querySelector('button').addEventListener('click', function () {
//     //Получаем введенное значение  в окно textarea по нажатию на button (по отслеживанию addEventListener)
//     const textStr = document.querySelector('textarea').value;
//     //Разбиваем слова на массив строк через \n
//     const textSplit = textStr.split('\n');
//     //В каждой строке массива через итерацию делаем буквы прописными и убираем пробелы добавляя измененные данные в новый массив
//     //С помощью метода split в цикле мы разделяем слова по параметру (’_’) и преобразуем в две отдельные строки.
//     //Затем во втором слове первую букву делаем заглавной и прикрепляем оставшиеся буквы слова к первому символу (заглавному символу)
//     for (const text of textSplit) {
//         const [first, second] = text.toLowerCase().trim().split('_');
//         // console.log(`${first}${second[0].toUpperCase() + second.slice(1)}`);
//         console.log(`${first}${second.replace(second[0], second[0].toUpperCase())}`);
//     }
// });








//CHAPTER 8

// 'use strict'
//FUNCTION Больше о функциях

//Параметры по умолчанию
// const bookengs = [];
// const makeBooking = function(flightNum, passengersNum = 1, price = passengersNum * 99) {
//     //Параметры по умолчанию до ES6
//     // passengersNum = passengersNum || 1;
//     // price = price || 99;
//
//     const booking = {
//         flightNum,
//         passengersNum,
//         price
//     }
//     console.log(booking);
//     bookengs.push(booking);
// };
// makeBooking('QE123');
// makeBooking('QE123', 3, 390);
// makeBooking('QE123', 1);
// makeBooking('QE123', 4);
// makeBooking('QE123', undefined, 400);





// 'use strict'
//Передача аргументов. Значения vs ссылки
// const flightNumber = 'BV328';
// const passenger1145 = {
//     firstName: 'Jack',
//     lastName: 'Brown',
//     passport: 128490,
// }
// const checkIn = function(flight, passenger) {
//     flight = 'bv328';
//     passenger.firstName = passenger.firstName.toLowerCase();
//     passenger.lastName = passenger.lastName.toLowerCase();
//
//     if(passenger.passport === 128490) {
//         console.log('welcome to the board!');
//     } else {
//         console.log('Incorrect passport!');
//     }
// }
// checkIn(flightNumber, passenger1145);
// //Когда мы передаем примитивное значение в функцию это тоже самое что передать копию переменной. Изменение в копии никак не воздействует на основную переменную.
// console.log(flightNumber);
// //Когда мы передаем объект (ссылочный тип) в функцию в качестве аргумента. В этом случае две переменные указывают на один и тот же объект.
// console.log(passenger1145);
//
// //Изменяем в функции свойство объекта устанавливая случайные цифры
// const chengePassportNumber = function(person) {
//     person.passport = Math.trunc(Math.random() * 100000000);
// }
// chengePassportNumber(passenger1145);
// //Передаем в метод checkIn изменений параметр объекта с помощью метода chengePassportNumber
// checkIn(flightNumber, passenger1145);
// //Выводим в консоль измененные данные объекта
// console.log(passenger1145);

//В программирование есть два термина которые часто используются при работе с функциями это – передача по значению и передача по ссылки
//В java script нет передачи по ссылки только передача по значению хотя и выглядит что это будто передача по ссылки
//Ссылка которую мы передаем является значением. Значение которое содержит адрес в памяти.
//То есть мы передаем ссылку в функцию, но мы передаем, не по ссылке, мы передаем ссылку, но не по ссылке.







//Функции первого класса vs Функции высшего порядка
// Java script Относится к функциям как к гражданам первого класса это значит что js  обращается с функциями как со значениями.
// Функции это всего лишь  другой тип объектов в js и так как объекты являются значениями, функции так же являются значениями.
// •	Функции можно помещать в переменные или свойство объектов (функция в свойстве объекта называется методом)
// •	Можно передавать функции как аргументы в другие функции
// •	Можно возвращать функции из других функций
// •	Можно вызывать методы для функций
//
// То что в js есть функции первого класса, делает для нас возможным писать и использовать так называемые функции высшего порядка
//
// Функция высшего порядка это функция которая может принимать другую функцию в качестве аргумента либо возвращать новую функцию
// •	Функция может принимать другую функцию как аргумент (функция которая передается в качестве аргумента называется Callback функция) она называется так потому что она будет вызвана позже и она будет вызвана функцией высшего порядка
// •	Функция может возвращать другую функцию
// Функции первого класса это фича языка программирования она означает что все функции в этом языке являются значениями. На практике не существует функции первого класса  это просто концепция на практике существуют функции высшего порядка которые возможны только в том языке в котором поддерживается фича функции первого класса






// 'use strict'
//Функции Принимающие Callback Функции

//Функции низшего порядка
// const removeSpaces = function (text) {
//     return text.replace(/ /g, '').toLowerCase();
//     // return text.replaceAll(' ', '').toLowerCase();
// }
// //Функции низшего порядка
// const upperFirstWord = function(text) {
//     const [firstText, ...nextText] = text.split(' ');
//     return [firstText.toUpperCase(), ...nextText].join(' ');
// }
// //Функции высшего порядка оперирует высшим порядком обструкции оставляя детали более низкого уровня для функций низшего порядка
// const converter = function(str, func) {
//     console.log(`The original text: ${str}`);
//     console.log(`The converter text: ${func(str)}`);
//
//     console.log(`Converted by: ${func.name}`);
// }
// converter('Hello to everyone!', upperFirstWord);
// converter('Hello to everyone!', removeSpaces);
//
// //arrow function
// const twice = num => console.log(num * 2);
// [1, 2, 3].forEach(twice);







// 'use strict'
// // Функции Возвращающие Функции
// const greet = function(greetingText) {
//     return function(name) {
//         console.log(`${greetingText} ${name}`);
//     }
// }
// //arrow function
// const arrGreet = greetingText => name => console.log(`${greetingText} ${name}`);
//
// const hi = greet('Hi!');
// hi('Jack');
// hi('diana');
// hi('Mick');
// //В функцию greet с аргументом ('Hi!') передаем имя ('ken')
// greet('Hi!')('ken');
// arrGreet('Hi!')('Suse');





'use strict'
//Методы call() и apply()
// const book = function(flightNumber, passengerName) {
//     console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNumber}`, passengerName});
// }
// const airline1 = {
//     airlineName: 'skyUp',
//     iataCode: 'SU',
//     bookings: [],
// };
//
// const airline2 = {
//     airlineName: 'EuroFlights',
//     iataCode: 'EF',
//     bookings: [],
//
// };

//Если метод book находится в объекте airline1
// const book = airline1.book;
//С помощью метода call можно явно указать this в аргументе метода
// book.call(airline2, 345, 'Linda Wilams');
// console.log(airline2);
// book.call(airline1, 111, 'Bob Smith');
// console.log(airline1);


// //С помощью метода call() можно явно указать this объекта в аргументе метода
// book.call(airline1,  345, 'Linda Wilams');
// console.log(airline1);
// book.call(airline2, 217, 'Bob Smith');
// console.log(airline2);
//
// //Метод apply() передается массив аргуменотв
// //В современном js метод aplly не используется (Старый подход)
// const flightDate= [111, 'Nick Wong'];
// book.apply(airline2, flightDate);
// console.log(airline2);
//
// //Можно использовать оператор spread чтобы передать массив в аргументы метода call
// book.call(airline1, ...flightDate);
// console.log(airline1);






//Метод bind()
//bind не вызывает сразу функцию а возвращает новую функцию где уже связывается ключевое слово this и устанавливается значение для этого ключевого слово this то что мы передаем в метод bind
const airline1 = {
    airlineName: 'skyUp',
    iataCode: 'SU',
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(`${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, passengerName });
    },
};

const airline2 = {
    airlineName: 'EuroFlights',
    iataCode: 'EF',
    bookings: [],

};

const airline3 = {
    airlineName: 'USFligths',
    iataCode: 'USF',
    bookings: [],
};

const book = airline1.book;

const bookAirline2 = book.bind(airline2);
bookAirline2(327, 'ken Suse');
console.log(airline2);

const bookAirline3 = book.bind(airline3);
bookAirline3(375, 'John Doe');
console.log(airline3);

//В аргументах можно указывать не только this но и параметр метода book
const bookAirline3Flight21 = book.bind(airline3, 21);
bookAirline3Flight21('Jack Smith');
bookAirline3Flight21('Lana Delray');

//bind with event listeners (Использование метода bind вместе с обработчиком событий)
