(function() {
    const arr = [1, 2, 3, 4, 5];

    const arr2 = arr.map(function(num) {
        return num + 1;
    });

    console.log("Array 1: ", arr);
    console.log("Array 2: ", arr2);


    //spread operator
    const pessoa = {
        nome : 'Filype',
        idade : '20'
    }

    const pessoa2 = {
        ...pessoa, 
        cidade: 'São Paulo'
    };

    console.log(pessoa2);
})();
