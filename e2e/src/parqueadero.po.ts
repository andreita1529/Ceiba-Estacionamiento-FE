import { browser, element, by, ExpectedConditions, ProtractorExpectedConditions, ElementFinder, $ } from 'protractor';


export class PaginaInicio {
    until: ProtractorExpectedConditions;

    constructor() {
        this.until = ExpectedConditions;
    }


    // navegando
    navigateTo(url = 'Inicio'): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>;
    }

    // devolver elementos del DOM

    getTipoVeviculoSeleccionado(): ElementFinder {
        return $('#tipoVehiculo');
    }
    getPlacaEntrada(): ElementFinder {
        return $('#placa');
    }
    getToastMessage(): ElementFinder {
        return element(by.className('toast-message'));
    }
    getBtnIngresarBoton(): ElementFinder {
        return $('#btnIngresar');
    }
    getCilindrajeEntrada(): ElementFinder {
        return $('#cilindraje');
    }
    getBtnRefrescarBoton(): ElementFinder {
      return $('#btnRefrescar');
  }

    // devolver contenido de elementos del DOM

    async getToastMessageText(): Promise<string> {
        return await this.getToastMessage().getText();
    }

    // modificar elementos del DOM

    async setTextoPlaca(text: string): Promise<void> {
        return await this.getPlacaEntrada().sendKeys(text);
    }

    async setTipoVehiculoOpcionSeleccionado(optionI: string): Promise<void> {
        // Tick to wait until options apear
        await browser.sleep(500);
        // End tick
        const options: ElementFinder[] = await this.getTipoVeviculoSeleccionado().all(by.tagName('option'));
        options[optionI].click();
    }

    async setTextoCilindraje(text: string): Promise<void> {
        return await this.getCilindrajeEntrada().sendKeys(text);
    }

    // click en elementos

    async clickBtnIngresarBoton(): Promise<void> {
        await this.getBtnIngresarBoton().click();
    }

    async clickBtnRefrescarBoton(): Promise<void> {
      await this.getBtnRefrescarBoton().click();
    }

    async clickTipoVehiculoSeleccionado(): Promise<void> {
        await this.getTipoVeviculoSeleccionado().click();
    }

    // metodos en espera de accion

    async waitUntilToastMessageIsPresent(): Promise<void> {
        return await this.waitUntilIsPresent(this.getToastMessage());
    }

    async waitUntilCilindrajeEntrada(): Promise<void> {
        return await this.waitUntilIsPresent(this.getCilindrajeEntrada());
    }

    async waitUntilCilindrajeEntradaEnabled(): Promise<void> {
        return await this.waitUntilIsEnabled(this.getCilindrajeEntrada());
    }

    async waitUntilIsPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.presenceOf(element),
            5000,
            `Element ${id} taking too long to appear in the DOM`
        );
    }

    async waitUntilIsEnabled(element: ElementFinder): Promise<void> {
        const id = await element.getId()
        return await browser.wait(
            this.until.elementToBeClickable(element),
            5000,
            `Element ${id} taking too long to appear in the DOM`
        );
    }

    // metodos en espera de accion al no aparecer

    async waitUnilToastMessageIsNotPresent(): Promise<void> {
        return await this.waitUntilIsNotPresent(this.getToastMessage());
    }

    async waitUntilIsNotPresent(element: ElementFinder): Promise<void> {
        const id = await element.getId();
        return await browser.wait(
            this.until.stalenessOf(element),
            5000,
            `Element ${id} taking too long to disappear in the DOM`
        );

    }
}
