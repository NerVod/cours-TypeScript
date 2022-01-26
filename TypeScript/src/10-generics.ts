function dernierElement<Type>(tableau: Type[]): Type {
    return tableau[tableau.length -1];
}

const tableauDeNombres: number[] = [1, 2, 3];
const tableauDeChaines: string[] = ["un", "deux", "trois"];
const dernierNombre = dernierElement(tableauDeNombres);
const derniereChaine = dernierElement(tableauDeChaines);


function premierElement(tableau:any[]): any {
    return tableau[0];
}

const premierNombre = premierElement(tableauDeNombres); // de type any

export default {}