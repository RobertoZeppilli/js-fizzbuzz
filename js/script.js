// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1. creo un ciclo for per stampare i numeri da 1 a 100
for (var i = 0; i <= 100; i++) {

    // 2. prendo il primo numero che è sia un multiplo di 3 che di 5, se ha resto = 0 stampo "FizzBuzz"
    if (i % 15 == 0) {
        console.log("FizzBuzz");

        // 3. se i % 5 da resto = 0 stampo "Buzz" in console    
    } else if (i % 5 == 0) {
        console.log("Buzz");

        // 4. se i % 3 da resto = 0 stampo "Fizz"    
    } else if (i % 3 == 0) {
        console.log("Fizz");

        // 5. infine nei casi in cui il numero non è un multiplo ne di 3 ne di 5, stampo il numero    
    } else {
        console.log(i);
    }
}