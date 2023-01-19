// Soru: Sizden 1'den 100'e kadar sayıları yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz',
//5'in katlarına gelince 'Buzz'.Hem 3'ün hemde 5'in katlarına gelince 'FizzBuzz' yazdırmanız istenmektedir ?

for (let i = 1; i < 100; i++) {
  if (i % 15 == 0) {
    console.log(i + " FİZZBUZZ");
  } else if (i % 3 == 0) {
    console.log(i + " FİZZ");
  } else if (i % 5 == 0) {
    console.log(i + " BUZZ");
  } else {
    console.log(i);
  }
}
