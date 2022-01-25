const form: HTMLFormElement | null = document.querySelector("form"); // inférence de type HTMLFormElement

const operationsArithmetiques = (a: number, b: number): [number, number] => {
  return [a + b, a * b];
};

if (form !== null) {
  // Réduction de type
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Conversion forcée
    const inputNombre1 = <HTMLInputElement | null>(
      document.getElementsByName("nombre1")[0]
    );
    const inputNombre2: HTMLInputElement | null = document.querySelector(
      "input[name='nombre2']"
    );

    if (inputNombre1 === null || inputNombre2 === null) {
      return;
    }

    const nombre1 = parseInt(inputNombre1.value);
    const nombre2 = parseInt(inputNombre2.value);

    const condition =
      typeof nombre1 === "number" && typeof nombre2 === "number";

    if (condition) {
      // Affectation par décomposition
      const [somme, multiplication] = operationsArithmetiques(nombre1, nombre2);
      const p = document.querySelector("p");
      if (p !== null) {
        p.textContent = `la somme donne ${somme} et la multiplication donne ${multiplication}`;
      }
    }
  });
}
