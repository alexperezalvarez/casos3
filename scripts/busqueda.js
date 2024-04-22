
function buscarPorPlaca(vehiculos, placa) {
    for (let vehiculo of vehiculos) {
        if (vehiculo.placa === placa) {
            return vehiculo;
        }
    }
    return null;
}


export default buscarPorPlaca;

