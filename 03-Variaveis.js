//Variáveis
var num = 1;
num = 3;
var price = 1.5;
var myName = '@paulofachini';
var trueValue = true;
var nullVar = null;
var und;

document.writeln('num: ' + num);
document.writeln('<br>num: ', num);
document.writeln('<br>price: ' + price);
document.writeln('<br>myName: ' + myName);
document.writeln('<br>trueValue: ' + trueValue);
document.writeln('<br>nullVar: ' + nullVar);
document.writeln('<br>undefined: ' + und);
document.writeln('<br><br><br>');


//Escopo de variáveis
var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

document.writeln(myVariable);
document.writeln('<br>');
document.writeln(myFunction());
document.writeln('<br>');
document.writeln(myOtherVariable);
document.writeln('<br>');
document.writeln(myOtherFunction());
document.writeln('<br>');
document.writeln(myOtherVariable);
document.writeln('<br>');


//Operadores
var num = 0; 

// Aritmético
num = num - 1; // Subtração
num = num + 2; // Adição
num = num * 3; // Multiplicação
num = num / 2; // Divisão
num = num % 3; // Módulo (resto de uma operação de divisão)
num++; // Incremento
num--; // Decremento

// Atribuição
num = 0; // Atribuição
num += 1; // Atribuição de Soma          (x += y) ou (x = x + y)
num -= 2; // Atribuição de Subtração     (x -= y) ou (x = x - y)
num *= 3; // Atribuição de Multiplicação (x *= y) ou (x = x * y)
num /= 2; // Atribuição de Divisão       (x /= y) ou (x = x / y)
num %= 3; // Atribuição de Módulo        (x %= y) ou (x = x % y)

// Comparação
num == 1;  // Igual a 
num === 1; // Igual a (tanto o valor quanto o tipo do objeto)
num != 1;  // Diferente de
num > 1;   // Maior que
num >= 1;  // Maior ou iagual a 
num < 1;   // Menor que
num <= 1;  // Menor ou igual a 

// Lógico
(true && false); // E
(true || false); // Ou
(!true);         // Negação

// Bit a Bit (bitwise)
(5 & 1);  // E
(5 | 1);  // Ou
(~5);     // Negação
(5 ^ 1);  // Ou exclusivo (Xor)
(5 << 1); // Deslocamento para a esquerda (left shift)
(5 >> 1); // Deslocamento para a direita (right shift)

// typeof
typeof num; // Retorna number

/* Tipos de dados
    Primitivos (null, undefined, string, number, boolean, symbol)
    Derivados/objetos (JavaScript objects, functions, arrays, regular expression)
*/

/* Verdadeiro ou Falso
    undefined - false
    null - false
    Boolean - verdadeiro é true
              falso é false
    Number - +0, -0 ou NaN é false, caso contrário é true
    String - string vazia é false, caso contrário é true
    Object - true
*/

