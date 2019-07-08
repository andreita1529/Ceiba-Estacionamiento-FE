import { PaginaInicio } from './parqueadero.po';

describe('Parqueadero app ', () => {
    let paginaInicio: PaginaInicio;
    const placa: string = "DXR423";
    const placaMoto: string = "HIL01E";
    const tipoVehiculo: string = "CARRO";
    const tipoVehiculoMoto: string = "MOTO";
    const cilindraje: string = "600";

    beforeEach(async () => {
      paginaInicio = new PaginaInicio();
      await paginaInicio.navigateTo();
      });

    it('ingresar carro', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + placa + ", con exito";

        await paginaInicio.setTextoPlaca(placa);
        await paginaInicio.clickTipoVehiculoSeleccionado();
        await paginaInicio.setTipoVehiculoOpcionSeleccionado(tipoVehiculo);
        await paginaInicio.clickBtnIngresarBoton();
        await paginaInicio.waitUntilToastMessageIsPresent();
        await paginaInicio.clickBtnRefrescarBoton();

        // Act
        const toastContent = await paginaInicio.getToastMessageText();

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

      });


    it('ingresar moto', async () => {

        // Arrange
        const expectedMessage = "se registro la entrada del vehiculo: " + placaMoto + ", con exito";

        await paginaInicio.setTextoPlaca(placaMoto);
        await paginaInicio.clickTipoVehiculoSeleccionado();
        await paginaInicio.setTipoVehiculoOpcionSeleccionado(tipoVehiculoMoto);
        await paginaInicio.waitUntilCilindrajeEntrada();
        await paginaInicio.setTextoCilindraje(cilindraje);
        await paginaInicio.waitUntilCilindrajeEntradaEnabled();
        await paginaInicio.clickBtnIngresarBoton();
        await paginaInicio.waitUntilToastMessageIsPresent();
        await paginaInicio.clickBtnRefrescarBoton();

        // Act
        const toastContent = await paginaInicio.getToastMessageText();

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

      })

    it('should should vehicle In parking register', async () => {

        // Arrange
        const expectedMessage = "Este vehiculo ya se encuentra en el parqueadero";

        await paginaInicio.setTextLicencePlate(licensePlate);
        await paginaInicio.clickVehicleTypeSelect();
        await paginaInicio.setVehicleTypeOptionSelect(vehicleTypeCar);
        await paginaInicio.clickBtnRegisterButton();
        await paginaInicio.waitUntilToastMessageIsPresent();

        // Act
        const toastContent = await paginaInicio.getToastMessageText();

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

      });

    it('should should bad register', async () => {

        // Arrange
        const expectedMessage = "Se debe ingresar el tipo";

        await paginaInicio.setTextLicencePlate(licensePlate);
        await paginaInicio.clickVehicleTypeSelect();
        await paginaInicio.setVehicleTypeOptionSelect(0);
        await paginaInicio.clickBtnRegisterButton();
        await paginaInicio.waitUntilToastMessageIsPresent();

        // Act
        const toastContent = await paginaInicio.getToastMessageText()

        // Assert
        expect(toastContent.trim()).toEqual(expectedMessage);

      });
})
