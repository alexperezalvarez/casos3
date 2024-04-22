// ordenamientos.js

// Función para realizar búsqueda binaria de un vehículo por placa
function buscarBinario_por_Placa(vehiculos, placaABuscar) {
    let inicio = 0;
    let fin = vehiculos.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        // Si la placa en el medio es la buscada, devuelve el índice
        if (vehiculos[medio].placa === placaABuscar) {
            return medio;
        }

        // Si la placa en el medio es mayor, busca en la mitad izquierda
        if (vehiculos[medio].placa > placaABuscar) {
            fin = medio - 1;
        } else { // Si es menor, busca en la mitad derecha
            inicio = medio + 1;
        }
    }

    // Si no se encontró la placa, devuelve -1
    return -1;
}

// Exportar la función de búsqueda binaria
export { buscarBinario_por_Placa };
