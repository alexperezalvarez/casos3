
// Función para buscar un vehículo por placa en una lista de vehículos
function buscarPorPlaca(vehiculos, placa) {
    for (let vehiculo of vehiculos) {
        if (vehiculo.placa === placa) {
            return vehiculo;
        }
    }
    return null; // Retorna null si no se encuentra el vehículo
}

export default buscarPorPlaca;
