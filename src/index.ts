// Lógica básica para el convertidor de bases
function convertBase(
    value: string,
    fromBase: number,
    toBase: number
): string | null {
    try {
        const num = parseInt(value, fromBase);
        if (isNaN(num)) return null;
        return num.toString(toBase).toUpperCase();
    } catch {
        return null;
    }
}

// Conectar con el DOM
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("converter-form") as HTMLFormElement;
    const input = document.getElementById("input-value") as HTMLInputElement;
    const fromBase = document.getElementById("from-base") as HTMLSelectElement;
    const toBase = document.getElementById("to-base") as HTMLSelectElement;
    const result = document.getElementById("result") as HTMLDivElement;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = input.value.trim();
        const from = parseInt(fromBase.value, 10);
        const to = parseInt(toBase.value, 10);

        const output = convertBase(value, from, to);
        if (output === null) {
            result.textContent = "Entrada no válida para la base seleccionada.";
            result.style.color = "red";
        } else {
            result.textContent = `Resultado: ${output}`;
            result.style.color = "green";
        }
    });
});