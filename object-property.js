const students = [
    {id: 21, name: 'md. mahfuj'},
    {id: 22, name: 'mahfuj hasan'},
    {id: 23, name: 'hasan munna'},
    {id: 24, name: 'mahfuj munna'}
];

const names = students.map( s => s.name);
console.log(names);
const ids = students.map( s => s.id);
console.log(ids);
const bigger = students.filter( s => s.id > 22);
console.log(bigger);