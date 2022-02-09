"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// reusable code for sorting algorithm for 3 diff data structures - array, strings, linked list, bubble sort 
// class Sorter {
//   collection: number [];
//   constructor(collection: number[]) {
//     this.collection = collection;
//   }
// }
