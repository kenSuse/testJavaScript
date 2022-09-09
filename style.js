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
jack = {
    ferstName: 'Jack',
    lastName: 'White',
    weight: 79,
    height: 1.70,
    BMI: function () {
        const bmi = this.weight / (Math.pow(this.height, 2));
        return bmi.toFixed(1);
    }
};
mike = {
    ferstName: 'Mike',
    lastName: 'Black',
    weight: 91,
    height: 1.93,
    BMI: function () {
        const bmi = this.weight / (Math.pow(this.height, 2));
        return bmi.toFixed(1);
    }
};
jack.BMI();
mike.BMI();
console.log(jack.bmi > mike.bmi ? `BMI ${jack.ferstName} ${jack.lastName} ${jack.BMI(this.bmi)} higher than ${mike.ferstName} ${mike.lastName} ${mike.BMI(this.bmi)}!` : `BMI ${mike.ferstName} ${mike.lastName} ${mike.BMI(this.bmi)} hegher than ${jack.ferstName} ${jack.lastName} ${jack.BMI(this.bmi)}!`);