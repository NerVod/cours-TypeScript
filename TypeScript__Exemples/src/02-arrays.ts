const listeDeNombres = [1, 2, 3];
listeDeNombres.push(true); // inférence de type : (number | string)[]

const tirageDuLoto: (number | string | number[])[] = [
  1,
  2,
  3,
  4,
  5,
  6,
  "chouette",
];
tirageDuLoto.push([100, 200]);

export default {};
