// VehiculoPublico.js

import Vehiculo from './Vehículo.js';

class VehiculoPublico extends Vehiculo {
    constructor(placa, modelo, tipoServicio) {
        super(placa, modelo);
        this.tipoServicio = tipoServicio;
    }
}

export default VehiculoPublico;
