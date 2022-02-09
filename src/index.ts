import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//  add sort method to our 3 different data structure vs classes inheritance


// const numbersCollection = new NumbersCollection([50, -3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('Xaayb');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(4);

linkedList.sort();
linkedList.print();