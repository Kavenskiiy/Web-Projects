
function insert(num) {
    document.getElementById('scr').value += num;
    checking()

    //Начнём с поддержки клавиши enter
    document.onkeypress = function (e) {
        e = e || window.event;

        if (e.keyCode === 13) {
            event.preventDefault();//отмена функции перезагрузки ENTER'a
            equal();
        }
    }
}

//функция равенства
function equal() {
    var exp = document.getElementById('scr').value;

    if (exp) {
        document.getElementById('scr').value = eval(exp);
    }

    //предупреждение о делении на ноль   
    var divZero = document.getElementById('scr').value;
    if (divZero == Infinity) {
        alert('Деление на ноль это невозможно! Введите значения заново.');
        clean();
    }
}


//очистка поля ввода input
function clean() {
    document.getElementById('scr').value = "";
}

//backspace в поле input
function stepBack() {
    var back = document.getElementById('scr').value;
    document.getElementById('scr').value = back.slice(0, -1);
}

//проверка ввода в поле input
function checking() {
    var inp = document.Screen.ScreenInp.value;
    var rep = /[A-zА-яЁё]/;
    var simbols = /([.\?#@+,*/\-<>%~`!$^&\(\):;])\1+/;

    //запрет ввод букв
    if (rep.test(inp)) {
        inp = inp.replace(rep, '');
        document.Screen.ScreenInp.value = inp;
        alert("Неверное значение ввода! Только цифры и символы + , = , - , * , ( , ) ");
    };

    // поиск совпадений  повторяющихся специальных символов
    if (simbols.test(inp)) {
        alert('Ошибка!!!');
        inp = inp.replace(simbols, stepBack());
        return inp
    }
}


