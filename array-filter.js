let peoples = [
  {
    name: 'Andi',
    gender: 'male',
  },
  {
    name: 'Cindy',
    gender: 'female',
  },
  {
    name: 'Aya',
    gender: 'female',
  }
];

let females = peoples.filter(people => {
  return people.gender === 'male';
});

console.log(females);
