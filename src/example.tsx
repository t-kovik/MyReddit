// JS Types

// const str = 'string';       //typeof str   --> 'string'
// const num = 2;              //typeof str   --> 'number'
// const nan = NaN;            //typeof nan   --> 'number'
// const obj = {};             //typeof obj   --> 'object'
// const arr = [];             //typeof arr   --> 'object'
// const nul = null;           //typeof nul   --> 'object'
// const sym = Symbol();       //typeof sym   --> 'symbol'
// const und = undefined;      //typeof und   --> 'undefined'
// const _void = void 0;       //typeof _void --> 'undefined'
// const bool = true;          //typeof bool  --> 'boolean'
// const fn = () => {};        //typeof fn    --> 'function'


let tsSTr: string = 'asd';
tsSTr = 'fdf';
//JS
function sumJS(arr) {
    if(arr instanceof Array) {
        return arr.reduce((a, v) => a+v);
    }
    throw new Error('type mismatch')''
}

//TS
function sumTS(arr:number[]) {
    return arr.reduce((a, v) => a + v);
}
//JS
// 'some' + 2 => 'some2'
// 'some' - 2 => NaN
//'2' + 2 => '22'
//'2' - 2 => NaN

//TS
const tsNumber = 2;
const tsString = 'str';

const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;


//Union types
const strOrNum: string | number = 2;

//type alias
type StrOrNumber = string | number;

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

//Array
const tsArray:number[] = [1,2,3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1,2,'3'];
const unionArray1: Array<string | number> = [1,2,'3'];

//Tuple - массив фиксированной длины
const myTuple: [number, string] = [1, '2'];

//Object
type MyObjectType = { a: number, b: string };
const myObj1:MyObjectType = {a: 1, b: '2'};

const myObj:{ a: number, b: string } = {a: 1, b: '2'};

interface  MyFirstInterface {
   readonly a: number;
    b: string;
    c: number[];
}

const myObj: MyFirstInterface = {
    a: 1,
    b: '123',
    c: [1]
}

const value = myObj.a;

const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd'};

interface  IndexInterface {
    [n: string] : string;
}

enum Methods {
    add,
    sub,
}

function calculate(method: 'add' | 'sub', left:number, right:number):number {
    switch (method) {
        case 'add': return left + right;
        case 'sub': return left - right;
    }
}

function calculate2(method: Methods, left:number, right:number):number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right;
    }
}

const sum = calculate2(Methods.add, 2, 2);

const ArrowFn: TypeFn = () => 2;
type TypeFn = () => number;

const ArrowFn1: FnInterface = (val) => 2;

interface FnInterface {
    (a:number): void;
}

type StrangerTsTypes = any | unknown | never;


const some:any = ['2']; //принимает любой тип, можно вызвать любой метод, даже если его нет у переменной

const un: unknown = '2' //принимает любой аргумент, но методов нет

//Функция, кот. не доработает до конца
function neverFn(): never {
    throw new Error('error');
}


//Generics
const myArray: Array<number> = [1,2,3];

interface  MyArrayInt<T> {
    [N: number]: T
    map<U>(fn: (el: T, index: number, arr: MyArrayInt<T>) => U): MyArrayInt<U>
    reduce(fn: (prevV: T, currV: T, index: number, arr: MyArrayInt<T>) => T): T;
}


let variable = myArray[1];

myArray.map((f, index, arr) => f+1);
myArray.map((f) => `f+${f}`);
myArray.reduce(function (sum, current) {
    return sum + current
});



function identity<T>(arg: T):T {
    return arg
}

let result2 = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}

getLen([1,2,3]);

interface IValueWithType<T> {
    type: string;
    value: T
}

function withType<U>(arg:U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg
    }
}
const result3 = withType(123);

//Встроенные generic
//Array

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

//Исключает указанные ключи
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: 'asd'
}

//Исключает неуказанные ключи
const picked: Pick<IExample<number>, 'isEmpty'> = {
    isEmpty: true
}

//Делает ключи необязательными
const partial: Partial<IExample<object>> = {
}

//Классы

class Constructor {
    public field: number = 123;
    privateField: number = 132;

    constructor(arg:number) {
        this.field = arg;
    }

    public publicMethod(): number {
        return this.field
    }

    protected protectedMethod() {
        return this.field = 11;
    }

    private privateMethod() {
        return this.field + 30;
    }
}

const instance = new Constructor(123);

class Child extends Constructor {
     public ChildMethod () {

     }

     protected protected protectedMethod(): number {
         return super.protectedMethod();
     }
}

abstract class AbstractClass {
    public abstract abstractField: number = 1234;

    public abstract abstractMethod(): number;

    protected protectedMethod() {

    }
}

class NewChild extends AbstractClass {
    public abstractField: number = 1234;

    public abstractMethod(): number {
        return this.protectedMethod();
    }
}

interface MyInterface {
    field: string;
    method(): string;
}

class NewClass implements MyInterface {
    public field: string = '123';

    public method(): string {
        return '';
    }
}



class MyComponent extends  React.Component<{ prop1: number }, { state1: string }> {
    constructor(props) {
        super(props);
        this.state = {
            state1: '123'
        }
    }
    public render() {
        return (
            <div>{this.props.prop1}</div>
        )
    }
}

const mistake = [] as Array<number>;
mistake.push(1);
mistake.push('1');

let bigObject = {
    "commit": {
        "id": "111111",
        "short_id": "1",
        "title": "JS fix",
        "author": "Example User"
    },
    "commits": [{
        "id": "111111",
        "short_id": "1",
        "title": "JS fix",
        "author": "Example User"
    }],
    "diffs": [{
        "old_path": "files/js/app.js",
        "new_path": "files/js/app.js",
        "a_node": null,
        "b_node": "19857"
    }],
    "compare": false
}

bigObject.compare = true;

type TMyBigObject = typeof bigObject;

const typedBigObject: Readonly<TMyBigObject> = bigObject;

typedBigObject.compare = false;

type TObjKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject['commit']

type MyReadOnly = {
    //mapped types
    readonly [N in keyof T]: T[N]
};


// for (let N of ['asd', 'qwe'] {}

// const some1: MyReadOnly<TMyBigObject> = {
//    compare: true
// };

type MyPartial<T> = {
    [N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
    [N in K]: T[N];
}

type picked = MyPick<TMyBigObject, 'compare'| 'commits'>;

type MyReadOnlyDeep<T> = {
    readonly [N in keyof T]: T[N] extends object ? MyReadOnlyDeep<T[N]> : T[N]
}

type TSomeType = MyReadOnlyDeep<TMyBigObject>;

// type inference
type RemoveReadOnly<T> = T extends MyReadOnlyDeep<infer E>? E : T

type TTest = RemoveReadOnly<TSomeType>;

function greaterThenZero(a:number) {
    return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

type TReturnType = ReturnType<typeof greaterThenZero>;
type TArgsType = Parameters<typeof greaterThenZero>;

