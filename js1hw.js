// создать функцию для создания калькулятора с prompt и консолью


let a = +prompt()
let b = +prompt()

let func = (param1, param2) => {
    console.log(a + b);
    console.log(a - b);
    console.log(a / b);
    console.log(a * b);
}

func(a, b)

