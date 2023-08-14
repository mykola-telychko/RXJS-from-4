import { from } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/from
// Example 4: Observable from string

//emit string as a sequence
const source = from('Hello World');
//output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribe = source.subscribe((val) => console.log(val));
