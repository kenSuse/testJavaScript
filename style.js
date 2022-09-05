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



const normalAge = 18;
const age = prompt('Enter you age');
const result = age >= normalAge ? alert('You can buy the alcohol') : alert('You can not buy the alcohol, you are too young');
console.log(`You can ${age >= normalAge ? 'buy the alhogol' : 'not buy the alcohol, you are too young'}`);