// import React from "react";
//
// //1.
// function concat(x: string, y: string): string {
//     return x + y;
// }
//
// concat('Hello ', 'World');
//
// //2
//  interface MyInt {
//     howIDoIt: string;
//     simeArray: (string | number)[];
//     withData?: Array<MyInt>
// }
//
// const MyHometask:MyInt = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }
//
// //3
//
// interface  MyArrayInt<T> {
//     [N: number]: T;
//     reduce<U>(fn: (prevV: U, currV: T, index: number, arr: MyArrayInt<T>) => U): U;
// }
//  const myArray1: MyArrayInt<string | number> = [1,2,3, 'str'];
//
// myArray1.reduce<string>(((prevV, currV) => prevV + currV));
//
//
// //4
//
// interface IHomeTask {
//
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }
//
//  type MyPartial1<T> = {
//      [N in keyof T]?: MyPartial1<T[N]>
//  }
//
// const homeTask: MyPartial1<IHomeTask> = {
//     externalData: {
//         value: 'win',
//     }
// }

//5

// function HomeComponent(props: { firstProp: string }) {
//     return (
//         <div>
//             { props.firstProp }
//         </div>
//     )
// }

// interface IProps {
//     firstProp: string
// }
//
// type TMyType<T> = T extends React.ComponentType<infer R> ? R : T
//
// type t = TMyType<typeof HomeComponent>;
//
// let a: t;
//
// //6
//
// type TDivElement = JSX.IntrinsicElements['a'];
//
// const props1: TDivElement = {
//     href: '123dsff',
//     className: 'handler'
// }