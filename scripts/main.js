// main.js

// Importar las funciones de ordenamiento y búsqueda
import { buscarPorPlaca } from './busqueda.js';
import { quickSort_por_Modelo, quickSort_por_Placa } from './ordenamientos.js';
// Importar las clases necesarias
import VehiculoParticular from './VehiculoParticular.js';
import VehiculoPublico from './VehiculoPublico.js';

// Función para procesar la funcionalidad según la opción seleccionada
function procesarFuncionalidad(opcion, datos) {
    switch (opcion) {
        case 'Ingresar-OrdenarPlaca':
            // Parsear los datos suministrados
            const vehiculosData = JSON.parse(datos);
            // Crear los objetos Vehiculo según los datos
            const vehiculos = vehiculosData.map(data => {
                if (data.tipo === 'Particular') {
                    return new VehiculoParticular(data.placa, data.modelo, data.marca, data.anio, data.color, data.cilindraje, data.nroPuertas);
                } else if (data.tipo === 'Público') {
                    return new VehiculoPublico(data.placa, data.modelo, data.marca, data.anio, data.color, data.tipoServicio, data.nroPasajeros);
                }
            });
            // Ordenar los vehículos por placa
            const vehiculosOrdenados = quickSort_por_Placa(vehiculos);
            // Mostrar los vehículos y su estado esperado
            vehiculosOrdenados.forEach(vehiculo => {
                console.log(vehiculo.obtenerEstadoEsperado());
            });
            break;
        case 'Ordenar por Modelo':
            // Parsear los datos suministrados
            const vehiculosModeloData = JSON.parse(datos);
            // Crear los objetos Vehiculo según los datos
            const vehiculosModelo = vehiculosModeloData.map(data => {
                if (data.tipo === 'Particular') {
                    return new VehiculoParticular(data.placa, data.modelo, data.marca, data.anio, data.color, data.cilindraje, data.nroPuertas);
                } else if (data.tipo === 'Público') {
                    return new VehiculoPublico(data.placa, data.modelo, data.marca, data.anio, data.color, data.tipoServicio, data.nroPasajeros);
                }
            });
            // Ordenar los vehículos por modelo
            const vehiculosOrdenadosPorModelo = quickSort_por_Modelo(vehiculosModelo);
            // Mostrar los vehículos ordenados por modelo
            vehiculosOrdenadosPorModelo.forEach(vehiculo => {
                console.log(vehiculo);
            });
            break;
        case 'Buscar por Placa':
            // Parsear los datos suministrados
            const { placa, vehiculosBuscar } = JSON.parse(datos);
            // Buscar el vehículo por placa
            const vehiculoEncontrado = buscarPorPlaca(placa, vehiculosBuscar);
            // Mostrar el vehículo encontrado
            console.log(vehiculoEncontrado);
            break;
        default:
            console.log('Opción no válida');
    }
}

export default procesarFuncionalidad;
