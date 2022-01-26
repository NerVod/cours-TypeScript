// Tuple

let point2D: [number, number] = [3, 10];
point2D[2] = 5;

let point3D: [number, number, number] = [...point2D, 5];
point3D.push(8)
console.log([point3D[3]])

export default {};