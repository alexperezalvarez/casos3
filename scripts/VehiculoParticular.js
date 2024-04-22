// VehiculoParticular.js

import Vehiculo from './Vehículo.js';

class VehiculoParticular extends Vehiculo {
    constructor(placa, modelo, propietario) {
        super(placa, modelo);
        this.propietario = propietario;
    }
}

export default VehiculoParticular;
