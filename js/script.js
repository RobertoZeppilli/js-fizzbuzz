// 1. array vuoto in cui inserire successivamente i numeri stabiliti nel primo ciclo for
var numeri = [];

// 2. creo un ciclo for per stampare i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {

    // 2.1 prendo il primo numero che è sia un multiplo di 3 che di 5, se ha resto = 0 stampo "FizzBuzz", in questo modo anche tutti i successivi multipli di entrambi i numeri avranno stampato "FizzBuzz"
    if (i % 15 == 0) {
        numeri.push("FizzBuzz");



        // 2.2 se i % 5 da resto = 0 stampo "Buzz" in console    
    } else if (i % 5 == 0) {
        numeri.push("Buzz");


        // 2.3 se i % 3 da resto = 0 stampo "Fizz"    
    } else if (i % 3 == 0) {
        numeri.push("Fizz");


        // 2.4 infine nei casi in cui il numero non è un multiplo ne di 3 ne di 5, stampo il numero    
    } else {
        numeri.push(i);

    }
}

// 3. secondo ciclo for per stampare nell'HTML una lista con ciò che è presente nell'array "numeri"
for (var i = 0; i < 100; i++) {
    document.getElementById("list").innerHTML += "<li>" + numeri[i] + "</li>";
}




