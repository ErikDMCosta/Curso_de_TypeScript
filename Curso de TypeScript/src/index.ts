// -|-|- Tipos do JS: String, Boolean, Number, ... -|-|-
// const x:number = 10;
let x: number = 10; // Annotation
// x = "teste"; // Annotation - Não deixa trocar
//x = 25;
x = 12;

console.log(x);

// -|-|- Inference(Inferência) x Annotation(Anotação) -|-|-
const y = 12; // Inference
// y = "teste" // Inference - Não deixa trocar

let z: number = 12; // Annotation

// -|-|- Tipos Básicos do TS -|-|-
let firstName: string = "Érik";
let age: number = 30;
const isAdmin: boolean = true;

// -|-|- String != string -|-|-

console.log(typeof firstName); // Mostrará o tipo da variável

firstName = "João";

console.log(firstName);

// -|-|- Object (Objetos em TypeScript) -|-|-
const myNumbers: number[] = [1, 2, 3]; // number[] - Define um Array Numérico.

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.parseFloat()); // Não Funciona e não dará resultado correto no TS com Array numeros
// console.log(myNumbers.toUpperCase()); // Não Funciona e não dará resultado correto no TS com Array numeros

console.log(firstName.toUpperCase()); // Funciona no TS pois o método existe em objeto String

// Pra saber o que existe e não existe basta usar o autocomplete do TS

myNumbers.push(5); // Adicionando mais um elemento [5] no Array numérico

console.log(myNumbers);

// -|-|- Tuplas -|-|-
let myTuple: [number, string, string[]]; // Declarando uma Tupla em TS

myTuple = [5, "teste", ["a", "b"]]; // Adicionando valores na Tupla seguindo a tipagem declarada

// myTuple = [true, false, false]; // ERRO! - TEM QUE seguir a tipagem declarada

// -|-|- Object Literals -> {prop: value} -|-|-
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18,
};

console.log(user);

console.log(user.name);

// user.job = "Programador" // Não é possivel adicionar fora do escopo

// -|-|- Any (NÃO RECOMENDADO/MÁ PRÁTICA - Aceita Qualquer Tipo de Dado) -|-|-
let a:any = 0;

a = "teste";
a = true;
a = [];

// -|-|- Union Type (Solução Para Any no Formato TS) -|-|-
let id: string | number = "10";

id = 200;

// id = true; // Apenas aceitará os dois tipos declarados sendo [string | number]
// id = []; // Apenas aceitará os dois tipos declarados sendo [string | number]

// -|-|- Type Alias (Por meio de uma varíavel tipada pode criar outras com base na mesma) -|-|-
type myIdType = number | string;

const userId: myIdType = 10; // Variação criada da base myIdType
const productId: myIdType = "00001"; // Variação criada da base myIdType
const shirId: myIdType = 123; // Variação criada da base myIdType

// -|-|- Enum (Enumera uma Coleção Para Utilizar Dados Mais Complexos de Forma Mais Simples) -|-|-
// Exemplo: Tamanho de Roupas (sizes: Médio, sizes: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
};

const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};

console.log(camisa);

// -|-|- Literals Types (Básicamente Determinar um Valor Como um Tipo Usando : ) -|-|-
// let teste: "algumValor";
// let teste: "algumValor" | null;
let teste: "autenticado" | null;

// teste = "outroValor";

// teste = "algumValor";
teste = "autenticado";
teste = null;

// -|-|- Funções (tirando argumentos das funções em TS) -|-|-
function sum(a: number, b: number) {
    return a + b;
};

console.log(sum(12, 12));

// console.log(sum("12", true));

function sayHellTo(name: string): string {
    // return true; // Retona o mesmo tipo do contrario estrá errado
    return `Hello ${name}`;
};

console.log(sayHellTo("Érik"));

function logger(msg: string): void {
    console.log(msg);
};

logger("Teste!");

function greeting(name: string, greet?: string): void { // ? Deixa em opicional
    // console.log(`Olá ${greet} ${name}`);
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
};

greeting("José");

greeting("Pedro", "Sir");

// -|-|- Remover Comentários (Gerados no arquivo JS transpilado por TS na sua configuração) -|-|-
// -|-|- Interfaces (Básicamente padroniza algo para que possamos resusar como tipo) -|-|-

interface MathFunctionParams {
    n1: number,
    n2: number,
};

function sumNumebers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
};

console.log(sumNumebers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
};

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(someNumbers));

// -|-|- Narrowing (Chegagem de Tipos) -|-|-
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
};

doSomething(5);
doSomething(true);

// -|-|- Generics (Tendo Algo que Precise Aceitar Vários Tipos SEMPRE Optaremos Pelos Genéricos(GENERICS)) -|-|-
function showArrayItems<T>(arr: T[]) { // uso comum <T> ou <U> pode ser <outro>
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
};

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItems(a1);
showArrayItems(a2);

// -|-|- Classes (Orientação a Objetos) -|-|-
class User { // Adicionando classes
    name;       // Declarando Objeto
    role;       // Declarando Objeto
    isApproved; // Declarando Objeto

    constructor(name: string, role:string, isApproved: boolean) { // Declarando Tipos dos Objetos
        this.name = name; // Referênciando construção dos Objetos
        this.role = role; // Referênciando construção dos Objetos
        this.isApproved = isApproved; // Referênciando construção dos Objetos
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }

};

const zeca = new User("Zeca", "Admin", true);

console.log(zeca);

zeca.showUserName();

zeca.showUserRole(false);

// -|-|- Interfaces em Classes (Interface que Guia Comportamento da Classe) -|-|-
interface IVehicle { // geralmente começa com I que demostra Interface
    brand: string; // Marca como String
    showBrand(): void;
};

class Car implements IVehicle {

    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }

};

const fusca = new Car("VW", 4);

fusca.showBrand();

// -|-|- Herança (Permite Criar Uma Nova Classe a Partir de Uma Já Existente) -|-|-
class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

// -|-|- Decorators - Sigla @ (Especial TS sendo usado para validação de dados, em que fará alguma ação em um determinado ponto do código em que foi escolhido) [COMPLEXO] -|-|-
function BaseParamters() { // Criando um Constructor Decoration
    return function <T extends {new (...args: any[]): {}}>(constructor: T) { // estou trazendo todos argumentos daquele objeto pois quero inserir novos 
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters() // Implementando o Decorator chamado BaseParamters
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log(sam);


