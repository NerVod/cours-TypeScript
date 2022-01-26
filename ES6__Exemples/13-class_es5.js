function Cercle(x, y, rayon) {
  this.x = x;
  this.y = y;
  this.rayon = rayon;
}

Cercle.utiliteDeMaClasse = "Permet de créer des cercles";

Cercle.distanceEntre = function (c1, c2) {
  return Math.sqrt(Math.pow(c2.x - c1.x, 2) + Math.pow(c2.y - c1.y));
};

Cercle.prototype.deplacer = function (deltaX, deltaY) {
  this.x += deltaX;
  this.y += deltaY;
};
Cercle.prototype.afficherInfo = function () {
  console.log(
    "je suis un cercle de centre (" +
      this.x +
      ", " +
      this.y +
      ") et de rayon" +
      this.rayon
  );
};
